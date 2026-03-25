import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView } from 'framer-motion';

// ─── GrowthNode ───────────────────────────────────────────────────────────────
const GrowthNode: React.FC = () => (
  <div className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center">
    <div className="w-2 h-2 rounded-full bg-slate-400" />
  </div>
);

// ─── InfrastructureArch ───────────────────────────────────────────────────────
const InfrastructureArch: React.FC = () => {
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
              <div className="relative p-1 bg-white border border-stone-200 rounded-2xl shadow-sm">
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

            {/* Section header */}
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Component 01</span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">
                  The Occupancy <br className="hidden md:block" /><span className="italic">Engine.</span>
                </h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed text-sm md:text-base">
                An institutional grade sales infrastructure that converts interest into occupancy without human intervention.
              </p>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

              {/* LEFT: Problem card — full-height dark panel */}
              <div className="lg:col-span-4">
                <div className="bg-slate-900 h-full p-8 md:p-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-red-400/70 rounded-full" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">Current State: The Leaky Bucket</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-white mb-8 leading-snug">Passive Intake Failure</h3>

                  <div className="space-y-6 flex-1">
                    {[
                      { label: "The Capture", text: "Generic info@ email inbox check. Delayed and unmonitored." },
                      { label: "The Process", text: "Manager checks when spare moments allow - often 4 to 24hrs later." },
                      { label: "The Follow up", text: "Manual phone call. One or two attempts, then lead is abandoned." }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-slate-800 pb-6 last:border-0">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600 block mb-2">{item.label}</span>
                        <p className="text-sm text-slate-400 font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-800">
                    <span className="text-[9px] font-bold text-red-400/60 uppercase tracking-widest block mb-3">Economic Impact</span>
                    <p className="text-sm text-slate-500 italic font-light leading-relaxed">
                      "Losing one private pay resident due to a slow response costs the home £75,000 to £100,000 in annual lost fees."
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT: Solution */}
              <div className="lg:col-span-8 border-l border-stone-200 flex flex-col">

                {/* Solution headline strip */}
                <div className="px-8 md:px-12 py-10 border-b border-stone-200">
                  <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-5 leading-tight">
                    From a digital "Black Hole" <br className="hidden md:block" />to a <span className="italic">High Speed Pipeline.</span>
                  </h3>
                  <p className="text-base text-slate-500 font-light leading-relaxed max-w-2xl">
                    We don't sell AI chatbots. We install instant response infrastructure. When a family reaches out, silence is replaced by an empathy driven, professional capture system that secures the "Speed to Trust."
                  </p>
                </div>

                {/* Feature grid — 2 columns, ruled */}
                <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
                  {[
                    { num: "01", title: "Instant Capture", detail: "Our systems monitor your website and Carehome.co.uk enquiries in real-time. The moment a family reaches out, the engine activates to ensure your home is the first to respond, 24/7." },
                    { num: "02", title: "30s AI Voice Call", detail: "Within 30 seconds of an enquiry, our system initiates a professional call to the family. This immediate touchpoint validates their needs and gathers essential details, ensuring your home is established as the primary solution." },
                    { num: "03", title: "Elite Qualification", detail: "Strategic questioning regarding budget, timeline, and urgency. Identifying high intent private pay leads instantly." },
                    { num: "04", title: "Calendar Integration", detail: "The system synchronizes with your team's real-time availability to secure tours and meetings directly into your master calendar, ensuring no opportunity is missed." },
                    { num: "05", title: "Multi Channel Nurture", detail: "Automatic text and email follow ups with digital brochures and testimonials keep the family warm for 14 days." },
                    { num: "06", title: "GHL CRM Sync", detail: "Full transcriptions of every conversation are logged. The manager walks into the tour knowing exactly what the family needs." }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      viewport={{ once: true }}
                      className={`group relative p-8 md:p-10 hover:bg-stone-50 transition-colors duration-200
                        ${i % 2 === 0 ? 'md:border-r border-stone-100' : ''}
                        ${i < 4 ? 'border-b border-stone-100' : ''}
                      `}
                    >
                      <span className="text-[10px] font-mono text-stone-300 group-hover:text-stone-400 transition-colors mb-5 block">{item.num}</span>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-3">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* Pillar 02: Recruitment Engine */}
        <section className="relative overflow-hidden bg-[#FAF9F6] border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32">

            {/* Section header */}
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Component 02</span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">
                  The Recruitment <br className="hidden md:block" /><span className="italic">Engine.</span>
                </h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed text-sm md:text-base">
                An aggressive, automated direct hire infrastructure designed to reduce agency dependency and stabilize your workforce.
              </p>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

              {/* LEFT: Problem card */}
              <div className="lg:col-span-4">
                <div className="bg-slate-900 h-full p-8 md:p-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-red-400/70 rounded-full" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">Current State: The Vacancy Crisis</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-white mb-8 leading-snug">Fragmented Manual Process</h3>

                  <div className="space-y-6 flex-1">
                    {[
                      { label: "The Post", text: "Standard Indeed ad placement. Passive waiting for CVs." },
                      { label: "The Delay", text: "CVs sit in inboxes for 3 to 5 days while managers cover clinical shifts." },
                      { label: "The Ghosting", text: "Good candidates are hired by faster competitors before you call." },
                      { label: "Compliance Gap", text: "DBS and Right to Work checks take weeks of manual email tag." }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-slate-800 pb-6 last:border-0">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600 block mb-2">{item.label}</span>
                        <p className="text-sm text-slate-400 font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-800">
                    <span className="text-[9px] font-bold text-red-400/60 uppercase tracking-widest block mb-3">Economic Impact</span>
                    <div className="space-y-3">
                      <p className="text-sm text-slate-500 font-light">
                        <strong className="text-slate-400">Speed is Survival:</strong> Carer shelf life on Indeed is &lt; 24 hours.
                      </p>
                      <p className="text-sm text-slate-500 font-light">
                        <strong className="text-slate-400">Agency Markups:</strong> Each vacant role costs £150 to £300 extra daily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Solution */}
              <div className="lg:col-span-8 border-l border-stone-200 flex flex-col">

                {/* Solution headline strip */}
                <div className="px-8 md:px-12 py-10 border-b border-stone-200">
                  <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-5 leading-tight">
                    Stop paying the 40% <br className="hidden md:block" /><span className="italic">"Impatience Tax"</span> to agencies.
                  </h3>
                  <p className="text-base text-slate-500 font-light leading-relaxed max-w-2xl">
                    By engaging every applicant within 60 seconds, we build your private staff bank, ensuring you secure the best talent before an agency even sees the application.
                  </p>
                </div>

                {/* Feature grid — 2 columns, ruled */}
                <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
                  {[
                    { num: "01", title: "The Indeed Magnet", detail: "Real time sync with Indeed and LinkedIn. The second a Carer applies, the engine intercepts the data instantly." },
                    { num: "02", title: "Instant Candidate Engagement", detail: "Our voice engine contacts every applicant within 2 minutes of their submission. By eliminating manual delays, the system secures top tier talent before they are engaged by competing homes or agencies." },
                    { num: "03", title: "Compliance Triage", detail: "Secure your workforce without the manual sift. Our engine confirms mandatory deal breakers: Certification levels, RTW and shift availability before a manager ever spends time reviewing a CV." },
                    { num: "04", title: "Candidate Scoring", detail: "Every screening call is scored against role requirements automatically. No more sifting through applications." },
                    { num: "05", title: "Manager Dashboard", detail: "Every applicant, their score and their full screening transcript in one place. You decide who moves forward." },
                    { num: "06", title: "Direct Hire Velocity", detail: "By operating in seconds rather than days, you 'buy' staff for the cost of an ad rather than a £5,000 agency fee." }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      viewport={{ once: true }}
                      className={`group relative p-8 md:p-10 hover:bg-stone-100/60 transition-colors duration-200
                        ${i % 2 === 0 ? 'md:border-r border-stone-100' : ''}
                        ${i < 4 ? 'border-b border-stone-100' : ''}
                      `}
                    >
                      <span className="text-[10px] font-mono text-stone-300 group-hover:text-stone-400 transition-colors mb-5 block">{item.num}</span>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-3">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pillar 03: Staff Oracle */}
        <section className="relative overflow-hidden bg-white border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20 md:py-32">

            {/* Section header */}
            <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Component 03</span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-tight">
                  The Staff <br className="hidden md:block" /><span className="italic">Oracle.</span>
                </h2>
              </div>
              <p className="max-w-md text-slate-500 font-light leading-relaxed text-sm md:text-base">
                A private, automated support layer that protects your workforce stability and prevents the manager level bottleneck.
              </p>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

              {/* LEFT: Problem card */}
              <div className="lg:col-span-4">
                <div className="bg-slate-900 h-full p-8 md:p-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-red-400/70 rounded-full" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">Current State: The Support Vacuum</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-white mb-8 leading-snug">Manager Dependent Friction</h3>

                  <div className="space-y-6 flex-1">
                    {[
                      { label: "The Manual", text: "200 page paper handbooks provided at induction but never referenced again." },
                      { label: "The Interruption", text: "Carers leave the floor to find a manager for routine policy FAQs, wasting 20 mins." },
                      { label: "The Silent Exit", text: "Stressed staff don't complain; they ghost or resign when it's already too late." }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-slate-800 pb-6 last:border-0">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600 block mb-2">{item.label}</span>
                        <p className="text-sm text-slate-400 font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-800">
                    <span className="text-[9px] font-bold text-red-400/60 uppercase tracking-widest block mb-3">The Churn Cost</span>
                    <p className="text-sm text-slate-500 italic font-light leading-relaxed">
                      "Losing a single experienced carer costs £6,000. For a mid sized home, turnover at 30% creates a silent £90,000 annual loss."
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT: Solution */}
              <div className="lg:col-span-8 border-l border-stone-200 flex flex-col">

                {/* Solution headline strip */}
                <div className="px-8 md:px-12 py-10 border-b border-stone-200">
                  <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-5 leading-tight">
                    Protect your <span className="italic">Managers</span> from administrative saturation.
                  </h3>
                  <p className="text-base text-slate-500 font-light leading-relaxed max-w-2xl">
                    Replace manual policy lookups with systemic intelligence. The Oracle provides your workforce with instant, compliant answers to routine questions, allowing your leadership to stay focused on high level care.
                  </p>
                </div>

                {/* Feature grid — 2 columns, ruled */}
                <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
                  {[
                    { num: "01", title: "Digital Knowledge Core", detail: "Your 200 page handbook, CQC policies and SOPs are indexed into a high precision database for instant, compliant recall." },
                    { num: "02", title: "WhatsApp Oracle Interface", detail: "Carers text the system directly for help with reporting, maintenance or procedures without leaving the floor." },
                    { num: "03", title: "3s Compliant Support", detail: "Eliminate guesswork on the floor. The system provides immediate, policy backed guidance for any staff query, ensuring every action taken is compliant with your latest SOPs and safety protocols." },
                    { num: "04", title: "Manager Escalation Logic", detail: "If the Oracle doesn't know, it pings the manager directly to update the core, turning one question into a system wide upgrade." },
                    { num: "05", title: "Moral Sentiment Tracking", detail: "The system identifies clusters of questions (e.g., 'payroll' or 'exhaustion') and alerts owners to potential morale issues." },
                    { num: "06", title: "Retention Infrastructure", detail: "Eliminates the First 90 Day Friction. Staff feel supported and capable from day one, reducing silent churn significantly." }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      viewport={{ once: true }}
                      className={`group relative p-8 md:p-10 hover:bg-stone-50 transition-colors duration-200
                        ${i % 2 === 0 ? 'md:border-r border-stone-100' : ''}
                        ${i < 4 ? 'border-b border-stone-100' : ''}
                      `}
                    >
                      <span className="text-[10px] font-mono text-stone-300 group-hover:text-stone-400 transition-colors mb-5 block">{item.num}</span>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-3">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.div>
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
