import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const InfrastructureArch: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [go, setGo] = useState(false);

  useEffect(() => { if (inView) setGo(true); }, [inView]);

  const active = go ? `
    .ia .b-path  { stroke-dasharray: 600; stroke-dashoffset: 600; animation: ia-dash 1.8s 0.3s ease-out forwards; }
    .ia .b-node  { animation: ia-fadeIn 0.4s 0.2s ease-out both; }
    .ia .b-text  { animation: ia-fadeUp 0.4s 0.6s ease-out both; opacity: 0; }
    .ia .b-cost  { animation: ia-fadeUp 0.4s 1.6s ease-out both; opacity: 0; }
    .ia .b-label { animation: ia-fadeIn 0.4s 0.1s ease-out both; opacity: 0; }
    .ia .x-1     { stroke-dasharray: 30; stroke-dashoffset: 30; animation: ia-dash 0.3s 2.0s ease-out forwards; }
    .ia .x-2     { stroke-dasharray: 30; stroke-dashoffset: 30; animation: ia-dash 0.3s 2.1s ease-out forwards; }
    .ia .a-line  { stroke-dasharray: 500; stroke-dashoffset: 500; animation: ia-dash 1.0s 2.8s ease-out forwards; }
    .ia .a-node  { animation: ia-fadeIn 0.4s 2.7s ease-out both; opacity: 0; }
    .ia .a-box1  { animation: ia-fadeUp 0.4s 3.0s ease-out both; opacity: 0; }
    .ia .a-box2  { animation: ia-fadeUp 0.4s 3.2s ease-out both; opacity: 0; }
    .ia .a-box3  { animation: ia-fadeUp 0.4s 3.4s ease-out both; opacity: 0; }
    .ia .a-label { animation: ia-fadeIn 0.4s 2.6s ease-out both; opacity: 0; }
    .ia .a-result{ animation: ia-fadeUp 0.5s 3.7s ease-out both; opacity: 0; }
    .ia .pulse-dot { animation: ia-pulse 2s 3.8s ease-in-out infinite; opacity: 0; animation-fill-mode: forwards; }
    .ia .sig { offset-path: path('M 148,338 L 532,338'); animation: ia-travel 1.4s 3.9s ease-in-out infinite; }
  ` : `
    .ia .b-path, .ia .x-1, .ia .x-2, .ia .a-line { stroke-dasharray: 600; stroke-dashoffset: 600; }
    .ia .b-text, .ia .b-cost, .ia .b-label, .ia .b-node,
    .ia .a-node, .ia .a-box1, .ia .a-box2, .ia .a-box3,
    .ia .a-label, .ia .a-result, .ia .pulse-dot { opacity: 0; }
  `;

  return (
    <>
      <style>{`
        @keyframes ia-dash   { to { stroke-dashoffset: 0; } }
        @keyframes ia-fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ia-fadeUp { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ia-pulse  { 0%,100% { r: 4; opacity: 1; } 50% { r: 7; opacity: 0.3; } }
        @keyframes ia-travel { 0% { offset-distance: 0%; } 100% { offset-distance: 100%; } }
        ${active}
      `}</style>

      <svg
        ref={ref}
        className="ia"
        width="100%"
        viewBox="0 0 680 480"
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", display: 'block' }}
      >
        {/* ── BEFORE ── */}
        <rect x="0" y="0" width="680" height="230" fill="#faf9f7"/>

        <g className="b-label">
          <circle cx="36" cy="36" r="5" fill="#c8c4bc"/>
          <text x="50" y="40" fontSize="9" fontWeight="700" letterSpacing="3" fill="#b4b2a9">REACTIVE PROCESS</text>
          <text x="644" y="40" fontSize="9" fontWeight="700" letterSpacing="2" fill="#d0a0a0" textAnchor="end" fontStyle="italic">MANUAL LEAKAGE</text>
        </g>

        <path
          className="b-path"
          d="M 80,120 C 120,120 130,90 160,100 C 190,110 200,140 240,135 C 280,130 290,95 330,105 C 370,115 380,145 420,138 C 460,131 470,100 510,108 C 540,115 555,130 580,125"
          fill="none" stroke="#d0cdc8" strokeWidth="1.5" strokeDasharray="6 4"
        />

        <g className="b-node">
          <circle cx="80" cy="120" r="6" fill="#c8c4bc"/>
        </g>

        <text className="b-text" x="155" y="84" fontSize="8" fill="#c8a0a0" textAnchor="middle" letterSpacing="1.5">MISSED CALL</text>
        <text className="b-text" x="335" y="89" fontSize="8" fill="#c8a0a0" textAnchor="middle" letterSpacing="1.5">LOST LEAD</text>
        <text className="b-text" x="245" y="158" fontSize="8" fill="#c8c4bc" textAnchor="middle" letterSpacing="1.5">MANUAL ERROR</text>

        <g className="b-cost">
          <rect x="500" y="148" width="130" height="34" rx="6" fill="#fff0f0" stroke="#f0c0c0" strokeWidth="0.5"/>
          <text x="565" y="162" fontSize="9" fill="#c07070" textAnchor="middle" letterSpacing="1" fontWeight="700">−£75,000/yr</text>
          <text x="565" y="175" fontSize="8" fill="#d09090" textAnchor="middle">per missed resident</text>
        </g>

        <g className="b-node" style={{ animationDelay: '1.9s' }}>
          <circle cx="580" cy="125" r="14" fill="none" stroke="#e08080" strokeWidth="1.5" opacity="0.8"/>
        </g>
        <line className="x-1" x1="572" y1="117" x2="588" y2="133" stroke="#e08080" strokeWidth="2" strokeLinecap="round"/>
        <line className="x-2" x1="588" y1="117" x2="572" y2="133" stroke="#e08080" strokeWidth="2" strokeLinecap="round"/>

        {/* Divider */}
        <line x1="0" y1="230" x2="680" y2="230" stroke="#e8e5e0" strokeWidth="1"/>

        {/* ── AFTER ── */}
        <rect x="0" y="230" width="680" height="250" fill="#fff"/>

        <g className="a-label">
          <circle cx="36" cy="268" r="5" fill="#1E1E2A"/>
          <text x="50" y="272" fontSize="9" fontWeight="700" letterSpacing="3" fill="#1E1E2A">EFFITO™ INFRASTRUCTURE</text>
          <rect x="566" y="257" width="78" height="22" rx="11" fill="none" stroke="#c8c4bc" strokeWidth="1"/>
          <text x="605" y="272" fontSize="8" fill="#888780" textAnchor="middle" letterSpacing="1.5" fontWeight="700">OPTIMIZED</text>
        </g>

        <line className="a-line" x1="148" y1="338" x2="532" y2="338" stroke="#1E1E2A" strokeWidth="3" strokeLinecap="round"/>

        <g className="a-node">
          <circle cx="148" cy="338" r="6" fill="#1E1E2A"/>
        </g>

        <g className="a-box1">
          <text x="222" y="316" fontSize="8" fill="#888780" textAnchor="middle" letterSpacing="2" fontWeight="700">INSTANT TRIAGE</text>
          <line x1="222" y1="320" x2="222" y2="330" stroke="#c8c4bc" strokeWidth="0.5"/>
        </g>
        <g className="a-box2">
          <text x="340" y="316" fontSize="8" fill="#888780" textAnchor="middle" letterSpacing="2" fontWeight="700">AUTO-QUALIFY</text>
          <line x1="340" y1="320" x2="340" y2="330" stroke="#c8c4bc" strokeWidth="0.5"/>
        </g>
        <g className="a-box3">
          <text x="458" y="316" fontSize="8" fill="#888780" textAnchor="middle" letterSpacing="2" fontWeight="700">CAPTURE LOCK</text>
          <line x1="458" y1="320" x2="458" y2="330" stroke="#c8c4bc" strokeWidth="0.5"/>
        </g>

        <circle className="sig" r="4" fill="#059669" opacity="0.9"/>
        <circle className="pulse-dot" cx="532" cy="338" r="4" fill="#059669"/>

        <g className="a-result">
          <rect x="556" y="320" width="88" height="38" rx="6" fill="#f0faf5" stroke="#a0ddc0" strokeWidth="0.5"/>
          <text x="600" y="335" fontSize="11" fill="#059669" textAnchor="middle" fontWeight="700" fontStyle="italic">30s</text>
          <text x="600" y="350" fontSize="8" fill="#40a070" textAnchor="middle">response</text>
        </g>

        <text className="a-result" x="340" y="362" fontSize="9" fill="#c8c4bc" textAnchor="middle" letterSpacing="1">always on · 24 / 7 · zero manual input</text>
      </svg>
    </>
  );
};

export const GrowthNode: React.FC = () => (
  <div className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center">
    <div className="w-2 h-2 rounded-full bg-slate-400" />
  </div>
);
