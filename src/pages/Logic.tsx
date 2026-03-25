import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Logic: React.FC = () => {
  const steps = [
    {
      title: "Understanding",
      detail: "We conduct a deep dive into your home's current enquiry volume, recruitment needs and staff workflow.",
      duration: "Day 1",
      deliverable: "Operational audit report with bottleneck analysis"
    },
    {
      title: "Installation",
      detail: "Our engineers build your custom growth infrastructure. No complex IT integration is required.",
      duration: "Day 2–5",
      deliverable: "Voice systems, CRM workflows, and handbook assistant configured"
    },
    {
      title: "Tailoring",
      detail: "The system is refined with your specific inputs: room types, pricing models and home culture.",
      duration: "Day 5–6",
      deliverable: "Custom response scripts and qualification criteria"
    },
    {
      title: "Testing",
      detail: "Rigorous testing ensures that the tone and accuracy of responses meet our institutional standards.",
      duration: "Day 7",
      deliverable: "Quality assurance report and final adjustments"
    },
    {
      title: "Go Live",
      detail: "A controlled rollout where we monitor every interaction to ensure seamless operation.",
      duration: "Day 7–8",
      deliverable: "Live infrastructure with real-time monitoring"
    },
    {
      title: "Improvement",
      detail: "We stay as a partner, fine-tuning the infrastructure as your home reaches peak occupancy.",
      duration: "Ongoing",
      deliverable: "Monthly performance reports and optimization"
    }
  ];

  const beforeAfter = [
    {
      metric: "Enquiry Response Time",
      before: "4 to 24 hours",
      after: "Under 60 seconds",
      impact: "60% to 85% fewer lost leads"
    },
    {
      metric: "Manager Admin Burden",
      before: "25 to 30 hours per week",
      after: "5 to 8 hours per week",
      impact: "£25,000 in reclaimed leadership capacity"
    },
    {
      metric: "Recruitment Pipeline",
      before: "3 to 5 day CV review lag",
      after: "Instant screening and categorization",
      impact: "50% reduction in agency reliance"
    },
    {
      metric: "Occupancy Stability",
      before: "10% to 15% monthly fluctuation",
      after: "97% sustained occupancy",
      impact: "£312,000 additional annual revenue"
    }
  ];

  return (
    <>
      <Helmet>
        <title>The Logic | Effito Installation & Process</title>
        <meta name="description" content="Discover Effito's proven installation roadmap — from operational audit to custom infrastructure build, testing, and go-live for care home automation." />
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">

        {/* Hero */}
        <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-b border-stone-200">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-8 md:mb-10 block"
            >
              The Process
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-slate-900 mb-10 md:mb-14 tracking-tight leading-[1.1]"
            >
              Proven. Repeatable. <br className="hidden md:block" />
              <span className="italic">Minimal Disruption.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 leading-[1.6] font-light max-w-3xl"
            >
              The installation of your growth infrastructure is designed to be efficient. We understand your team is busy. We handle the heavy lifting.
            </motion.p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
              Your Installation <span className="italic">Roadmap.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl font-light leading-relaxed">
              A structured, five week process from operational audit to live infrastructure. Every step is documented, tested, and approved by your team.
            </p>
          </div>

          {/* Premium roadmap container */}
          <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm">

            {/* Progress bar header */}
            <div className="bg-slate-900 px-8 md:px-12 py-5 flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">Installation Timeline</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">8 Days to Live</span>
              </div>
            </div>

            {/* Step rows */}
            <div className="divide-y divide-stone-100">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-12 group hover:bg-stone-50 transition-colors duration-200"
                >
                  {/* Left: number + duration */}
                  <div className="md:col-span-3 px-8 md:px-12 py-7 flex md:flex-col items-center md:items-start gap-4 md:gap-2 border-b md:border-b-0 md:border-r border-stone-100">
                    <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400">{step.duration}</span>
                  </div>

                  {/* Right: content */}
                  <div className="md:col-span-9 px-8 md:px-12 py-7 flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-2 leading-tight">{step.title}</h3>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{step.detail}</p>
                    </div>

                    {/* Deliverable badge */}
                    <div className="shrink-0 md:w-72">
                      <div className="bg-stone-50 border border-stone-200 rounded-lg px-5 py-4 group-hover:bg-white group-hover:border-stone-300 transition-colors">
                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-stone-400 block mb-1.5">Deliverable</span>
                        <p className="text-sm text-slate-900 font-medium leading-snug">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer strip */}
            <div className="bg-stone-50 border-t border-stone-200 px-8 md:px-12 py-4 flex items-center justify-between">
              <span className="text-[9px] text-stone-400 font-light uppercase tracking-widest">Effito Infrastructure Protocol v3.1</span>
              <span className="text-[9px] text-stone-400 font-light uppercase tracking-widest">Ongoing optimisation included</span>
            </div>

          </div>
        </section>

        {/* Before & After Comparison */}
        <section className="py-16 md:py-24 px-6 md:px-8 bg-slate-900 text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-14 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">
                Before versus <span className="italic opacity-60">After.</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
                Measurable operational transformation. These are not projections. These are the systematic improvements infrastructure delivers.
              </p>
            </div>

            <div className="border border-slate-800 divide-y divide-slate-800">
              {/* Table header */}
              <div className="grid grid-cols-12 bg-slate-800/50">
                <div className="col-span-3 px-6 md:px-8 py-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Metric</span>
                </div>
                <div className="col-span-3 px-6 md:px-8 py-4 border-l border-slate-700">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Before</span>
                </div>
                <div className="col-span-3 px-6 md:px-8 py-4 border-l border-slate-700">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-500/70">After Effito</span>
                </div>
                <div className="col-span-3 px-6 md:px-8 py-4 border-l border-slate-700">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Impact</span>
                </div>
              </div>

              {beforeAfter.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-12 group hover:bg-slate-800/30 transition-colors"
                >
                  <div className="col-span-3 px-6 md:px-8 py-6 flex items-center">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-slate-300">{item.metric}</h3>
                  </div>
                  <div className="col-span-3 px-6 md:px-8 py-6 flex items-center border-l border-slate-800">
                    <p className="text-sm text-slate-500 font-light line-through decoration-slate-700">{item.before}</p>
                  </div>
                  <div className="col-span-3 px-6 md:px-8 py-6 flex items-center border-l border-slate-800">
                    <p className="text-sm text-white font-semibold">{item.after}</p>
                  </div>
                  <div className="col-span-3 px-6 md:px-8 py-6 flex items-center border-l border-slate-800">
                    <p className="text-sm text-emerald-400/80 font-light">{item.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-32 px-6 md:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tight leading-tight">
              A one time operational <span className="italic">upgrade.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Unlike marketing services, once Effito is installed, it is yours. It works every day, month after month. Built once. Permanent infrastructure.
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

export default Logic;
