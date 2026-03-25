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

      <div className="animate-in fade-in duration-700 bg-[#FAF9F6]">
        {/* Hero Section with Stats */}
        <section className="px-6 py-12 md:py-16 max-w-7xl mx-auto border-b border-stone-200">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">Get Started</span>
            
            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 tracking-tight leading-tight">
              Book a Strategy Call.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              A non obligation strategic discussion about your current infrastructure and how Effito can stabilize your operations.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-10 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-slate-900 mb-2">£450K+</div>
                <div className="text-xs md:text-sm text-slate-500 font-light">Average annual operational savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-slate-900 mb-2">97%</div>
                <div className="text-xs md:text-sm text-slate-500 font-light">Target occupancy stability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-slate-900 mb-2">&lt;60s</div>
                <div className="text-xs md:text-sm text-slate-500 font-light">Response time to enquiries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Calendar Section */}
        <section className="px-6 py-12 md:py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            
            {/* Left Column - Value Props */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* What to Expect */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                <h2 className="text-xl md:text-2xl font-serif text-slate-900 mb-6">What to Expect</h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Operational Audit</h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">We analyze your current enquiry volume, recruitment pipeline, and staff workflow to identify bottlenecks.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Custom Proposal</h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">You receive a tailored infrastructure plan with projected savings and timeline to peak occupancy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">No Obligation Decision</h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">Take your time. We only work with homes that see the long term value in systematic infrastructure.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reassurance Points */}
              <div className="bg-slate-900 text-white p-8 rounded-2xl">
                <h2 className="text-lg font-semibold mb-6">Why Care Homes Choose Effito</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2"></span>
                    <span className="font-light leading-relaxed">Limited to 3 new installations per month to ensure quality.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2"></span>
                    <span className="font-light leading-relaxed">Fixed, transparent investment model with no hidden fees.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2"></span>
                    <span className="font-light leading-relaxed">Built once, works permanently. Not a subscription service.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white mt-2"></span>
                    <span className="font-light leading-relaxed">Focused on long term operational health, not quick fixes.</span>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-stone-100 p-6 rounded-xl border border-stone-200 text-center">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Trusted Infrastructure</div>
                <p className="text-sm text-slate-600 font-light leading-relaxed italic">
                  "The right tools are not a cost. They are the foundation of a stable care business."
                </p>
              </div>

            </div>

            {/* Right Column - Calendar */}
            <div className="lg:col-span-7">
              <div className="bg-white p-4 md:p-6 rounded-2xl border border-stone-200 shadow-lg sticky top-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Select Your Time</h2>
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/BvkBGQnTXwD06WQTZbJh" 
                  style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
                  scrolling="no" 
                  id="BvkBGQnTXwD06WQTZbJh_1773148818067"
                  title="Booking Widget"
                ></iframe>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA / Final Reassurance */}
        <section className="px-6 py-12 md:py-16 max-w-5xl mx-auto text-center border-t border-stone-200">
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4">Still have questions?</h2>
          <p className="text-slate-600 mb-6 font-light leading-relaxed max-w-2xl mx-auto">
            This call is designed to be a genuine strategic conversation. We will assess whether Effito is the right infrastructure investment for your home's specific situation.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span>45 minute session</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span>UK based team</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
              <span>No sales pressure</span>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Contact;
