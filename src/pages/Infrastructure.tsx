import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView } from 'framer-motion';

// ─── Colour tokens ────────────────────────────────────────────────────────────
const C = {
  bg: '#FFFFFF',
  grid: '#F0EDE8',
  dim: '#C8C4BC',
  mid: '#94918C',
  ink: '#1E1E2A',
  accent: '#0f172a',
  danger: '#DC2626',
  emerald: '#059669',
};

// ─── GrowthNode ───────────────────────────────────────────────────────────────
const GrowthNode: React.FC = () => (
  <div className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center">
    <div className="w-2 h-2 rounded-full bg-slate-400" />
  </div>
);

// ─── Fade helper ──────────────────────────────────────────────────────────────
interface FadeProps { delay?: number; children: React.ReactNode }
const Fade: React.FC<FadeProps> = ({ delay = 0, children }) => (
  <motion.g
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 + delay, duration: 0.5 }}
  >
    {children}
  </motion.g>
);

// ─── InfrastructureArch ───────────────────────────────────────────────────────
const InfrastructureArch: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => setPhase(3), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [inView]);

  const PulseDot: React.FC<{ cx: number; cy: number; delay?: number; color?: string }> = ({
    cx, cy, delay = 0, color = C.accent,
  }) => (
    <motion.circle
      cx={cx} cy={cy} r={4}
      fill={color}
      initial={{ scale: 0, opacity: 0 }}
      animate={phase >= 3 ? { scale: [1, 1.6, 1], opacity: [1, 0.4, 1] } : { scale: 0, opacity: 0 }}
      transition={{ delay: 2.8 + delay, duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
    />
  );

  const Signal: React.FC<{ path: string; delay?: number; color?: string; dur?: number }> = ({
    path, delay = 0, color = C.accent, dur = 1.8,
  }) => (
    <motion.circle r={3} fill={color} opacity={0.9}>
      <animateMotion path={path} dur={`${dur}s`} begin={`${2.6 + delay}s`} repeatCount="indefinite" rotate="auto" />
    </motion.circle>
  );

  return (
    <svg
      ref={ref}
      viewBox="0 0 740 480"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', fontFamily: 'Georgia, serif' }}
    >
      <defs>
        <pattern id="archGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke={C.grid} strokeWidth="0.5" />
        </pattern>
        <marker id="arrowBlack" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill={C.accent} />
        </marker>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="740" height="480" fill={C.bg} />
      <rect width="740" height="480" fill="url(#archGrid)" />

      {/* ── ACT 1: Reactive / Legacy side ──────────────────────────────── */}
      {phase >= 1 && (
        <Fade delay={0}>
          <text x="24" y="26" fontSize="8" fill={C.mid} fontFamily="'Helvetica Neue', sans-serif"
            letterSpacing="3" fontWeight="700">REACTIVE PROCESS</text>
          <line x1="24" y1="30" x2="200" y2="30" stroke={C.dim} strokeWidth="0.5" />
          <text x="340" y="26" fontSize="8" fill={C.danger} fontFamily="'Helvetica Neue', sans-serif"
            letterSpacing="3" textAnchor="end" fontWeight="700" opacity="0.7">MANUAL LEAKAGE</text>
        </Fade>
      )}

      {phase >= 1 && (
        <Fade delay={0}>
          <circle cx="50" cy="120" r="16" fill={C.bg} stroke={C.dim} strokeWidth="1.5" />
          <text x="50" y="116" fontSize="6" fill={C.mid} textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" letterSpacing="1">FAMILY</text>
          <text x="50" y="125" fontSize="6" fill={C.mid} textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" letterSpacing="1">ENQUIRY</text>
        </Fade>
      )}

      {phase >= 1 && (
        <Fade delay={0.1}>
          <motion.line x1="66" y1="120" x2="130" y2="120" stroke={C.dim} strokeWidth="1.2" strokeDasharray="4 3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.5 }} />
          <text x="98" y="113" fontSize="7" fill={C.dim} textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif">info@ inbox</text>
          <rect x="130" y="108" width="46" height="24" fill={C.bg} stroke={C.dim} strokeWidth="1" rx="2" />
          <text x="153" y="124" fontSize="7" fill={C.mid} textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif">UNREAD</text>
        </Fade>
      )}

      {phase >= 1 && (
        <Fade delay={0.4}>
          <motion.line x1="176" y1="120" x2="240" y2="120" stroke={C.dim} strokeWidth="1.2" strokeDasharray="4 3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
          <text x="208" y="113" fontSize="7" fill={C.danger} textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" opacity="0.8">4–24 hrs</text>
          <rect x="240" y="108" width="50" height="24" fill={C.bg} stroke={C.dim} strokeWidth="1" rx="2" />
          <text x="265" y="124" fontSize="7" fill={C.mid} textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif">MANAGER?</text>
        </Fade>
      )}

      {phase >= 1 && (
        <Fade delay={0.8}>
          <motion.path d="M 290 115 Q 320 90 340 115" stroke={C.danger} strokeWidth="1" strokeDasharray="3 3"
            fill="none" opacity={0.6} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }} />
          <text x="316" y="88" fontSize="7" fill={C.danger} textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" opacity="0.8">MISSED CALL</text>
          <motion.circle cx="340" cy="120" r="8" fill="none" stroke={C.danger} strokeWidth="1.5"
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4, duration: 0.3 }} />
          <motion.line x1="335" y1="115" x2="345" y2="125" stroke={C.danger} strokeWidth="1.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 0.2 }} />
          <motion.line x1="345" y1="115" x2="335" y2="125" stroke={C.danger} strokeWidth="1.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 0.2 }} />
          <text x="340" y="143" fontSize="7" fill={C.danger} textAnchor="middle" fontFamily="'Helvetica Neue', sans-serif" opacity="0.8">LOST LEAD</text>
        </Fade>
      )}

      {phase >= 1 && (
        <Fade delay={1.0}>
          <motion.path
            d="M 50 160 Q 90 170 130 160 Q 170 150 210 160 Q 250 170 290 160 Q 320 152 340 158"
            stroke={C.dim} strokeWidth="1" strokeDasharray="2 4" fill="none" opacity={0.5}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 1.2 }} />
          <text x="195" y="180" fontSize="7" fill={C.mid} textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif" letterSpacing="2" opacity="0.6">MANUAL ERROR</text>
        </Fade>
      )}

      {/* ── ACT 2: Divider ──────────────────────────────────────────────── */}
      {phase >= 2 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <motion.line x1="380" y1="40" x2="380" y2="440" stroke={C.accent} strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, ease: 'easeInOut' }} />
          <text x="380" y="228" fontSize="8" fill={C.accent} textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif" letterSpacing="4" fontWeight="700"
            transform="rotate(-90, 380, 228)">SYSTEM UPGRADE</text>
        </motion.g>
      )}

      {/* ── ACT 3: Effito Infrastructure ───────────────────────────────── */}
      {phase >= 3 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <circle cx="404" cy="24" r="4" fill={C.accent} filter="url(#glow)" />
          <text x="414" y="28" fontSize="8" fill={C.accent} fontFamily="'Helvetica Neue', sans-serif"
            letterSpacing="3" fontWeight="700">EFFITO™ INFRASTRUCTURE</text>
          <text x="716" y="28" fontSize="8" fill={C.emerald} fontFamily="'Helvetica Neue', sans-serif"
            letterSpacing="2" textAnchor="end" fontWeight="700">OPTIMIZED ENGINE</text>
          <line x1="404" y1="32" x2="716" y2="32" stroke={C.accent} strokeWidth="0.5" />
        </motion.g>
      )}

      {/* Bounding frame */}
      {phase >= 3 && (
        <motion.g>
          <motion.line x1={400} y1={44} x2={400} y2={380} stroke={C.accent} strokeWidth="1.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.65, duration: 0.5 }} />
          <motion.line x1={710} y1={44} x2={710} y2={380} stroke={C.accent} strokeWidth="1.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.65, duration: 0.5 }} />
          <motion.line x1={400} y1={72} x2={710} y2={72} stroke={C.accent} strokeWidth="2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.55, duration: 0.6 }} />
          <motion.line x1={400} y1={380} x2={710} y2={380} stroke={C.accent} strokeWidth="1.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.7, duration: 0.6 }} />
        </motion.g>
      )}

      {/* Three pillars */}
      {phase >= 3 && [
        { x: 430, label1: 'OCCUPANCY', label2: 'ENGINE', sub: 'Growth' },
        { x: 564, label1: 'RECRUITMENT', label2: 'ENGINE', sub: 'Talent' },
        { x: 680, label1: 'STAFF', label2: 'ORACLE', sub: 'Intelligence' },
      ].map((p, i) => (
        <motion.g key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 + i * 0.15, duration: 0.5 }}
        >
          <motion.line x1={p.x} y1={44} x2={p.x} y2={380} stroke={C.grid} strokeWidth="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 2.2 + i * 0.15, duration: 0.6 }} />
          <motion.rect x={p.x - 30} y={44} width={60} height={28} rx={2} fill={C.accent}
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            style={{ transformOrigin: `${p.x}px 58px` }}
            transition={{ delay: 2.3 + i * 0.15, duration: 0.4 }} />
          <text x={p.x} y={56} fontSize="7" fill="white" textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif" letterSpacing="1" fontWeight="700">{p.label1}</text>
          <text x={p.x} y={66} fontSize="7" fill="white" textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif" letterSpacing="1" fontWeight="700">{p.label2}</text>
          <text x={p.x} y={398} fontSize="7" fill={C.mid} textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif" letterSpacing="2">{p.sub}</text>

          {[100, 160, 220, 280, 340].map((y, j) => (
            <motion.g key={j}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 + i * 0.15 + j * 0.08, duration: 0.3 }}
            >
              <circle cx={p.x} cy={y} r={3.5} fill={C.bg} stroke={C.accent} strokeWidth="1.2" />
              <circle cx={p.x} cy={y} r={1.5} fill={C.accent} />
            </motion.g>
          ))}
          <PulseDot cx={p.x} cy={340} delay={i * 0.3} color={C.emerald} />
        </motion.g>
      ))}

      {/* Signals */}
      {phase >= 3 && (
        <>
          <Signal path="M 400,72 L 710,72" delay={0} color={C.emerald} dur={2.2} />
          <Signal path="M 710,72 L 400,72" delay={1.1} color={C.emerald} dur={2.2} />
          <Signal path="M 430,380 L 680,380" delay={0.6} color={C.accent} dur={2.4} />
        </>
      )}

      {/* Pillar 1 feature labels */}
      {phase >= 3 && [
        { y: 100, label: 'Instant Capture' },
        { y: 160, label: '30s AI Voice Call' },
        { y: 220, label: 'Elite Qualification' },
        { y: 280, label: 'Calendar Sync' },
        { y: 340, label: 'CRM Integration' },
      ].map((f, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.7 + i * 0.07, duration: 0.35 }}>
          <line x1={434} y1={f.y} x2={458} y2={f.y} stroke={C.dim} strokeWidth="0.8" />
          <text x={462} y={f.y + 3} fontSize="7.5" fill={C.mid} fontFamily="'Helvetica Neue', sans-serif">{f.label}</text>
        </motion.g>
      ))}

      {/* Pillar 2 feature labels */}
      {phase >= 3 && [
        { y: 100, label: 'Indeed Magnet' },
        { y: 160, label: 'Instant Engagement' },
        { y: 220, label: 'Compliance Triage' },
        { y: 280, label: 'Candidate Scoring' },
        { y: 340, label: 'Direct Hire Velocity' },
      ].map((f, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.85 + i * 0.07, duration: 0.35 }}>
          <line x1={568} y1={f.y} x2={592} y2={f.y} stroke={C.dim} strokeWidth="0.8" />
          <text x={596} y={f.y + 3} fontSize="7.5" fill={C.mid} fontFamily="'Helvetica Neue', sans-serif">{f.label}</text>
        </motion.g>
      ))}

      {/* Input arrow */}
      {phase >= 3 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.5 }}>
          <circle cx="404" cy="210" r="10" fill={C.bg} stroke={C.accent} strokeWidth="1.5" />
          <text x="404" y="214" fontSize="7" fill={C.accent} textAnchor="middle"
            fontFamily="'Helvetica Neue', sans-serif" fontWeight="700">IN</text>
          <motion.line x1={380} y1={210} x2={393} y2={210} stroke={C.accent} strokeWidth="1.5"
            markerEnd="url(#arrowBlack)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 2.3, duration: 0.3 }} />
        </motion.g>
      )}

      {/* Metrics strip */}
      {phase >= 3 && (
        <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.6 }}>
          <rect x={400} y={414} width={310} height={52} fill={C.accent} rx={2} />
          {[
            { x: 445, v: '30s', label: 'RESPONSE' },
            { x: 555, v: '98%', label: 'CONVERSION' },
            { x: 655, v: '−85%', label: 'AGENCY COST' },
          ].map((m, i) => (
            <g key={i}>
              <text x={m.x} y={435} fontSize="16" fill="white" textAnchor="middle"
                fontFamily="Georgia, serif" fontStyle="italic">{m.v}</text>
              <text x={m.x} y={456} fontSize="6.5" fill="rgba(255,255,255,0.5)" textAnchor="middle"
                fontFamily="'Helvetica Neue', sans-serif" letterSpacing="2" fontWeight="700">{m.label}</text>
            </g>
          ))}
          <line x1="510" y1="418" x2="510" y2="462" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="610" y1="418" x2="610" y2="462" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </motion.g>
      )}

      {/* Legend */}
      {phase >= 2 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.5 }}>
          <line x1="24" y1="432" x2="52" y2="432" stroke={C.dim} strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="58" y="436" fontSize="8" fill={C.mid} fontFamily="'Helvetica Neue', sans-serif">Manual Volatility</text>
          <line x1="24" y1="452" x2="52" y2="452" stroke={C.accent} strokeWidth="2" />
          <circle cx="38" cy="452" r="2.5" fill={C.emerald} />
          <text x="58" y="456" fontSize="8" fill={C.accent} fontFamily="'Helvetica Neue', sans-serif" fontWeight="700">Effito Trajectory</text>
        </motion.g>
      )}
    </svg>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Infrastructure Page
