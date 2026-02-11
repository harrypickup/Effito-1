
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="px-6 py-32 max-w-7xl mx-auto text-center animate-in zoom-in-95 duration-500">
        <h1 className="text-4xl font-semibold text-slate-900 mb-6">Strategy Call Requested.</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
          Thank you. An infrastructure consultant will review your request and reach out within 24 hours to schedule a time.
        </p>
        <div className="inline-block px-8 py-3 bg-slate-100 text-slate-600 rounded">
          Priority Review: Active
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <section className="px-6 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">Get Started</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-8 tracking-tight">Book a Strategy Call.</h1>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            This is a non-obligation strategic discussion about your current infrastructure and how Effito can stabilize your operations.
          </p>
          
          <div className="space-y-6 text-sm text-slate-500">
            <div className="flex gap-4 items-center">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              <span>Limited to 3 new installations per month.</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              <span>Focused on long-term operational health.</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-2 h-2 rounded-full bg-slate-900"></span>
              <span>Fixed, transparent investment model.</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl border border-stone-200 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Full Name</label>
                <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-3 rounded text-sm focus:outline-none focus:border-slate-900 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Job Title</label>
                <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-3 rounded text-sm focus:outline-none focus:border-slate-900 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Care Home Name</label>
              <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-3 rounded text-sm focus:outline-none focus:border-slate-900 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Work Email</label>
              <input required type="email" className="w-full bg-stone-50 border border-stone-200 p-3 rounded text-sm focus:outline-none focus:border-slate-900 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Primary Objective</label>
              <select className="w-full bg-stone-50 border border-stone-200 p-3 rounded text-sm focus:outline-none focus:border-slate-900 transition-colors">
                <option>Increase Occupancy</option>
                <option>Reduce Agency Reliance</option>
                <option>Improve Response Times</option>
                <option>Complete Operational Upgrade</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white p-4 rounded font-medium hover:bg-slate-800 transition-all shadow-md mt-4"
            >
              Request Call
            </button>
            <p className="text-[10px] text-center text-slate-400">
              By submitting, you agree to our privacy policy regarding professional communication.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
