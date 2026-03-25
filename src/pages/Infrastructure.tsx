import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// ─── Colour tokens ────────────────────────────────────────────────────────────
const C = {
  bg: '#FFFFFF',
  paper: '#FAF9F6',
  grid: '#F0EDE8',
  dim: '#C8C4BC',
  mid: '#94918C',
  ink: '#1E1E2A',
  accent: '#0f172a',
  green: '#059669',
  red: '#DC2626',
};

// ─── GrowthNode ───────────────────────────────────────────────────────────────
const GrowthNode: React.FC = () => (
  <div className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center">
    <div className="w-2 h-2 rounded-full bg-slate-400" />
  </div>
);

// ─── The three pillars ────────────────────────────────────────────────────────
const PILLARS = [
  {
    id: 'occupancy',
    index: '01',
    label: 'Occupancy Engine',
    sub: 'Growth',
    metric: '30s',
    metricLabel: 'Response',
    steps: ['Enquiry Received', 'AI Voice Activated', 'Family Qualified', 'Tour Booked', 'CRM Updated'],
  },
  {
    id: 'recruitment',
    index: '02',
    label: 'Recruitment Engine',
    sub: 'Talent',
    metric: '−85%',
    metricLabel: 'Agency Cost',
    steps: ['CV Detected', 'Instant Engagement', 'Compliance Check', 'Candidate Scored', 'Hire Velocity'],
  },
  {
    id: 'oracle',
    index: '03',
    label: 'Staff Oracle',
    sub: 'Intelligence',
    metric: '3s',
    metricLabel: 'Query Answer',
    steps: ['Query Received', 'Policy Indexed', 'Compliant Answer', 'Manager Alerted', 'System Updated'],
  },
];

// ─── Single pipeline node ─────────────────────────────────────────────────────
interface PipelineNodeProps {
  label: string;
  active: boolean;
  isLast: boolean;
}

const PipelineNode: React.FC<PipelineNodeProps> = ({ label, active, isLast }) => (
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, paddingBottom: isLast ? 0 : 28 }}>
    {!isLast && (
      <div style={{
        position: 'absolute', left: 9, top: 21, width: 1, height: 28,
        background: active ? `${C.accent}25` : 'transparent',
        transition: 'background 0.4s',
      }} />
    )}
    <motion.div
      style={{
        width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
        border: `1.5px solid ${active ? C.accent : C.dim}`,
        background: active ? C.accent : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.4s ease',
        position: 'relative',
      }}
    >
      {active && <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.bg }} />}
      {active && (
        <motion.div
          style={{
            position: 'absolute', width: 28, height: 28, borderRadius: '50%',
            border: `1px solid ${C.accent}40`,
          }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </motion.div>
    <span style={{
      fontFamily: "'Helvetica Neue', sans-serif",
      fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: active ? C.accent : C.dim,
      fontWeight: active ? 700 : 400,
      transition: 'color 0.4s ease',
    }}>
      {label}
    </span>
    {active && (
      <motion.span
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ marginLeft: 'auto', fontSize: 8, color: C.green, fontWeight: 700 }}
      >
        ✓
      </motion.span>
    )}
  </div>
);

// ─── Pillar card ──────────────────────────────────────────────────────────────
interface PillarCardProps {
  pillar: typeof PILLARS[0];
  isActive: boolean;
  onClick: () => void;
}

