// Indian Postal Pincode lookup utility from KaaramKathalu
export async function fetchPincodeDetails(pin) {
  const cleanPin = pin.trim();
  if (!/^\d{6}$/.test(cleanPin)) return null;

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
    console.warn("Pincode lookup fallback:", e);
  }

  return null;
}
