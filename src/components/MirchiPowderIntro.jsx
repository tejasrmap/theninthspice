import React, { useEffect, useRef, useState } from 'react';

export default function MirchiPowderIntro({ onFadingStart, onComplete }) {
  const canvasRef = useRef(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Realistic Guntur Red Chilli Powder particles
    const particleCount = Math.min(window.innerWidth < 640 ? 350 : 650, 700);
    const particles = [];

    // Vivid natural single-origin Guntur Red Chilli tones
    const mirchiColors = [
      '#A6261D', // Brand Chilli Red
      '#B91C1C', // Deep Crimson
      '#881313', // Sun-dried Dark Chilli
      '#DC2626', // Scarlet
      '#C23321', // Terracotta Spice
      '#EF4444', // Fresh Ground Flake
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * -height * 1.2,
        size: Math.random() * 2.2 + 0.8,     // Fine ground spice grains
        length: Math.random() * 12 + 5,      // Falling powder streak
        speedY: Math.random() * 7 + 4.5,     // Natural gravity fall speed
        speedX: (Math.random() - 0.5) * 0.7, // Lateral air drift
        color: mirchiColors[Math.floor(Math.random() * mirchiColors.length)],
        opacity: Math.random() * 0.85 + 0.25,
      });
    }

    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds clean powder rain

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render falling mirchi powder grains
      for (let p of particles) {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.strokeStyle = p.color;
        ctx.fillStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = 'round';

        // Fine powder fall streak
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.speedX * 0.4, p.y + p.length);
        ctx.stroke();

        // Round powder grain at the leading edge
        ctx.beginPath();
        ctx.arc(p.x + p.speedX * 0.4, p.y + p.length, p.size * 0.65, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Update positions
        p.y += p.speedY;
        p.x += p.speedX;

        // Loop back up
        if (p.y > height + 20) {
          p.y = Math.random() * -30;
          p.x = Math.random() * width;
        }
      }

      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        // Trigger smooth blur fade out on the website and dissolve the translucent overlay
        setFading(true);
        if (onFadingStart) onFadingStart();
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 800);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    // Safety fallback timeout: guaranteed to dismiss after 3 seconds
    const safetyTimer = setTimeout(() => {
      setFading(true);
      if (onFadingStart) onFadingStart();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 3000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(safetyTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete, onFadingStart]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none transition-all duration-800 ease-out ${
        fading 
          ? 'opacity-0 pointer-events-none backdrop-blur-0 bg-[#F8F4EB]/0' 
          : 'opacity-100 bg-[#F8F4EB]/60 backdrop-blur-[6px]'
      }`}
      style={{
        WebkitBackdropFilter: fading ? 'blur(0px)' : 'blur(6px)',
      }}
    >
      {/* Canvas with falling red chilli powder */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Brand Insignia & Title */}
      <div 
        className={`relative z-10 text-center px-6 pointer-events-none transition-all duration-700 space-y-1.5 ${
          fading ? 'scale-105 opacity-0 -translate-y-2' : 'scale-100 opacity-100 translate-y-0'
        }`}
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A6261D] font-semibold block">
          Single-Origin Andhra Harvest
        </span>
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-[0.24em] text-[#24140F] drop-shadow-sm">
          THE NINTH SPICE<span className="text-xs align-top text-[#C49A45] ml-0.5">™</span>
        </h2>
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#766B60] block pt-0.5">
          The Art of Pure Spices
        </span>
      </div>
    </div>
  );
}
