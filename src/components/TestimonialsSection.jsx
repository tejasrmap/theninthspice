import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      author: 'Sunitha Reddy',
      location: 'Hyderabad, Telangana',
      product: 'Guntur Red Chilli Powder',
      quote: "The Red Chilli Powder has the exact vibrant natural crimson hue of home-pounded Guntur chillies without that fake neon dye glow. The aroma blooms instantly in hot ghee tadka!",
      rating: 5,
      date: 'Verified Buyer'
    },
    {
      author: 'Karthik Rao',
      location: 'Bengaluru, Karnataka',
      product: 'Nizamabad Turmeric Powder',
      quote: "You can tell the curcumin content is genuine the moment you open the pouch. Deep earthy aroma, zero chemical smell, and perfect for morning haldi doodh. A permanent pantry staple.",
      rating: 5,
      date: 'Verified Buyer'
    },
    {
      author: 'Venkatesh V.',
      location: 'Visakhapatnam, Andhra Pradesh',
      product: 'The Signature Duo (250g Pack)',
      quote: "Proud to see an Andhra brand taking pure single-origin spices this seriously. Arrived airtight in heavy-barrier pouches, fresh and fragrant like it was ground yesterday.",
      rating: 5,
      date: 'Verified Buyer'
    },
    {
      author: 'Deepthi P.',
      location: 'Chennai, Tamil Nadu',
      product: 'Guntur Red Chilli Powder',
      quote: "Clean, balanced heat without burning the stomach. My grandmother immediately noticed the difference in our Sunday mutton curry. Absolutely top quality.",
      rating: 5,
      date: 'Verified Buyer'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 sm:py-20 bg-[#F3EAD8]/50 border-b border-[#EAE1D5] w-full">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
        
        {/* Section Header with KaaramKathalu Heritage Styling */}
        <div className="text-center mb-10 max-w-xl mx-auto space-y-1.5">
          <span className="font-mono text-[#9C3A1A] text-[10px] font-semibold tracking-widest uppercase flex items-center justify-center gap-1.5">
            <span>🌿</span> Loved by Food Lovers <span>🌿</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-serif-brand font-semibold text-[#2C1E18]">
            What Our Kitchens Say
          </h2>
          <div className="heritage-divider text-[#9C3A1A] w-full max-w-[140px]">✻</div>
          <p className="font-serif-brand italic text-stone-600 text-xs sm:text-[13px] leading-relaxed">
            Cherished words from homes across India celebrating authentic single-origin Andhra spice purity.
          </p>
        </div>

        {/* Testimonial Cards Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl p-5 border border-[#EAE1D5] shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between ${
                idx === currentSlide ? 'ring-1 ring-[#9C3A1A]/40' : ''
              }`}
            >
              <div className="space-y-3">
                {/* Stars & Product Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{t.date}</span>
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-[#9C3A1A]">
                  {t.product}
                </div>

                {/* Quote */}
                <p className="text-xs text-stone-700 leading-relaxed font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 mt-4 border-t border-[#F0E9DF] flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif-brand font-semibold text-stone-900">{t.author}</div>
                  <div className="text-[10px] text-stone-400 font-mono">{t.location}</div>
                </div>
                <Quote className="w-4 h-4 text-[#9C3A1A]/30 shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
