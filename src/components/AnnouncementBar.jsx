import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#1C1917] text-[#FAF6EF] text-[11px] font-medium tracking-widest uppercase py-2.5 px-6 text-center w-full select-none">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
        <span>Complementary shipping across India on orders above ₹599</span>
        <span className="text-stone-500">•</span>
        <span className="text-amber-400 font-normal">Cold-Milled at Low RPM</span>
      </div>
    </div>
  );
}
