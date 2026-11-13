import React from 'react';

export default function AnnouncementBar() {
  const tickerItems = [
    "🌿 Complimentary shipping across India on orders above ₹599",
    "🌶️ 100% Pure Andhra Single Origin Harvest (Guntur & Nizamabad)",
    "✨ Use code WELCOME10 for 10% off your first batch",
    "🛡️ Certified Zero Sudan Red, Zero Lead Chromate & Zero Preservatives",
    "🚚 Freshly packed & dispatched within 24 hours from Visakhapatnam",
  ];

  return (
    <div className="bg-[#2C1E18] text-[#FAF5EC] text-[10.5px] font-mono tracking-wider uppercase py-2 overflow-hidden border-b border-[#3D2C24] select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <span key={idx} className="flex items-center gap-8 font-medium">
            <span>{item}</span>
            <span className="text-[#9C3A1A]">✻</span>
          </span>
        ))}
      </div>
    </div>
  );
}
