import React from 'react';

export default function AnnouncementBar() {
  const announcements = [
    { text: "SINGLE-ORIGIN ANDHRA HARVEST • ZERO ARTIFICIAL COLOURS • ZERO PRESERVATIVES", highlight: false },
    { text: "COMPLIMENTARY PAN-INDIA DISPATCH ON ALL ORDERS ABOVE ₹599", highlight: true },
    { text: "WELCOME10 • USE CODE FOR 10% OFF YOUR FIRST PANTRY BATCH", highlight: false },
    { text: "LAB-CERTIFIED PURITY • 0% SUDAN DYES • 0% LEAD CHROMATE", highlight: true },
    { text: "SLOW STONE-GROUND AMBIENT PROCESSING TO PRESERVE ESSENTIAL OILS", highlight: false }
  ];

  return (
    <div className="bg-[#24140F] text-[#E9DDC9] text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase py-2 overflow-hidden border-b border-[#382218] select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
        {[...announcements, ...announcements, ...announcements].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0">
            <span className="text-[#C49A45] text-xs">✻</span>
            <span className={item.highlight ? "text-[#C49A45] font-semibold" : "text-[#E9DDC9]"}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
