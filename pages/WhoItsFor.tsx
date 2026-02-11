
import React from 'react';

const WhoItsFor: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">Alignment</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">Is Effito right for your home?</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We partner with commercially minded operators who prioritize stability and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 pb-4 border-b border-stone-100">Designed for</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-slate-900 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-slate-800">Independent Homes & Small Groups</h4>
                  <p className="text-sm text-slate-500">Owners who need the infrastructure of a large corporate without the overhead.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-slate-900 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-slate-800">Growth-Focused Operators</h4>
                  <p className="text-sm text-slate-500">Homes looking to increase occupancy and reduce agency reliance permanently.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-slate-900 font-bold">✓</span>
                <div>
                  <h4 className="font-semibold text-slate-800">Quality-Driven Directors</h4>
                  <p className="text-sm text-slate-500">Leaders who value professional, institutional-grade systems.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-stone-50 p-12 rounded-xl border border-stone-200">
            <h3 className="text-2xl font-semibold text-slate-400 mb-8 pb-4 border-b border-stone-200">Not designed for</h3>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <span>✕</span>
                <div>
                  <h4 className="font-semibold">DIY Operators</h4>
                  <p className="text-sm">Homes looking for cheap, manual tools to manage themselves.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span>✕</span>
                <div>
                  <h4 className="font-semibold">Short-Term Marketing Fixes</h4>
                  <p className="text-sm">We provide infrastructure for the next decade, not leads for the next week.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span>✕</span>
                <div>
                  <h4 className="font-semibold">Budget-Only Solutions</h4>
                  <p className="text-sm">Effito is a premium operational investment for serious businesses.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoItsFor;
