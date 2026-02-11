
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeroBackgroundAnimation, PillarFlowAnimation, ChaosComparison, GrowthNode } from '../components/Diagrams';

const Home: React.FC = () => {
  const switchData = [
    { 
      feature: "Inquiry Handling", 
      old: "Manual Callbacks (8-24 hrs)", 
      new: "Instant Automated Triage" 
    },
    { 
      feature: "Staffing", 
      old: "Reactive Agency Hiring", 
      new: "Always-on Talent Pipeline" 
    },
    { 
      feature: "Visibility", 
      old: "Gut-feeling & Spreadsheets", 
      new: "Live Performance Dashboards" 
    },
    { 
      feature: "Cost", 
      old: "High Recurring Admin Costs", 
      new: "Fixed-cost Efficiency Engine" 
    },
    { 
      feature: "Scalability", 
      old: "Needs More Admin Hires", 
      new: "Infinite Growth Foundation" 
    }
  ];

  const stats = [
    { value: "60 Days", label: "Payback Period" },
    { value: "30%", label: "Agency Reduction" },
    { value: "< 2 Mins", label: "Inquiry Response" },
    { value: "£200k+", label: "Profit Recovery" }
  ];

  return (
    <div className="bg-[#FAF9F6] relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-32 md:pt-32 md:pb-48 max-w-[1400px] mx-auto min-h-[90vh] flex items-center">
        <HeroBackgroundAnimation />
        
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[13px] font-semibold uppercase tracking-[0.4em] text-stone-400 mb-8">
              Growth Infrastructure
            </span>
            <h1 className="text-6xl md:text-[8rem] font-serif leading-[0.85] tracking-tighter text-slate-900 mb-12">
              The architecture <br /> 
              of <span className="italic">care.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-xl leading-relaxed text-balance font-light">
              Capture every high-intent enquiry, maintain peak bed capacity, and eliminate the chaos of manual follow-ups with institutional-grade automation built specifically for residential care.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-10 py-5 text-[14px] uppercase tracking-widest font-semibold hover:bg-slate-800 transition-all duration-300 shadow-2xl"
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
      <section className="bg-slate-900 border-y border-slate-800 py-16 px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-x-0 lg:divide-x divide-slate-800">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center justify-center text-center px-4"
              >
                <span className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-3">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="bg-white py-32 border-b border-stone-200 relative z-10">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">
              Chaos is the silent <br />cost of care.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 font-light">
              Most care homes struggle not with a lack of demand, but with a lack of structure. Every missed enquiry is a lost resident; every slow recruitment cycle is an agency expense.
            </p>
            <div className="grid grid-cols-1 gap-8">
              {[
                { label: "Delayed Lead Handling", desc: "Response times exceeding 4 hours result in 60% drop-off rates." },
                { label: "Recruitment Friction", desc: "Competitors move faster, securing quality staff before you follow up." },
                { label: "Staff Overload", desc: "Senior management bogged down in manual enquiry logging." }
              ].map((item, i) => (
                <div key={i} className="group border-l border-stone-200 pl-8 py-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">{item.label}</h4>
                  <p className="text-sm text-slate-500 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 flex items-center">
             <div className="w-full">
               <ChaosComparison />
             </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-5xl font-serif text-slate-900">The Pillars of <br/>Stability.</h2>
          <div className="max-w-md">
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Effito replaces operational manual labor with three distinct systemic upgrades that work in unison 24/7.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-200 divide-x divide-stone-200">
          {[
            { 
              title: "Occupancy & Reputation", 
              desc: "The Occupancy Engine handles every new lead within 10 seconds. Sarah AI qualifies needs and books tours directly into your manager's calendar while reputation is built through instant professionalism.",
              stat: "Pillar One"
            },
            { 
              title: "Recruitment Engine", 
              desc: "A high-velocity pipeline for human capital. Every applicant is engaged instantly, screened, and booked for interview, slashing agency dependency by capturing quality staff first.",
              stat: "Pillar Two"
            },
            { 
              title: "Retention & Oracle", 
              desc: "The 'Oracle' engine turns missed calls into captured data 24/7, while automating the communication threads that keep existing staff informed and residents' families connected.",
              stat: "Pillar Three"
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ backgroundColor: "#F2F0EB" }}
              className="p-12 transition-colors duration-500"
            >
              <div className="mb-12"><GrowthNode /></div>
              <h3 className="text-2xl font-serif text-slate-900 mt-0 mb-6 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 font-light">{item.desc}</p>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-900 block pt-4 border-t border-stone-200">
                {item.stat}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Owners Switch */}
      <section className="py-32 px-8 bg-[#FAF9F6] relative z-10 border-b border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter">Why Owners Switch</h2>
            <p className="text-stone-400 text-lg md:text-xl font-light tracking-wide">
              The difference between surviving and thriving in the current market.
            </p>
          </div>

          <div className="bg-white border border-stone-200 shadow-sm rounded-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-stone-50 border-b border-stone-200 py-6 px-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">Feature</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">The Old Way</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">Effito™ Way</span>
            </div>

            <div className="divide-y divide-stone-100">
              {switchData.map((row, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ backgroundColor: "#FAF9F6" }}
                  className="grid grid-cols-3 py-8 px-8 items-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">{row.feature}</span>
                  <span className="text-sm text-stone-400 line-through decoration-stone-300 opacity-60 font-light pr-4">{row.old}</span>
                  <span className="text-sm text-slate-900 font-semibold tracking-wide">{row.new}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Alignment (Formerly Who It's For) */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Compatibility</span>
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter">Operational Alignment.</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            We partner with commercially minded operators who prioritize structural stability over manual short-term fixes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
          <div className="bg-white p-12 md:p-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-2 bg-slate-900 rounded-full" />
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-900">Institutional Fit</h3>
            </div>
            <ul className="space-y-10">
              {[
                { label: "Independent Groups", sub: "Owners needing the infrastructure of a large corporate without the overhead." },
                { label: "Growth-Focused Operators", sub: "Homes looking to increase occupancy and reduce agency reliance permanently." },
                { label: "Quality-Driven Directors", sub: "Leaders who value professional, institutional-grade systems." }
              ].map((item, i) => (
                <li key={i} className="flex gap-6">
                  <span className="text-slate-300 font-mono text-xs mt-1">0{i+1}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight mb-2">{item.label}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-stone-50 p-12 md:p-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-2 bg-stone-300 rounded-full" />
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400">Non-Target Profiles</h3>
            </div>
            <ul className="space-y-10">
              {[
                { label: "DIY Operators", sub: "Homes looking for low-cost manual tools to manage themselves." },
                { label: "Marketing-Only Fixes", sub: "We provide infrastructure for the next decade, not just leads for the next week." },
                { label: "Budget Solutions", sub: "Effito is a premium operational investment for serious businesses." }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 opacity-60">
                  <span className="text-stone-300 font-mono text-xs mt-1">✕</span>
                  <div>
                    <h4 className="font-bold text-stone-400 text-sm uppercase tracking-tight mb-2">{item.label}</h4>
                    <p className="text-sm text-stone-400 font-light leading-relaxed">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl md:text-3xl font-serif text-slate-900 italic opacity-80 max-w-3xl mx-auto leading-relaxed">
            "Structure is the difference between a business that runs on stress and a business that runs on systems."
          </p>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="bg-slate-900 py-40 px-8 text-center text-white overflow-hidden relative z-10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0" stroke="white" strokeWidth="0.1" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-tighter leading-tight">
            Transition from <span className="italic opacity-60">reactive</span> to <span className="italic">structured.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Infrastructure installations are limited each month. We prioritize care homes committed to building a stable, high-occupancy future.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FAF9F6] text-slate-900 px-12 py-6 text-[14px] uppercase tracking-widest font-semibold hover:bg-white transition-all shadow-2xl"
          >
            Request Infrastructure Review
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
