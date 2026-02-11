
import React from 'react';
import { motion } from 'framer-motion';

/**
 * High-end background animation for the Hero section.
 */
export const HeroBackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
        <defs>
          <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1C1C1C" strokeWidth="0.5" strokeOpacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" />
        
        <motion.g
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <path d="M-100,200 L1200,600 M1200,200 L-100,600" stroke="#1C1C1C" strokeWidth="0.5" strokeOpacity="0.1" fill="none" />
          <path d="M200,-100 L600,1200 M800,-100 L400,1200" stroke="#1C1C1C" strokeWidth="0.5" strokeOpacity="0.1" fill="none" />
        </motion.g>
      </svg>
    </div>
  );
};

/**
 * PillarFlowAnimation: Visualizes the 3 infrastructure pillars flowing into 1 operational core.
 */
export const PillarFlowAnimation: React.FC = () => {
  const pillars = [
    { label: "Occupancy and Reputation", sub: "Engine", y: 60, curveY: 60 },
    { label: "Recruitment", sub: "Engine", y: 160, curveY: 150 },
    { label: "Staff Retention and Oracle", sub: "Engine", y: 260, curveY: 260 }
  ];

  return (
    <div className="relative w-full aspect-[1.3/1] p-8 flex items-center justify-center group overflow-hidden">
      <svg viewBox="0 0 460 320" className="w-full h-full drop-shadow-sm">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1C1C1C" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#1C1C1C" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Central Home Pillar */}
        <g transform="translate(380, 160)">
          <motion.rect 
            initial={{ height: 0 }}
            animate={{ height: 220 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            x="-40" y="-110" width="80" height="220" 
            fill="none" stroke="#1C1C1C" strokeWidth="1.5"
          />
          <motion.rect 
            initial={{ height: 0 }}
            animate={{ height: 200 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            x="-30" y="-100" width="60" height="200" 
            fill="transparent" stroke="#1C1C1C" strokeWidth="0.5" strokeDasharray="4 2"
          />
          <text y="0" textAnchor="middle" className="fill-slate-900 text-[11px] font-bold uppercase tracking-[0.3em]" style={{ writingMode: 'vertical-rl' }}>
            Your care home
          </text>
        </g>

        {/* The Three Input Pillars */}
        {pillars.map((p, i) => (
          <g key={i}>
            <motion.g
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.2 }}
            >
              <text x="0" y={p.y - 4} className="fill-slate-900 text-[10px] font-bold uppercase tracking-wider">{p.label}</text>
              <text x="0" y={p.y + 10} className="fill-stone-400 text-[8px] font-medium uppercase tracking-widest">{p.sub}</text>
              
              <path
                d={`M 160 ${p.y} C 230 ${p.curveY}, 290 160, 340 160`}
                fill="none"
                stroke="#1C1C1C"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />

              <motion.path
                d={`M 160 ${p.y} C 230 ${p.curveY}, 290 160, 340 160`}
                fill="none"
                stroke="url(#flowGrad)"
                strokeWidth="1.5"
                strokeDasharray="10 20"
                animate={{ strokeDashoffset: [0, -60] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <motion.circle
                r="3"
                fill="#1C1C1C"
                animate={{
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "linear"
                }}
                style={{
                  motionPath: `path('M 160 ${p.y} C 230 ${p.curveY}, 290 160, 340 160')`
                }}
              />
            </motion.g>
          </g>
        ))}
      </svg>
    </div>
  );
};

export const ChaosComparison: React.FC = () => {
  const reactivePath = "M 0 40 C 40 0, 70 80, 120 20 C 170 60, 210 0, 270 70 C 320 20, 370 60, 420 30 L 500 50";
  const effitoPath = "M 0 40 L 500 40";

  return (
    <div className="w-full aspect-[1.5/1] bg-white rounded-sm border border-stone-200 p-8 md:p-10 flex flex-col relative shadow-[0_30px_60px_rgba(0,0,0,0.03)] overflow-hidden">
      
      {/* REACTIVE STATE BLOCK */}
      <div className="relative flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-stone-300 rounded-full" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400">Reactive Process</span>
          </div>
          <span className="text-[9px] font-bold text-stone-300 uppercase tracking-widest italic px-3 py-1 border border-stone-100 rounded-full">Manual Leakage</span>
        </div>
        
        <svg viewBox="0 0 500 80" className="w-full h-16 overflow-visible">
          {/* Static Track for context */}
          <path 
            d="M 0 40 L 500 40" 
            fill="none" 
            stroke="#F5F5F4" 
            strokeWidth="1" 
          />
          
          {/* The Erratic Path */}
          <path 
            d={reactivePath} 
            fill="none" 
            stroke="#D4D4D8" 
            strokeWidth="2" 
            strokeDasharray="8 6"
            className="opacity-80"
          />
          
          {/* Erratic Point - ANIMATING ALONG PATH */}
          <motion.circle 
            r="5" 
            fill="#A1A1AA"
            style={{ 
              offsetPath: `path("${reactivePath}")`,
              offsetRotate: "auto"
            }}
            animate={{ 
              offsetDistance: ["0%", "100%"]
            }} 
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear" 
            }} 
          />

          {/* High-Impact Labels */}
          <text x="60" y="10" className="fill-stone-400 text-[8px] font-bold uppercase tracking-widest">Missed Call</text>
          <text x="210" y="75" className="fill-stone-400 text-[8px] font-bold uppercase tracking-widest">Manual Error</text>
          <text x="380" y="15" className="fill-stone-400 text-[8px] font-bold uppercase tracking-widest">Lost Lead</text>
        </svg>
      </div>

      {/* Institutional Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="h-px bg-stone-100 flex-1" />
        <span className="text-[8px] uppercase tracking-[0.5em] text-stone-300 font-bold">System Upgrade</span>
        <div className="h-px bg-stone-100 flex-1" />
      </div>

      {/* EFFITO STATE BLOCK */}
      <div className="relative flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <motion.span 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-slate-900 rounded-full shadow-[0_0_8px_rgba(15,23,42,0.4)]" 
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-900">Effito™ Infrastructure</span>
          </div>
          <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest px-3 py-1 bg-stone-50 border border-stone-200 rounded-full">Optimized Engine</span>
        </div>

        <svg viewBox="0 0 500 80" className="w-full h-16 overflow-visible">
          <defs>
            <filter id="premiumGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* The Base Track */}
          <path 
            d={effitoPath} 
            fill="none" 
            stroke="#E7E5E4" 
            strokeWidth="1" 
          />

          {/* The Solid Infrastructure Line */}
          <motion.path 
            d={effitoPath} 
            fill="none" 
            stroke="#1C1C1C" 
            strokeWidth="3" 
            initial={{ pathLength: 0 }} 
            animate={{ pathLength: 1 }} 
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
          
          {/* The High-Velocity Glide Point */}
          <motion.circle 
            r="6" 
            fill="#1C1C1C" 
            style={{ 
              offsetPath: `path("${effitoPath}")`,
              offsetRotate: "auto"
            }}
            animate={{ 
              offsetDistance: ["0%", "100%"]
            }} 
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "linear" 
            }} 
            className="shadow-xl"
          />

          {/* Institutional Labels */}
          <text x="50" y="25" className="fill-slate-900 text-[9px] font-bold uppercase tracking-[0.3em]">Instant Triage</text>
          <text x="210" y="25" className="fill-slate-900 text-[9px] font-bold uppercase tracking-[0.3em]">Auto-Qualify</text>
          <text x="380" y="25" className="fill-slate-900 text-[9px] font-bold uppercase tracking-[0.3em]">Capture Lock</text>
        </svg>
      </div>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%">
          <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#archGrid)" />
        </svg>
      </div>
    </div>
  );
};

export const InfrastructureArch: React.FC = () => <ChaosComparison />;

export const GrowthNode: React.FC = () => (
  <div className="w-12 h-12 relative flex items-center justify-center">
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute inset-0 border border-slate-900 rounded-full"
    />
    <div className="w-2 h-2 bg-slate-900 rounded-full" />
  </div>
);