// ─────────────────────────────────────────────────────────────────────────────
const Infrastructure: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Infrastructure | Effito Care Home Automation Systems</title>
        <meta name="description" content="Discover Effito's three pillar infrastructure: occupancy automation, recruitment engine, and staff oracle. Purpose built for residential care operations." />
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">

        {/* Hero / Introduction Section */}
        <section className="px-6 md:px-8 py-16 md:py-32 max-w-[1400px] mx-auto border-b border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-stone-400 mb-6 md:mb-8 block">The Architecture</span>
              <h1 className="text-4xl md:text-[7rem] font-serif text-slate-900 mb-8 md:mb-10 leading-[1.1] tracking-tighter">
                A Permanent <br className="hidden md:block" />Operational <span className="italic">Upgrade.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-16 leading-relaxed font-light">
                Effito is not software you "use." It is an infrastructure we install. A collection of resilient systems that manage the growth and human capital of your care home automatically.
              </p>
              <div className="space-y-10 md:space-y-12">
                {[
                  { step: "01", title: "Autonomous Engagement", body: "Enquiries are handled within seconds with professional accuracy, ensuring your home is always the first to respond." },
                  { step: "02", title: "Resilient Workflows", body: "Processes that do not rely on staff availability. Your growth infrastructure is always active, 24/7." },
                  { step: "03", title: "Institutional Quality", body: "Consistency across every interaction, reflecting the high standards of care you provide internally." }
                ].map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    key={i}
                    className="flex gap-6 md:gap-10"
                  >
                    <span className="text-sm font-bold text-slate-300 font-mono mt-1">{item.step}</span>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2 md:mb-3 uppercase tracking-wider">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 lg:sticky lg:top-32">
              <div className="relative p-1 bg-white border border-stone-200 rounded-sm shadow-sm group">
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-slate-900 text-white text-[9px] md:text-[10px] px-2 md:px-3 py-1 uppercase tracking-widest font-bold z-10">
                  Blueprint v3.1
                </div>
                <div className="overflow-x-auto">
                  <div className="min-w-[500px] md:min-w-0">
                    <InfrastructureArch />
                  </div>
                </div>
                <div className="mt-6 md:mt-8 grid grid-cols-3 gap-px bg-stone-200">
                  {['Growth', 'Talent', 'Intelligence'].map((label, i) => (
                    <div key={i} className="bg-white p-4 md:p-6 text-center">
                      <span className="block text-[8px] md:text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Module {i + 1}</span>
                      <span className="text-xs md:text-sm font-medium text-slate-900">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 01: Occupancy Engine */}
        <section className="relative overflow-hidden bg-white border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Component 01</span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">The Occupancy <br className="hidden md:block" /><span className="italic">Engine.</span></h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed text-sm md:text-base">
                An institutional grade sales infrastructure that converts interest into occupancy without human intervention.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-stone-50 border border-stone-200 p-6 md:p-8 rounded-sm">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-2 h-2 bg-stone-300 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 italic">Current State: The Leaky Bucket</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-slate-900 mb-4 md:mb-6">Passive Intake Failure</h3>
                  <div className="space-y-5 md:space-y-6">
                    {[
                      { label: "The Capture", text: "Generic info@ email inbox check. Delayed and unmonitored." },
                      { label: "The Process", text: "Manager checks when spare moments allow - often 4 to 24hrs later." },
                      { label: "The Follow up", text: "Manual phone call. One or two attempts, then lead is abandoned." }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-stone-200 pb-4 last:border-0">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400 block mb-1">{item.label}</span>
                        <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-stone-200">
                    <span className="text-[10px] font-bold text-red-900/50 uppercase tracking-widest block mb-4">Economic Impact</span>
                    <p className="text-xs md:text-sm text-slate-400 italic font-light">
                      "Losing one private pay resident due to a slow response costs the home £75,000 to £100,000 in annual lost fees."
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="mb-12 md:mb-20">
                  <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-6 md:mb-8 leading-tight">
                    From a digital "Black Hole" <br className="hidden md:block" />to a <span className="italic">High Speed Pipeline.</span>
                  </h3>
                  <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                    We don't sell AI chatbots. We install instant response infrastructure. When a family reaches out, silence is replaced by an empathy driven, professional capture system that secures the "Speed to Trust."
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                  {[
                    { title: "Instant Capture", detail: "Our systems monitor your website and Carehome.co.uk enquiries in real-time. The moment a family reaches out, the engine activates to ensure your home is the first to respond, 24/7." },
                    { title: "30s AI Voice Call", detail: "Within 30 seconds of an enquiry, our system initiates a professional call to the family. This immediate touchpoint validates their needs and gathers essential details, ensuring your home is established as the primary solution." },
                    { title: "Elite Qualification", detail: "Strategic questioning regarding budget, timeline, and urgency. Identifying high intent private pay leads instantly." },
                    { title: "Calendar Integration", detail: "The system synchronizes with your team's real-time availability to secure tours and meetings directly into your master calendar, ensuring no opportunity is missed." },
                    { title: "Multi Channel Nurture", detail: "Automatic text and email follow ups with digital brochures and testimonials keep the family warm for 14 days." },
                    { title: "GHL CRM Sync", detail: "Full transcriptions of every conversation are logged. The manager walks into the tour knowing exactly what the family needs." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 md:p-10 hover:bg-stone-50 transition-colors">
                      <div className="mb-4 md:mb-6"><GrowthNode /></div>
                      <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-3 md:mb-4">{item.title}</h4>
                      <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 02: Recruitment Engine */}
        <section className="relative overflow-hidden bg-[#FAF9F6] border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Component 02</span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">The Recruitment <br className="hidden md:block" /><span className="italic">Engine.</span></h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed text-sm md:text-base">
                An aggressive, automated direct hire infrastructure designed to reduce agency dependency and stabilize your workforce.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-sm shadow-sm">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-2 h-2 bg-red-400/50 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 italic">Current State: The Vacancy Crisis</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-slate-900 mb-4 md:mb-6">Fragmented Manual Process</h3>
                  <div className="space-y-5 md:space-y-6">
                    {[
                      { label: "The Post", text: "Standard Indeed ad placement. Passive waiting for CVs." },
                      { label: "The Delay", text: "CVs sit in inboxes for 3 to 5 days while managers cover clinical shifts." },
                      { label: "The Ghosting", text: "Good candidates are hired by faster competitors before you call." },
                      { label: "Compliance Gap", text: "DBS and Right to Work checks take weeks of manual email tag." }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-stone-100 pb-4 last:border-0">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">{item.label}</span>
                        <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-stone-200">
                    <span className="text-[10px] font-bold text-red-900/50 uppercase tracking-widest block mb-4">Economic impact</span>
                    <div className="space-y-3">
                      <p className="text-xs md:text-sm text-slate-500 font-light">
                        <strong className="text-slate-900">Speed is Survival:</strong> Carer shelf life on Indeed is &lt; 24 hours.
                      </p>
                      <p className="text-xs md:text-sm text-slate-500 font-light">
                        <strong className="text-slate-900">Agency Markups:</strong> Each vacant role costs £150 to £300 extra daily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="mb-12 md:mb-20">
                  <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-6 md:mb-8 leading-tight">
                    Stop paying the 40% <br className="hidden md:block" /><span className="italic">"Impatience Tax"</span> to agencies.
                  </h3>
                  <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                    By engaging every applicant within 60 seconds, we build your private staff bank, ensuring you secure the best talent before an agency even sees the application.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                  {[
                    { title: "The Indeed Magnet", detail: "Real time sync with Indeed and LinkedIn. The second a Carer applies, the engine intercepts the data instantly." },
                    { title: "Instant Candidate Engagement", detail: "Our voice engine contacts every applicant within 2 minutes of their submission. By eliminating manual delays, the system secures top tier talent before they are engaged by competing homes or agencies." },
                    { title: "Compliance Triage", detail: "Secure your workforce without the manual sift. Our engine confirms mandatory deal breakers: Certification levels, RTW and shift availability before a manager ever spends time reviewing a CV." },
                    { title: "Candidate Scoring", detail: "Every screening call is scored against role requirements automatically. No more sifting through applications." },
                    { title: "Manager Dashboard", detail: "Every applicant, their score and their full screening transcript in one place. You decide who moves forward." },
                    { title: "Direct Hire Velocity", detail: "By operating in seconds rather than days, you 'buy' staff for the cost of an ad rather than a £5,000 agency fee." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 md:p-10 hover:bg-stone-50 transition-colors">
                      <div className="mb-4 md:mb-6"><GrowthNode /></div>
                      <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-3 md:mb-4">{item.title}</h4>
                      <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillar 03: Staff Oracle */}
        <section className="relative overflow-hidden bg-white border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32">
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Component 03</span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">The Staff <br className="hidden md:block" /><span className="italic">Oracle.</span></h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed text-sm md:text-base">
                A private, automated support layer that protects your workforce stability and prevents the manager level bottleneck.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
              <div className="lg:col-span-4 space-y-12">
                <div className="bg-stone-50 border border-stone-200 p-6 md:p-8 rounded-sm">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-2 h-2 bg-stone-300 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 italic">Current State: The Support Vacuum</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-slate-900 mb-4 md:mb-6">Manager Dependent Friction</h3>
                  <div className="space-y-5 md:space-y-6">
                    {[
                      { label: "The Manual", text: "200 page paper handbooks provided at induction but never referenced again." },
                      { label: "The Interruption", text: "Carers leave the floor to find a manager for routine policy FAQs, wasting 20 mins." },
                      { label: "The Silent Exit", text: "Stressed staff don't complain; they ghost or resign when it's already too late." }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-stone-200 pb-4 last:border-0">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">{item.label}</span>
                        <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-stone-200">
                    <span className="text-[10px] font-bold text-red-900/50 uppercase tracking-widest block mb-4">The Churn Cost</span>
                    <p className="text-xs md:text-sm text-slate-400 italic font-light">
                      "Losing a single experienced carer costs £6,000. For a mid sized home, turnover at 30% creates a silent £90,000 annual loss."
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="mb-12 md:mb-20">
                  <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-6 md:mb-8 leading-tight">
                    Protect your <span className="italic">Managers</span> from administrative saturation.
                  </h3>
                  <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                    Replace manual policy lookups with systemic intelligence. The Oracle provides your workforce with instant, compliant answers to routine questions, allowing your leadership to stay focused on high level care.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                  {[
                    { title: "Digital Knowledge Core", detail: "Your 200 page handbook, CQC policies and SOPs are indexed into a high precision database for instant, compliant recall." },
                    { title: "WhatsApp Oracle Interface", detail: "Carers text the system directly for help with reporting, maintenance or procedures without leaving the floor." },
                    { title: "3s Compliant Support", detail: "Eliminate guesswork on the floor. The system provides immediate, policy backed guidance for any staff query, ensuring every action taken is compliant with your latest SOPs and safety protocols." },
                    { title: "Manager Escalation Logic", detail: "If the Oracle doesn't know, it pings the manager directly to update the core, turning one question into a system wide upgrade." },
                    { title: "Moral Sentiment Tracking", detail: "The system identifies clusters of questions (e.g., 'payroll' or 'exhaustion') and alerts owners to potential morale issues." },
                    { title: "Retention Infrastructure", detail: "Eliminates the First 90 Day Friction. Staff feel supported and capable from day one, reducing silent churn significantly." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 md:p-10 hover:bg-stone-50 transition-colors">
                      <div className="mb-4 md:mb-6"><GrowthNode /></div>
                      <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-3 md:mb-4">{item.title}</h4>
                      <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-slate-900 text-white py-20 md:py-32 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center tracking-tight">Built for Stability.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h4 className="text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] text-slate-500 mb-4 md:mb-6">Structural Integrity</h4>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  Unlike marketing funnels that leak, Effito is built with closed loop logic. Every input (an enquiry, an applicant, a staff query) has a predefined, automated outcome path.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] text-slate-500 mb-4 md:mb-6">Bespoke Tailoring</h4>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  We don't use templates. We map your home's unique pricing, room availability, and care philosophy into the system's logic core.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Infrastructure;
