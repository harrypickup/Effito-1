import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

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
    <>
      <Helmet>
        <title>Contact Effito | Book a Strategy Call for Your Care Home</title>
        <meta name="description" content="Request an operational diagnostic and discover how Effito's infrastructure can increase occupancy, reduce agency costs, and streamline your care home operations." />
      </Helmet>

      <div className="animate-in fade-in duration-700">
        <section className="px-6 py-16 md:py-24 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Text Section - Narrower */}
          <div className="lg:col-span-4">
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">Get Started</span>
            
            {/* H1: Main page heading (Restored original text) */}
            <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 md:mb-8 tracking-tight">
              Book a Strategy Call.
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-light">
              This is a non obligation strategic discussion about your current infrastructure and how Effito can stabilize your operations.
            </p>
            
            {/* H2: Hidden for SEO structure - provides context for the list below */}
            <h2 className="sr-only">Strategic Review Details</h2>
            <div className="space-y-4 text-sm text-slate-500 font-light">
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

          {/* Calendar Section - Wider */}
          <div className="lg:col-span-8 bg-white p-4 md:p-6 rounded-xl border border-stone-200 shadow-lg max-h-[500px] overflow-auto">
            {/* H2: Descriptive heading for the booking section */}
            <h2 className="sr-only">Schedule Your Session</h2>
            <div style={{ maxHeight: '500px', overflow: 'auto' }}>
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/BvkBGQnTXwD06WQTZbJh" 
                style={{ width: '100%', border: 'none', overflow: 'hidden', height: '300px', maxHeight: '300px' }} 
                scrolling="yes" 
                id="BvkBGQnTXwD06WQTZbJh_1773148818067"
                title="Booking Widget"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
