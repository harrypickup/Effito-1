import React, { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    // Load the GHL form embed script dynamically
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script if user navigates away
      document.body.removeChild(script);
    };
  }, []);

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

        {/* GHL Form Container */}
        <div className="bg-white p-4 md:p-6 rounded-xl border border-stone-200 shadow-lg min-h-[600px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/3Y6cASrktKYiOj9Vb97Y"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-3Y6cASrktKYiOj9Vb97Y" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Effito Enquiry Form"
            data-height="568"
            data-layout-iframe-id="inline-3Y6cASrktKYiOj9Vb97Y"
            data-form-id="3Y6cASrktKYiOj9Vb97Y"
            title="Effito Enquiry Form"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