const PillarCard: React.FC<PillarCardProps> = ({ pillar, isActive, onClick }) => {
  const [nodePhase, setNodePhase] = useState(0);

  useEffect(() => {
    if (!isActive) { setNodePhase(0); return; }
    setNodePhase(0);
    const timers = pillar.steps.map((_, i) =>
      setTimeout(() => setNodePhase(i + 1), 400 + i * 500)
    );
    return () => timers.forEach(clearTimeout);
  }, [isActive, pillar.steps]);

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -2 }}
      style={{
        background: isActive ? C.accent : C.bg,
        border: `1px solid ${isActive ? C.accent : C.grid}`,
        borderRadius: 2, padding: '24px 20px', cursor: 'pointer',
        transition: 'background 0.5s ease, border-color 0.5s ease',
        position: 'relative', overflow: 'hidden', flex: 1,
      }}
    >
      <div style={{
        position: 'absolute', top: 14, right: 14,
        fontFamily: 'Georgia, serif', fontSize: 11, fontStyle: 'italic',
        color: isActive ? 'rgba(255,255,255,0.25)' : C.dim,
        transition: 'color 0.5s',
      }}>
        {pillar.index}
      </div>

      <div style={{
        fontFamily: "'Helvetica Neue', sans-serif", fontSize: 8, letterSpacing: '0.3em',
        textTransform: 'uppercase', color: isActive ? 'rgba(255,255,255,0.45)' : C.mid,
        marginBottom: 5, transition: 'color 0.5s',
      }}>
        {pillar.sub}
      </div>
      <div style={{
        fontFamily: 'Georgia, serif', fontSize: 14, fontStyle: 'italic',
        color: isActive ? '#fff' : C.accent, marginBottom: 22, transition: 'color 0.5s',
      }}>
        {pillar.label}
      </div>

      <div>
        {pillar.steps.map((step, i) => (
          <PipelineNode
            key={step} label={step}
            active={isActive && nodePhase > i}
            isLast={i === pillar.steps.length - 1}
          />
        ))}
      </div>

      <AnimatePresence>
        {isActive && nodePhase >= pillar.steps.length && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: 22, paddingTop: 18,
              borderTop: '1px solid rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'baseline', gap: 8,
            }}
          >
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 26, color: '#fff', fontStyle: 'italic', lineHeight: 1 }}>
              {pillar.metric}
            </span>
            <span style={{
              fontFamily: "'Helvetica Neue', sans-serif", fontSize: 8,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)', fontWeight: 700,
            }}>
              {pillar.metricLabel}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {!isActive && (
        <div style={{
          marginTop: 14, fontFamily: "'Helvetica Neue', sans-serif",
          fontSize: 8, color: C.dim, letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>
          View pipeline →
        </div>
      )}
    </motion.div>
  );
};

