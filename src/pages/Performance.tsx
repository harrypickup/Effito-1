import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

// Animated Core Objective Component
const CoreObjective: React.FC = () => {
  const metrics = [
    { value: "98.4%", label: "Target bed occupancy stabilization rate" },
    { value: "< 60s", label: "Average enquiry response time" },
    { value: "620%", label: "Lead retention increase vs manual" },
    { value: "30 hrs", label: "Weekly admin time recovered" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % metrics.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="bg-white p-10 md:p-12 rounded-2xl border-2 border-stone-200 shadow-xl">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-8">
          Core Objective
        </span>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-6xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tight">
              {metrics[currentIndex].value}
            </div>
            <div className="text-sm md:text-base text-slate-600 font-light leading-relaxed min-h-[3rem] flex items-center">
              {metrics[currentIndex].label}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {metrics.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-slate-900 w-8' : 'bg-stone-300 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Performance: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Performance Metrics | Effito Operational Excellence</title>
        <meta name="description" content="See how Effito reduces inquiry response times to under 60 seconds, eliminates lead decay, and recovers 30 hours of admin time weekly for care homes." />
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-8 py-20 md:py-40 max-w-[1400px] mx-auto border-b border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
            
            {/* Left Column - Text */}
            <div className="lg:col-span-7">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-8 md:mb-12 block"
              >
                System Performance Monitor
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-[7rem] font-serif text-slate-900 mb-10 md:mb-16 tracking-tighter leading-[1.05] md:leading-[0.9]"
              >
                Quantifying <br className="hidden md:block" />
                <span className="italic">Certainty.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-600 leading-[1.6] font-light max-w-3xl"
              >
                Performance is not a projection. It is the direct output of your infrastructure. We replace the volatility of manual processes with engineered consistency.
              </motion.p>
            </div>

            {/* Right Column - Animated Core Objective */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <CoreObjective />
            </div>

          </div>
        </section>

        {/* Output Matrix Section */}
        <section className="py-24 md:py-40 px-6 md:px-8 bg-white">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start mb-20">
              
              {/* Left - Title Block */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-6">
                  Dashboards №1: Response Velocity
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tight leading-tight">
                  Eliminating Operational <span className="italic">Friction.</span>
                </h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
                  In the modern care market, the "Response Gap" is where profit goes to die. Manual legacy systems allow enquiries to drift for hours, resulting in an 85% loss of high intent private leads.
                </p>

                {/* Stats Cards */}
                <div className="space-y-6">
                  <div className="bg-stone-50 p-6 md:p-8 rounded-xl border border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-3">Response Speed</span>
                    <div className="text-5xl md:text-6xl font-serif text-slate-900 mb-2 tracking-tight">30 Seconds</div>
                    <span className="text-sm text-slate-500 font-light">Effito Average</span>
                  </div>

                  <div className="bg-stone-50 p-6 md:p-8 rounded-xl border border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-3">Lead Retention</span>
                    <div className="text-5xl md:text-6xl font-serif text-emerald-900 mb-2 tracking-tight">+620%</div>
                    <span className="text-sm text-slate-500 font-light">Vs. Manual Handling</span>
                  </div>
                </div>
              </div>

              {/* Right - Visual Matrix */}
              <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-stone-200 shadow-xl">
                <div className="mb-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-6">
                    ● Output Matrix: Lead Capture Efficiency
                  </span>
                </div>

                {/* Legacy Infrastructure Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-slate-900">Legacy<br/>(Manual)</span>
                    <span className="text-xs text-slate-400">15% conversion</span>
                  </div>
                  <div className="h-12 bg-stone-100 rounded-lg overflow-hidden border border-stone-200">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-stone-300 flex items-center justify-end pr-3"
                    >
                      <span className="text-xs font-mono text-slate-700">15%</span>
                    </motion.div>
                  </div>
                </div>

                {/* Effito Infrastructure Bar */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-slate-900">Effito<br/>(Infrastructure)</span>
                    <span className="text-xs text-emerald-700">98% conversion</span>
                  </div>
                  <div className="h-12 bg-stone-100 rounded-lg overflow-hidden border border-stone-200">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-slate-900 flex items-center justify-end pr-3"
                    >
                      <span className="text-xs font-mono text-white">98%</span>
                    </motion.div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-6 font-light italic">
                  Based on typical 40-bed home receiving 20 monthly enquiries
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Stabilization Curve Section */}
        <section className="py-24 md:py-40 px-6 md:px-8 bg-[#FAF9F6]">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="mb-16 md:mb-20">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-6">
                Dashboards №2: Bed Fill Optimization
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tight leading-tight">
                The Stabilization <span className="italic">Curve.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
              
              {/* Graph */}
              <div className="lg:col-span-8">
                <div className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-lg">
                  <p className="text-sm text-slate-600 mb-8 font-light">
                    Manual homes suffer from "Capacity Volatility" — a cycle of move ins followed by sudden vacancies and slow refills. Effito creates a continuous intake pressure that maintains peak occupancy.
                  </p>
                  {/* SVG Graph */}
                  <div className="relative h-[400px] md:h-[500px]">
                    <svg viewBox="0 0 800 400" className="w-full h-full">
                      {/* Grid lines */}
                      <line x1="60" y1="50" x2="60" y2="350" stroke="#e5e7eb" strokeWidth="2"/>
                      <line x1="60" y1="350" x2="750" y2="350" stroke="#e5e7eb" strokeWidth="2"/>
                      
                      {/* Y-axis labels */}
                      <text x="30" y="60" fontSize="12" fill="#94a3b8">100%</text>
                      <text x="35" y="140" fontSize="12" fill="#94a3b8">95%</text>
                      <text x="35" y="220" fontSize="12" fill="#94a3b8">90%</text>
                      <text x="35" y="300" fontSize="12" fill="#94a3b8">85%</text>
                      <text x="35" y="355" fontSize="12" fill="#94a3b8">80%</text>
                      
                      {/* X-axis labels */}
                      <text x="80" y="375" fontSize="12" fill="#94a3b8">M 1</text>
                      <text x="220" y="375" fontSize="12" fill="#94a3b8">M 3</text>
                      <text x="360" y="375" fontSize="12" fill="#94a3b8">M 6</text>
                      <text x="500" y="375" fontSize="12" fill="#94a3b8">M 9</text>
                      <text x="640" y="375" fontSize="12" fill="#94a3b8">M 12</text>
                      
                      {/* Manual (dashed line - volatile) */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                        viewport={{ once: true }}
                        d="M 80,280 Q 150,260 220,270 T 360,250 T 500,270 T 640,260 T 720,250"
                        stroke="#cbd5e1"
                        strokeWidth="3"
                        strokeDasharray="8,8"
                        fill="none"
                      />
                      
                      {/* Effito (solid line - stable climb to 97%) */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        viewport={{ once: true }}
                        d="M 80,280 Q 220,200 360,120 T 640,70 L 720,60"
                        stroke="#0f172a"
                        strokeWidth="4"
                        fill="none"
                      />
                      
                      {/* Legend */}
                      <line x1="600" y1="30" x2="640" y2="30" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8,8"/>
                      <text x="650" y="35" fontSize="14" fill="#64748b">Manual Volatility</text>
                      
                      <line x1="600" y1="50" x2="640" y2="50" stroke="#0f172a" strokeWidth="4"/>
                      <text x="650" y="55" fontSize="14" fill="#0f172a">Effito Trajectory</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right - Explanation Cards */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                    <span className="text-white text-sm">●</span>
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 mb-3">Institutional Flow</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    By treating the intake process as a high speed pipeline, we remove the reliance on the "availability" of a human manager to secure a booking.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                    <span className="text-white text-sm">●</span>
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 mb-3">Agency Elimination</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    The speed of the recruitment engine captures top tier talent before they drift to agencies, slashing your monthly markup expenditure by up to 85%.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mb-4">
                    <span className="text-white text-sm">●</span>
                  </div>
                  <h3 className="text-xl font-serif text-slate-900 mb-3">Operational Peace</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Automating 96% of routine staff communications allows your clinical team to focus purely on care standards and CQC compliance.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32 md:py-48 px-6 md:px-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-10 tracking-tight leading-tight">
              Certainty is not a forecast. <br className="hidden md:block" />
              It is <span className="italic">infrastructure.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 mb-14 font-light leading-[1.7] max-w-2xl mx-auto">
              These metrics are not aspirational targets. They are the measured, repeatable output of systematic infrastructure working exactly as designed.
            </p>
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-slate-900 text-white px-14 py-7 text-[11px] uppercase tracking-[0.45em] font-bold shadow-2xl hover:bg-slate-800 transition-all duration-300"
            >
              Book Strategy Call
            </motion.a>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default Performance;
