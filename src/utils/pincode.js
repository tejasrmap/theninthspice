// Indian Postal Pincode resolver for THE NINTH SPICE™
const PINCODE_MAP = {
  '531021': { city: 'Visakhapatnam (Paravada)', state: 'Andhra Pradesh' },
  '530001': { city: 'Visakhapatnam', state: 'Andhra Pradesh' },
  '522001': { city: 'Guntur', state: 'Andhra Pradesh' },
  '500001': { city: 'Hyderabad', state: 'Telangana' },
  '560001': { city: 'Bengaluru', state: 'Karnataka' },
  '600001': { city: 'Chennai', state: 'Tamil Nadu' },
  '110001': { city: 'New Delhi', state: 'Delhi' },
  '400001': { city: 'Mumbai', state: 'Maharashtra' }
};

export async function fetchPincodeDetails(pin) {
  const cleanPin = pin.trim();
  if (!/^\d{6}$/.test(cleanPin)) return null;

  // Check local fast dictionary first
  if (PINCODE_MAP[cleanPin]) {
    return PINCODE_MAP[cleanPin];
  }

  try {
    const res = await fetch(`https://api.postalpincode.in/pincode/${cleanPin}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data[0]?.Status === 'Success' && data[0]?.PostOffice?.length > 0) {
        const poList = data[0].PostOffice;
        const targetPO = poList.find(po => po.BranchType === 'Head Post Office') || poList[0];
        const city = targetPO.District || targetPO.Block || targetPO.Name || '';
        const state = targetPO.State || '';
        return { city, state };
      }
    }
  } catch (e) {
    // Graceful offline fallback
  }

  // Generic fallback if 6 digits
  return { city: 'Serviceable Pincode', state: 'Express Dispatch' };
}