// ─── Orchestration core (rotating rings) ─────────────────────────────────────
const OrchestrationCore: React.FC<{ activeIndex: number }> = ({ activeIndex }) => (
  <div style={{ position: 'relative', width: '100%', paddingTop: '100%', maxWidth: 200, margin: '0 auto' }}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        style={{ position: 'absolute', width: '88%', height: '88%', borderRadius: '50%', border: `1px solid ${C.grid}` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={{ position: 'absolute', width: '62%', height: '62%', borderRadius: '50%', border: `1px solid ${C.dim}35` }}
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={{ position: 'absolute', width: 10, height: 10, borderRadius: '50%', background: C.accent }}
        animate={{ scale: [1, 1.35, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {[0, 1, 2].map((i) => {
          const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
          const cx = 50, cy = 50;
          const x1 = cx + Math.cos(angle) * 7, y1 = cy + Math.sin(angle) * 7;
          const x2 = cx + Math.cos(angle) * 35, y2 = cy + Math.sin(angle) * 35;
          return (
            <line key={i}
              x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`}
              stroke={activeIndex === i ? C.accent : C.grid}
              strokeWidth={activeIndex === i ? 1.5 : 0.5}
              style={{ transition: 'all 0.5s ease' }}
            />
          );
        })}
        {[0, 1, 2].map((i) => {
          const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
          const cx = 50, cy = 50, r = 35;
          const x = cx + Math.cos(angle) * r, y = cy + Math.sin(angle) * r;
          return (
            <circle key={i}
              cx={`${x}%`} cy={`${y}%`}
              r={activeIndex === i ? 6 : 3.5}
              fill={activeIndex === i ? C.green : C.dim}
              style={{
                filter: activeIndex === i ? `drop-shadow(0 0 5px ${C.green}80)` : 'none',
                transition: 'all 0.5s ease',
              }}
            />
          );
        })}
      </svg>
    </div>
  </div>
);

// ─── Main animation widget ────────────────────────────────────────────────────
const EffitoInfrastructureAnimation: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!inView || !autoPlay) return;
    const timer = setInterval(() => setActive((p) => (p + 1) % 3), 5200);
    return () => clearInterval(timer);
  }, [inView, autoPlay]);

  const handleClick = (i: number) => {
    setActive(i);
    setAutoPlay(false);
  };

  return (
    <div
      ref={ref}
      style={{
        background: C.paper, border: `1px solid ${C.grid}`, borderRadius: 2,
        overflow: 'hidden', fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      {/* Header */}
      <div style={{
        padding: '13px 18px', background: C.accent,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <motion.div
            style={{ width: 6, height: 6, borderRadius: '50%', background: C.green }}
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span style={{
            fontFamily: "'Helvetica Neue', sans-serif", fontSize: 8,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.65)', fontWeight: 700,
          }}>
            Effito™ Infrastructure — Live
          </span>
        </div>
        <span style={{ fontFamily: 'Georgia, serif', fontSize: 9, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>
          Blueprint v3.1
        </span>
      </div>

      {/* Orchestration core row */}
      <div style={{
        padding: '20px 18px 14px', borderBottom: `1px solid ${C.grid}`,
        display: 'flex', alignItems: 'center', gap: 20,
      }}>
        <div style={{ width: 110, flexShrink: 0 }}>
          <OrchestrationCore activeIndex={active} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 8, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.mid, marginBottom: 5 }}>
            Active Module
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              style={{ fontFamily: 'Georgia, serif', fontSize: 18, color: C.accent, fontStyle: 'italic', marginBottom: 3 }}
            >
              {PILLARS[active].label}
            </motion.div>
          </AnimatePresence>
          <div style={{ display: 'flex', gap: 5, marginTop: 8 }}>
            {PILLARS.map((_, i) => (
              <div
                key={i}
                onClick={() => handleClick(i)}
                style={{
                  width: i === active ? 20 : 6, height: 2, borderRadius: 2,
                  background: i === active ? C.accent : C.dim,
                  cursor: 'pointer', transition: 'all 0.4s ease',
                }}
              />
            ))}
          </div>
          <div style={{ marginTop: 8, fontSize: 8, color: C.mid, letterSpacing: '0.08em' }}>
            {autoPlay ? 'Auto-cycling · ' : ''}
            <span
              onClick={() => setAutoPlay(!autoPlay)}
              style={{ cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 2 }}
            >
              {autoPlay ? 'pause' : 'resume auto-cycle'}
            </span>
          </div>
        </div>
      </div>

      {/* Pillar cards */}
      <div style={{ padding: '14px 14px 18px', display: 'flex', gap: 8 }}>
        {PILLARS.map((pillar, i) => (
          <PillarCard
            key={pillar.id}
            pillar={pillar}
            isActive={active === i}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>

      {/* Footer metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{
          background: C.accent, padding: '14px 18px',
          display: 'flex', justifyContent: 'space-around',
          borderTop: `1px solid ${C.grid}`,
        }}
      >
        {[
          { v: '30s', l: 'Response' },
          { v: '98%', l: 'Conversion' },
          { v: '−85%', l: 'Agency Cost' },
        ].map((m, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontStyle: 'italic', color: '#fff', lineHeight: 1, marginBottom: 4 }}>
              {m.v}
            </div>
            <div style={{ fontSize: 7, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>
              {m.l}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
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

            {/* ── REPLACED DIAGRAM WITH PREMIUM ANIMATION ── */}
            <div className="lg:col-span-7 lg:sticky lg:top-32">
              <EffitoInfrastructureAnimation />
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
