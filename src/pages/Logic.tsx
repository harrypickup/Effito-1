import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { title: "Understanding", detail: "We conduct a deep dive into your home's current enquiry volume, recruitment needs and staff workflow." },
    { title: "Installation", detail: "Our engineers build your custom growth infrastructure. No complex IT integration is required." },
    { title: "Tailoring", detail: "The system is refined with your specific inputs: room types, pricing models and home culture." },
    { title: "Testing", detail: "Rigorous testing ensures that the tone and accuracy of responses meet our institutional standards." },
    { title: "Go Live", detail: "A controlled rollout where we monitor every interaction to ensure seamless operation." },
    { title: "Improvement", detail: "We stay as a partner, fine-tuning the infrastructure as your home reaches peak occupancy." }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">The Process</span>
          
          {/* H1: Restored original text with correct SEO tag */}
          <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
            Proven. Repeatable. Minimal Disruption.
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
            The installation of your growth infrastructure is designed to be efficient. We understand your team is busy; we handle the heavy lifting.
          </p>
        </div>

        {/* H2: Hidden for SEO - Provides structural context for the steps */}
        <h2 className="sr-only">Our Installation Roadmap</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-12">
          {steps.map((step, i) => (
            <div key={i} className="relative pl-8 border-l border-slate-200">
              <span className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-slate-900 rounded-full"></span>
              
              {/* H3: Sub-headings for each step in the process */}
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed font-light">{step.detail}</p>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div className="mt-16 md:mt-24 bg-slate-900 text-white p-8 md:p-12 rounded-lg flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0 max-w-lg">
            {/* H2: Strong secondary heading for the value proposition */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              A one-time operational upgrade.
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Unlike marketing services, once Effito is installed, it is yours. It works every day, month after month.
            </p>
          </div>
          <div className="text-3xl md:text-4xl font-light opacity-50">Built Once.</div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
