
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts';
import { GrowthNode } from '../components/Diagrams';

const responseData = [
  { name: 'Legacy (Manual)', value: 15, label: '15% Success' },
  { name: 'Effito Infrastructure', value: 98, label: '98% Success' },
];

const growthData = [
  { month: 'Wk 1', organic: 82, effito: 82 },
  { month: 'Wk 4', organic: 80, effito: 85 },
  { month: 'Wk 8', organic: 83, effito: 90 },
  { month: 'Wk 12', organic: 81, effito: 94 },
  { month: 'Wk 16', organic: 84, effito: 97 },
  { month: 'Wk 20', organic: 82, effito: 98 },
];

const Performance: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen overflow-x-hidden">
      {/* Hero: Operational Certainty */}
      <section className="px-8 pt-32 pb-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-slate-500">System Performance Monitor</span>
            </div>
            <h1 className="text-6xl md:text-[7rem] font-serif text-slate-900 mb-10 tracking-tighter leading-[0.9]">
              Quantifying <br />
              <span className="italic">Certainty.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed">
              Performance is not a projection—it is the direct output of your infrastructure. We replace the volatility of manual processes with engineered consistency.
            </p>
          </div>
          <div className="lg:col-span-4 lg:pt-24">
            <div className="p-8 bg-white border border-stone-200 rounded-sm shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2v20m10-10H2" />
                </svg>
               </div>
               <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 block mb-4">Core Objective</span>
               <div className="text-4xl font-serif text-slate-900 mb-2">98.4%</div>
               <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 leading-tight">
                 Target Bed Occupancy <br /> Stabilization Rate
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Diagnostic: The Yield Delta */}
      <section className="bg-white border-y border-stone-200 py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-stone-400 mb-6 block">Diagnostic 01: Response Velocity</span>
              <h2 className="text-4xl font-serif text-slate-900 mb-8 leading-tight">Eliminating <br />Operational <span className="italic">Friction.</span></h2>
              <p className="text-slate-500 font-light leading-relaxed mb-10">
                In the modern care market, the "Response Gap" is where profit goes to die. Manual legacy systems allow enquiries to drift for hours, resulting in an 85% loss of high-intent private leads.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-stone-100 pt-10">
                <div>
                  <span className="text-[10px] font-bold uppercase text-stone-400 block mb-2">Response Speed</span>
                  <span className="text-2xl font-serif text-slate-900 tracking-tight">30 Seconds</span>
                  <p className="text-[10px] text-stone-400 mt-1 uppercase font-bold tracking-tighter">Effito Average</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-stone-400 block mb-2">Lead Retention</span>
                  <span className="text-2xl font-serif text-slate-900 tracking-tight">+620%</span>
                  <p className="text-[10px] text-stone-400 mt-1 uppercase font-bold tracking-tighter">Vs. Manual Handling</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 h-[450px] bg-stone-50 p-10 rounded-sm border border-stone-200 relative">
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-900">Output Matrix: Lead Capture Efficiency</span>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={responseData} layout="vertical" margin={{ left: 120, right: 40, top: 40 }}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}
                  />
                  <Tooltip 
                    cursor={{fill: 'rgba(0,0,0,0.02)'}}
                    contentStyle={{ borderRadius: '0', border: '1px solid #e5e7eb', fontSize: '11px', fontFamily: 'monospace' }}
                  />
                  <Bar dataKey="value" radius={[0, 1, 1, 0]} barSize={32}>
                    {responseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#E2E8F0' : '#0F172A'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Stabilization Curve: Occupancy Optimization */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
             <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">Diagnostic 02: Bed Yield Optimization</span>
             <h2 className="text-5xl font-serif text-slate-900 tracking-tighter">The Stabilization Curve.</h2>
          </div>
          <p className="text-slate-500 max-w-md font-light leading-relaxed text-sm">
            Manual homes suffer from "Capacity Volatility"—a cycle of move-ins followed by sudden vacancies and slow refills. Effito creates a continuous intake pressure that maintains peak occupancy.
          </p>
        </div>

        <div className="h-[500px] w-full bg-white border border-stone-200 p-10 shadow-sm rounded-sm overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="colorEffito" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0F172A" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#0F172A" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600, fontFamily: 'monospace' }}
                dy={15}
              />
              <YAxis 
                domain={[75, 100]} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10, fontFamily: 'monospace' }}
                tickFormatter={(val) => `${val}%`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '0', border: '1px solid #e5e7eb', fontFamily: 'monospace', fontSize: '11px' }}
              />
              <Area 
                type="monotone" 
                dataKey="organic" 
                stroke="#CBD5E1" 
                strokeWidth={1.5}
                strokeDasharray="5 5"
                fill="transparent" 
                name="Legacy Volatility"
              />
              <Area 
                type="monotone" 
                dataKey="effito" 
                stroke="#0F172A" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorEffito)" 
                name="Engineered Stability"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24">
          {[
            { 
              title: "Institutional Flow", 
              desc: "By treating the intake process as a high-speed pipeline, we remove the reliance on the 'availability' of a human manager to secure a booking." 
            },
            { 
              title: "Agency Elimination", 
              desc: "The speed of the recruitment engine captures top-tier talent before they drift to agencies, slashing your monthly markup expenditure by up to 40%." 
            },
            { 
              title: "Operational Peace", 
              desc: "Automating 90% of routine staff and family communications allows your clinical team to focus purely on care standards and CQC compliance." 
            }
          ].map((item, i) => (
            <div key={i}>
              <div className="mb-6"><GrowthNode /></div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">{item.title}</h4>
              <p className="text-[13px] text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Impact Matrix */}
      <section className="bg-slate-900 py-32 px-8 text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-500 mb-6 block">Output Benchmarking</span>
            <h2 className="text-5xl font-serif tracking-tighter max-w-2xl">The geometry of <br />operational <span className="italic opacity-60">freedom.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
            {[
              { label: "Occupancy Gain", value: "98%", sub: "Average stabilized bed capacity" },
              { label: "Agency Reduction", value: "40%", sub: "Quarter-on-quarter spend reduction" },
              { label: "Admin Recovery", value: "30h", sub: "Manager time recovered per week" },
              { label: "Response Time", value: "<1m", sub: "Across all digital and voice channels" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900 p-12 hover:bg-slate-800/50 transition-colors">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500 block mb-8">{stat.label}</span>
                <span className="text-6xl font-serif mb-4 block tracking-tighter">{stat.value}</span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Audit CTA */}
      <section className="py-40 px-8 text-center bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
           <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-10">
              <div className="w-2 h-2 bg-slate-900 rounded-full" />
           </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter">
            Initiate a <span className="italic">Performance Audit.</span>
          </h2>
          <p className="text-slate-500 mb-12 font-light leading-relaxed text-lg">
            We provide a granular breakdown of your current operational leakage and demonstrate the exact yield an Effito installation will produce for your home.
          </p>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <a 
              href="#/contact" 
              className="inline-block bg-slate-900 text-white px-12 py-6 text-[12px] uppercase tracking-[0.4em] font-bold shadow-2xl hover:bg-slate-800 transition-colors"
            >
              Request Operational Diagnostic
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Performance;
