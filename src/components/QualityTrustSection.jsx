import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Truck, Sparkles, FileText } from 'lucide-react';

export default function QualityTrustSection() {
  const verifiedPillars = [
    {
      title: "Zero Sudan Red Dyes",
      detail: "Tested for Sudan I, II, III, and IV dyes. 100% natural capsaicin crimson hue from ripe Andhra chillies.",
      tag: "Chemical Lab Assay"
    },
    {
      title: "Zero Lead Chromate",
      detail: "Zero synthetic yellow pigments, chalk, or industrial starch enhancers added to our finger turmeric.",
      tag: "Heavy Metal Check"
    },
    {
      title: "Ambient Temperature Milling",
      detail: "Processed at calibrated temperatures below 32°C to prevent thermal scorching of volatile essential oils.",
      tag: "Slow Stone-Ground"
    },
    {
      title: "Heavy Multi-Barrier Pouch",
      detail: "Sealed airtight in heavy-gauge pouches with food-grade inner foil to block light, oxygen, and ambient humidity.",
      tag: "Packaging Standard"
    }
  ];

  return (
    <section className="py-6 sm:py-10 bg-white border-b border-[#E9DDC9] w-full">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10 space-y-5">
        
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#A6261D] font-semibold">
            Institutional Standards
          </span>
          <h2 className="font-serif-brand text-xl sm:text-2xl text-[#24140F] font-medium">
            Quality You Can Verify
          </h2>
          <div className="heritage-divider text-[#C49A45] w-full max-w-[140px]">✻</div>
          <p className="text-xs text-[#766B60] font-sans-brand leading-relaxed">
            Operated by <strong>GT InnoX LLP</strong>. Every batch is packaged in accordance with verified FSSAI safety norms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {verifiedPillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-[#F8F4EB] border border-[#E9DDC9] space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#A6261D] bg-white px-2 py-0.5 rounded border border-[#E9DDC9]">
                  {pillar.tag}
                </span>
                <h3 className="font-serif-brand font-semibold text-sm text-[#24140F]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#766B60] leading-relaxed font-sans-brand">
                  {pillar.detail}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E9DDC9]/50 flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
