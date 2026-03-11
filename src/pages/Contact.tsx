
import React, { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
        <div>
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">Get Started</span>
          <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 md:mb-8 tracking-tight">Book a Strategy Call.</h1>
          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-12 leading-relaxed font-light">
            This is a non obligation strategic discussion about your current infrastructure and how Effito can stabilize your operations.
          </p>
          
          <div className="space-y-4 md:space-y-6 text-sm text-slate-500 font-light">
            <div className="flex gap-4 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span>Limited to 3 new installations per month.</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span>Focused on long term operational health.</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span>Fixed, transparent investment model.</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-1 md:p-4 rounded-xl border border-stone-200 shadow-lg min-h-[600px] overflow-hidden">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/BvkBGQnTXwD06WQTZbJh" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
            scrolling="no" 
            id="BvkBGQnTXwD06WQTZbJh_1773148818067"
            title="Booking Widget"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
