import React, { useEffect, useState } from 'react';

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
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

        <div className="relative bg-white p-4 md:p-6 rounded-xl border border-stone-200 shadow-lg min-h-[600px] overflow-hidden">
          {/* High-End Skeleton Loader */}
          {isLoading && (
            <div className="absolute inset-0 p-8 space-y-8 bg-white z-10 animate-pulse">
              <div className="grid grid-cols-2 gap-6">
                <div className="h-10 bg-stone-100 rounded"></div>
                <div className="h-10 bg-stone-100 rounded"></div>
              </div>
              <div className="h-10 bg-stone-100 rounded w-full"></div>
              <div className="h-10 bg-stone-100 rounded w-full"></div>
              <div className="h-32 bg-stone-100 rounded w-full"></div>
              <div className="h-12 bg-slate-200 rounded w-full mt-4"></div>
              <div className="flex justify-center">
                <div className="h-2 bg-stone-100 rounded w-1/2"></div>
              </div>
            </div>
          )}

          {/* GHL Form with Transition */}
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/3Y6cASrktKYiOj9Vb97Y"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-3Y6cASrktKYiOj9Vb97Y" 
            className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            data-form-id="3Y6cASrktKYiOj9Vb97Y"
            title="Effito Enquiry Form"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
