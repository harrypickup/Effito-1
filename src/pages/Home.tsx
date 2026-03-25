import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroBackgroundAnimation, ChaosComparison, GrowthNode } from '../components/Diagrams';

// ─── PillarFlowAnimation ──────────────────────────────────────────────────────
const PillarFlowAnimation: React.FC = () => {
  const [go, setGo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), 600);
    return () => clearTimeout(t);
  }, []);

  const pillars = [
    { label: 'Occupancy & Reputation', sub: 'Engine', y: 80 },
    { label: 'Recruitment', sub: 'Engine', y: 210 },
    { label: 'Staff Retention & Oracle', sub: 'Engine', y: 320 },
  ];

  // Care home box: x=440, y=140, w=160, h=140
  // Lines run from x=260 (right edge of label boxes) to x=440 (left edge of care home box)
  // Each line goes: horizontal to x=380, then diagonal to converge at cx=440, cy=210 (mid of care home)
  const careHomeCX = 440;
  const careHomeMidY = 210;

  return (
    <>
      <style>{`
        @keyframes pf-draw { to { stroke-dashoffset: 0; } }
        @keyframes pf-fade { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pf-pulse { 0%,100% { opacity:1; r:5; } 50% { opacity:0.3; r:9; } }
        @keyframes pf-travel {
          0%   { offset-distance: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }

        ${go ? `
          .pf .ln-0 { stroke-dasharray:300; stroke-dashoffset:300; animation: pf-draw 0.7s 0.1s ease-out forwards; }
          .pf .ln-1 { stroke-dasharray:300; stroke-dashoffset:300; animation: pf-draw 0.7s 0.35s ease-out forwards; }
          .pf .ln-2 { stroke-dasharray:300; stroke-dashoffset:300; animation: pf-draw 0.7s 0.6s ease-out forwards; }
          .pf .box-l-0 { animation: pf-fade 0.4s 0.0s ease-out both; }
          .pf .box-l-1 { animation: pf-fade 0.4s 0.25s ease-out both; }
          .pf .box-l-2 { animation: pf-fade 0.4s 0.5s ease-out both; }
          .pf .box-r { animation: pf-fade 0.5s 0.9s ease-out both; opacity:0; }
          .pf .dot-0 { animation: pf-fade 0.3s 0.1s ease-out both; opacity:0; }
          .pf .dot-1 { animation: pf-fade 0.3s 0.35s ease-out both; opacity:0; }
          .pf .dot-2 { animation: pf-fade 0.3s 0.6s ease-out both; opacity:0; }
          .pf .pulse { animation: pf-pulse 2s 1.2s ease-in-out infinite; opacity:0; animation-fill-mode:forwards; }
          .pf .sig-0 { offset-path: path('M 260,80 L 400,80 L 440,210'); animation: pf-travel 1.2s 1.3s ease-in-out infinite; }
          .pf .sig-1 { offset-path: path('M 260,210 L 440,210'); animation: pf-travel 1.2s 1.7s ease-in-out infinite; }
          .pf .sig-2 { offset-path: path('M 260,320 L 400,320 L 440,210'); animation: pf-travel 1.2s 2.1s ease-in-out infinite; }
        ` : `
          .pf .ln-0,.pf .ln-1,.pf .ln-2 { stroke-dasharray:300; stroke-dashoffset:300; }
          .pf .box-l-0,.pf .box-l-1,.pf .box-l-2,.pf .box-r,
          .pf .dot-0,.pf .dot-1,.pf .dot-2,.pf .pulse { opacity:0; }
        `}
      `}</style>

      <svg
        className="pf"
        width="100%"
        viewBox="0 0 620 400"
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", display: 'block' }}
      >
        {/* ── Left pillar label boxes ── */}
        {pillars.map((p, i) => (
          <g key={i} className={`box-l-${i}`}>
            {/* Box */}
            <rect x="20" y={p.y - 30} width="240" height="60" rx="4"
              fill="#FAFAF8" stroke="#e2dfd8" strokeWidth="1"/>
            {/* Label */}
            <text x="36" y={p.y - 8} fontSize="11" fontWeight="700" fill="#1E1E2A"
              letterSpacing="0.5">{p.label}</text>
            <text x="36" y={p.y + 10} fontSize="9" fill="#a8a5a0"
              letterSpacing="1.5" fontWeight="600">{p.sub}</text>
          </g>
        ))}

        {/* ── Connector dots on right edge of label boxes ── */}
        {pillars.map((p, i) => (
          <circle key={i} className={`dot-${i}`} cx="260" cy={p.y} r="4"
            fill="#1E1E2A"/>
        ))}

        {/* ── Connector lines ── */}
        {/* Pillar 0: horizontal then diagonal down to care home mid */}
        <path className="ln-0" d="M 260,80 L 400,80 L 440,210"
          fill="none" stroke="#1E1E2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Pillar 1: straight horizontal at y=210 */}
        <path className="ln-1" d="M 260,210 L 440,210"
          fill="none" stroke="#1E1E2A" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Pillar 2: horizontal then diagonal up to care home mid */}
        <path className="ln-2" d="M 260,320 L 400,320 L 440,210"
          fill="none" stroke="#1E1E2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

        {/* ── Travelling signal dots ── */}
        <circle className="sig-0" r="3.5" fill="#1E1E2A" opacity="0"/>
        <circle className="sig-1" r="3.5" fill="#1E1E2A" opacity="0"/>
        <circle className="sig-2" r="3.5" fill="#1E1E2A" opacity="0"/>

        {/* ── Care Home box ── */}
        <g className="box-r">
          {/* Outer box */}
          <rect x="440" y="140" width="160" height="140" rx="4"
            fill="#1E1E2A" stroke="#1E1E2A" strokeWidth="1"/>
          {/* Top label strip */}
          <rect x="440" y="140" width="160" height="36" rx="4"
            fill="#2d3748"/>
          <rect x="440" y="162" width="160" height="14" fill="#2d3748"/>
          <text x="520" y="164" fontSize="8" fill="rgba(255,255,255,0.5)"
            textAnchor="middle" letterSpacing="2" fontWeight="700">YOUR</text>

          {/* Main text */}
          <text x="520" y="196" fontSize="12" fill="white"
            textAnchor="middle" letterSpacing="1" fontWeight="700">CARE HOME</text>

          {/* Divider */}
          <line x1="460" y1="212" x2="580" y2="212" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

          {/* Status row */}
          <circle cx="466" cy="228" r="3" fill="#059669"/>
          <text x="476" y="232" fontSize="8" fill="rgba(255,255,255,0.5)"
            letterSpacing="1">LIVE</text>

          <text x="580" y="232" fontSize="8" fill="rgba(255,255,255,0.35)"
            textAnchor="end" letterSpacing="1">24/7</text>

          {/* Bottom metric */}
          <line x1="460" y1="242" x2="580" y2="242" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <text x="520" y="262" fontSize="9" fill="rgba(255,255,255,0.4)"
            textAnchor="middle" letterSpacing="1.5">AUTOMATED</text>
        </g>

        {/* ── Pulse dot at connection point ── */}
        <circle className="pulse" cx="440" cy="210" r="5" fill="#059669"/>

        {/* ── Corner bracket decorations (grid feel) ── */}
        <g opacity="0.15">
          <path d="M 10,10 L 10,22 L 22,22" fill="none" stroke="#1E1E2A" strokeWidth="1"/>
          <path d="M 610,10 L 610,22 L 598,22" fill="none" stroke="#1E1E2A" strokeWidth="1"/>
          <path d="M 10,390 L 10,378 L 22,378" fill="none" stroke="#1E1E2A" strokeWidth="1"/>
          <path d="M 610,390 L 610,378 L 598,378" fill="none" stroke="#1E1E2A" strokeWidth="1"/>
        </g>
      </svg>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Home Page
