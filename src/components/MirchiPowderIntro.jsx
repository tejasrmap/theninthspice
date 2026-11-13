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
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Realistic Red Chilli Powder particles
    const particleCount = 700;
    const particles = [];

    // Vivid natural Guntur Red Chilli Powder tones (rich contrast against translucent white)
    const mirchiColors = [
      '#DC2626', // Scarlet
      '#B91C1C', // Rich Guntur Red
      '#991B1B', // Deep Ruby Chilli
      '#C23321', // Signature Ninth Spice Crimson
      '#7F1D1D', // Dark Sun-dried Chilli
      '#EF4444', // Fresh Ground Bright Flake
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * -height * 1.2,
        size: Math.random() * 2.2 + 0.8,    // Fine ground spice grains
        length: Math.random() * 10 + 4,     // Natural falling powder streak
        speedY: Math.random() * 8 + 5,      // Smooth falling speed
        speedX: (Math.random() - 0.5) * 0.6, // Gentle lateral air drift
        color: mirchiColors[Math.floor(Math.random() * mirchiColors.length)],
        opacity: Math.random() * 0.85 + 0.25,
      });
    }

    const startTime = Date.now();
    const duration = 2000; // 2 seconds clean powder rain

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render falling mirchi particles
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

        // Round powder grain
        ctx.beginPath();
        ctx.arc(p.x + p.speedX * 0.4, p.y + p.length, p.size * 0.7, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Update positions
        p.y += p.speedY;
        p.x += p.speedX;

        // Loop back up
        if (p.y > height + 20) {
          p.y = Math.random() * -40;
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
          onComplete();
        }, 1000);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete, onFadingStart]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none transition-all duration-1000 ease-out ${
        fading 
          ? 'opacity-0 pointer-events-none backdrop-blur-0 bg-white/0' 
          : 'opacity-100 bg-white/45 backdrop-blur-[8px]'
      }`}
      style={{
        WebkitBackdropFilter: fading ? 'blur(0px)' : 'blur(8px)',
      }}
    >
      {/* Canvas with falling red chilli powder over the translucent blurred site */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Clean, Decent, Minimal Brand Title only (No Cold Milling Part) */}
      <div 
        className={`relative z-10 text-center px-6 pointer-events-none transition-all duration-700 ${
          fading ? 'scale-105 opacity-0 -translate-y-2' : 'scale-100 opacity-100 translate-y-0'
        }`}
      >
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#1C1917] drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]">
          THE NINTH SPICE<span className="text-xs align-top text-[#B93822] ml-0.5">™</span>
        </h2>
      </div>
    </div>
  );
}