// ─────────────────────────────────────────────────────────────────────────────
const Home: React.FC = () => {
  const switchData = [
    {
      feature: "Inquiry Handling",
      old: "Manual Callbacks (8 to 24 hrs)",
      new: "Instant Automated Triage"
    },
    {
      feature: "Staffing",
      old: "Reactive Agency Hiring",
      new: "Always on Talent Pipeline"
    },
    {
      feature: "Visibility",
      old: "Gut feeling & Spreadsheets",
      new: "Live Performance Dashboards"
    },
    {
      feature: "Cost",
      old: "High Recurring Admin Costs",
      new: "Fixed cost Efficiency Engine"
    },
    {
      feature: "Scalability",
      old: "Needs More Admin Hires",
      new: "Infinite Growth Foundation"
    }
  ];

  const stats = [
    { value: "24/7", label: "Structural Continuity" },
    { value: "30 Hours", label: "Weekly Recovery" },
    { value: "< 60 Sec", label: "Inquiry Response" },
    { value: "0%", label: "Lead Decay" }
  ];

  return (
    <div className="bg-[#FAF9F6] relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 md:px-8 py-12 md:py-24 max-w-[1400px] mx-auto min-h-[calc(100vh-73px)] flex items-center">
        <HeroBackgroundAnimation />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.4em] text-stone-400 mb-6 md:mb-8">
              Growth Infrastructure
            </span>
            <h1 className="text-5xl md:text-[7rem] lg:text-[8rem] font-serif leading-[0.9] md:leading-[0.85] tracking-tighter text-slate-900 mb-8 md:mb-12">
              The architecture <br className="hidden md:block" />
              of <span className="italic">care.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-8 md:mb-12 max-w-xl leading-relaxed text-balance font-light">
              Capture every high intent enquiry, automate your recruitment pipeline and eliminate manual chaos with a coordinated system designed specifically for residential care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 text-[14px] uppercase tracking-widest font-semibold hover:bg-slate-800 transition-all duration-300 shadow-2xl text-center"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/infrastructure"
                className="text-slate-900 text-[14px] uppercase tracking-widest font-semibold border-b border-slate-900 pb-1 hover:opacity-70 transition-opacity"
              >
                Examine the Logic
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <PillarFlowAnimation />
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics Bar */}
      <section className="bg-slate-900 border-y border-slate-800 py-12 md:py-16 px-6 md:px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="sr-only">Effito Performance Metrics</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0 divide-x-0 lg:divide-x divide-slate-800">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center justify-center text-center px-4"
              >
                <span className="text-3xl md:text-5xl font-serif text-white tracking-tighter mb-2 md:mb-3">
                  {stat.value}
                </span>
                <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

           {/* The Reality */}
      <section className="bg-white py-20 md:py-32 border-b border-stone-200 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">

          {/* Header */}
          <div className="mb-16 md:mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">The Problem</span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Chaos is the silent <br className="hidden md:block" />cost of care.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

            {/* LEFT: Pain points */}
            <div className="lg:col-span-4">
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-12 font-light">
                Most care homes struggle not with a lack of demand, but with a lack of structure. Every missed enquiry is a lost resident; every slow recruitment cycle is an agency expense.
              </p>
              <div className="space-y-0 border border-stone-200">
                {[
                  {
                    label: "Delayed Lead Handling",
                    desc: "Response times exceeding 4 hours result in 60% drop off rates.",
                    cost: "−£75k/yr"
                  },
                  {
                    label: "Recruitment Friction",
                    desc: "Competitors move faster, securing quality staff before you follow up.",
                    cost: "−£5k/hire"
                  },
                  {
                    label: "Staff Overload",
                    desc: "Senior management bogged down in manual enquiry logging.",
                    cost: "−30 hrs/wk"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 md:p-8 border-b border-stone-200 last:border-0 group hover:bg-stone-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">{item.label}</h4>
                      <span className="text-[10px] font-mono font-bold text-red-400/80 ml-4 shrink-0">{item.cost}</span>
                    </div>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: Before / After contrast */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                {/* BEFORE column */}
                <div className="bg-stone-50 border border-stone-200 md:border-r-0 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400">Without Effito</span>
                  </div>
                  <div className="space-y-8">
                    {[
                      { metric: "4–24 hrs", label: "Average enquiry response", bad: true },
                      { metric: "85%", label: "Of private leads lost to slow response", bad: true },
                      { metric: "3–5 days", label: "To contact a new job applicant", bad: true },
                      { metric: "40%", label: "Agency markup on every hire", bad: true },
                      { metric: "30 hrs", label: "Per week lost to admin tasks", bad: true },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                        viewport={{ once: true }}
                        className="border-b border-stone-200 pb-6 last:border-0"
                      >
                        <div className="text-3xl md:text-4xl font-serif text-red-400/70 tracking-tight mb-1">{item.metric}</div>
                        <div className="text-xs text-stone-400 font-light leading-relaxed">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AFTER column */}
                <div className="bg-slate-900 border border-slate-900 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">With Effito</span>
                  </div>
                  <div className="space-y-8">
                    {[
                      { metric: "< 30 sec", label: "Guaranteed enquiry response" },
                      { metric: "98%", label: "Lead capture and qualification rate" },
                      { metric: "< 2 min", label: "Applicant engagement from submission" },
                      { metric: "£0", label: "Agency markup — direct hire only" },
                      { metric: "30 hrs", label: "Per week returned to clinical focus" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
                        viewport={{ once: true }}
                        className="border-b border-slate-800 pb-6 last:border-0"
                      >
                        <div className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-1">{item.metric}</div>
                        <div className="text-xs text-slate-400 font-light leading-relaxed">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

            {/* Three Pillars */}
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">The Pillars of <br className="hidden md:block" />Stability.</h2>
          <div className="max-w-md">
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Effito eliminates administrative friction by integrating three core systemic upgrades that protect your time and maintain operational flow 24/7.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-200">
          {[
            {
              num: "01",
              title: "Occupancy & Reputation",
              desc: "Ensures every enquiry is met with an immediate, professional response. By qualifying needs and booking tours into the manager's calendar within seconds, it secures your occupancy while establishing a standard of elite professionalism from the first contact.",
              stat: "Pillar One",
              metric: "< 30s",
              metricLabel: "response time"
            },
            {
              num: "02",
              title: "Recruitment Engine",
              desc: "A high velocity pipeline for human capital. Every applicant is engaged instantly, screened, and booked for interview, slashing agency dependency by capturing quality staff first.",
              stat: "Pillar Two",
              metric: "−85%",
              metricLabel: "agency reliance"
            },
            {
              num: "03",
              title: "Retention & Oracle",
              desc: "The digital knowledge base for your staff, providing instant access to policies, handovers, and SOPs via a simple interface. The Oracle removes the administrative burden of repetitive questions, ensuring staff compliance and total operational clarity.",
              stat: "Pillar Three",
              metric: "30 hrs",
              metricLabel: "weekly recovery"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              className={`group flex flex-col hover:bg-stone-50 transition-colors duration-500
                ${i < 2 ? 'md:border-r border-stone-200' : ''}
                border-b md:border-b-0 border-stone-200 last:border-b-0
              `}
            >
              {/* Dark header strip */}
              <div className="bg-slate-900 px-8 md:px-10 py-5 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">{item.stat}</span>
                <span className="text-[10px] font-mono text-slate-600">{item.num}</span>
              </div>

              {/* Body */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                {/* Metric */}
                <div className="mb-8 pb-8 border-b border-stone-200">
                  <div className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight mb-1">{item.metric}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">{item.metricLabel}</div>
                </div>

                {/* Title + desc */}
                <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-4 tracking-tight leading-snug">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light flex-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

            {/* Why Owners Switch */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-white relative z-10 border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter">Why Owners Switch</h2>
            <p className="text-stone-400 text-base md:text-xl font-light tracking-wide">
              The difference between surviving and thriving in the current market.
            </p>
          </div>

          {/* Table */}
          <div className="border border-stone-200 overflow-hidden">

            {/* Header row */}
            <div className="grid grid-cols-12 border-b border-stone-200">
              <div className="col-span-3 px-6 md:px-8 py-4 bg-stone-50">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">Feature</span>
              </div>
              <div className="col-span-5 px-6 md:px-8 py-4 bg-stone-50 border-l border-stone-200">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">The Old Way</span>
              </div>
              <div className="col-span-4 px-6 md:px-8 py-4 bg-slate-900 border-l border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Effito Way</span>
              </div>
            </div>

            {/* Data rows */}
            {[
              {
                feature: "Inquiry Handling",
                old: "Manual Callbacks (8 to 24 hrs)",
                new: "Instant Automated Triage"
              },
              {
                feature: "Staffing",
                old: "Reactive Agency Hiring",
                new: "Always on Talent Pipeline"
              },
              {
                feature: "Visibility",
                old: "Gut feeling & Spreadsheets",
                new: "Live Performance Dashboards"
              },
              {
                feature: "Cost",
                old: "High Recurring Admin Costs",
                new: "Fixed cost Efficiency Engine"
              },
              {
                feature: "Scalability",
                old: "Needs More Admin Hires",
                new: "Infinite Growth Foundation"
              }
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="grid grid-cols-12 border-b border-stone-200 last:border-0 group"
              >
                {/* Feature */}
                <div className="col-span-3 px-6 md:px-8 py-5 md:py-6 flex items-center bg-white group-hover:bg-stone-50 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900">{row.feature}</span>
                </div>

                {/* Old way */}
                <div className="col-span-5 px-6 md:px-8 py-5 md:py-6 flex items-center border-l border-stone-200 bg-white group-hover:bg-stone-50 transition-colors">
                  <span className="text-sm text-stone-400 font-light line-through decoration-stone-300">{row.old}</span>
                </div>

                {/* Effito way */}
                <div className="col-span-4 px-6 md:px-8 py-5 md:py-6 flex items-center border-l border-slate-800 bg-slate-900 group-hover:bg-slate-800 transition-colors">
                  <span className="text-sm text-white font-semibold tracking-wide">{row.new}</span>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

            {/* Operational Alignment */}
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Compatibility</span>
          <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter">Operational Alignment.</h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            We partner with commercially minded operators who prioritize structural stability over manual short term fixes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-200">

          {/* LEFT: Institutional Fit — white */}
          <div className="bg-white p-8 md:p-14 border-b md:border-b-0 md:border-r border-stone-200">
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-stone-100">
              <div className="w-2 h-2 bg-slate-900 rounded-full" />
              <h3 className="text-xs font-bold uppercase tracking-[0.35em] text-slate-900">Institutional Fit</h3>
            </div>
            <ul className="space-y-0">
              {[
                {
                  label: "Independent Groups",
                  sub: "Owners needing the infrastructure of a large corporate without the overhead."
                },
                {
                  label: "Growth Focused Operators",
                  sub: "Homes looking to increase occupancy and reduce agency reliance permanently."
                },
                {
                  label: "Quality Driven Directors",
                  sub: "Leaders who value professional, institutional grade systems."
                }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 py-7 border-b border-stone-100 last:border-0 last:pb-0 group"
                >
                  <span className="text-[10px] font-mono text-stone-300 mt-1 shrink-0 group-hover:text-slate-400 transition-colors">0{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-2">{item.label}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{item.sub}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Non Target — dark */}
          <div className="bg-slate-900 p-8 md:p-14">
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-slate-800">
              <div className="w-2 h-2 bg-slate-600 rounded-full" />
              <h3 className="text-xs font-bold uppercase tracking-[0.35em] text-slate-500">Non Target Profiles</h3>
            </div>
            <ul className="space-y-0">
              {[
                {
                  label: "DIY Operators",
                  sub: "Homes looking for low cost manual tools to manage themselves."
                },
                {
                  label: "Marketing Only Fixes",
                  sub: "We provide infrastructure for the next decade, not just leads for the next week."
                },
                {
                  label: "Budget Solutions",
                  sub: "Effito is a premium operational investment for serious businesses."
                }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 py-7 border-b border-slate-800 last:border-0 last:pb-0 opacity-50"
                >
                  <span className="text-[10px] font-mono text-slate-600 mt-1 shrink-0">✕</span>
                  <div>
                    <h4 className="font-bold text-slate-400 text-sm uppercase tracking-wide mb-2">{item.label}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{item.sub}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Premium CTA */}
      <section className="bg-slate-900 py-24 md:py-40 px-6 md:px-8 text-center text-white overflow-hidden relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif mb-8 md:mb-12 tracking-tighter leading-tight">
            Transition from <span className="italic opacity-60">reactive</span> to <span className="italic">structured.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Infrastructure installations are limited each month. We prioritize care homes committed to building a stable, high occupancy future.
          </p>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-block bg-[#FAF9F6] text-slate-900 px-12 py-6 text-[14px] uppercase tracking-widest font-semibold hover:bg-white transition-all shadow-2xl"
          >
            Request Infrastructure Review
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
