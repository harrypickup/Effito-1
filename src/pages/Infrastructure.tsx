
import React from 'react';
import { motion } from 'framer-motion';
import { InfrastructureArch, GrowthNode } from '../components/Diagrams';

const Infrastructure: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero / Introduction Section */}
      <section className="px-8 py-32 max-w-[1400px] mx-auto border-b border-stone-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-stone-400 mb-8 block">The Architecture</span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-10 leading-[1.1] tracking-tighter">
              A Permanent <br/>Operational <span className="italic">Upgrade.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-16 leading-relaxed font-light">
              Effito is not software you "use." It is an infrastructure we install—a collection of resilient systems that manage the growth and human capital of your care home automatically.
            </p>
            
            <div className="space-y-12">
              {[
                { step: "01", title: "Autonomous Engagement", body: "Enquiries are handled within seconds with professional accuracy, ensuring your home is always the first to respond." },
                { step: "02", title: "Resilient Workflows", body: "Processes that do not rely on staff availability. Your growth infrastructure is always active, 24/7." },
                { step: "03", title: "Institutional Quality", body: "Consistency across every interaction, reflecting the high standards of care you provide internally." }
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  key={i} 
                  className="flex gap-10"
                >
                  <span className="text-sm font-bold text-slate-300 font-mono mt-1">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 uppercase tracking-wider">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 sticky top-32">
            <div className="relative p-1 bg-white border border-stone-200 rounded-sm shadow-sm group">
              <div className="absolute -top-4 -right-4 bg-slate-900 text-white text-[10px] px-3 py-1 uppercase tracking-widest font-bold z-10">
                Blueprint v3.1
              </div>
              <InfrastructureArch />
              <div className="mt-8 grid grid-cols-3 gap-px bg-stone-200">
                {['Growth', 'Talent', 'Intelligence'].map((label, i) => (
                  <div key={i} className="bg-white p-6 text-center">
                    <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Module {i+1}</span>
                    <span className="text-sm font-medium text-slate-900">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 01 Detail Section: Occupancy Engine */}
      <section className="relative overflow-hidden bg-white border-b border-stone-200">
        <div className="max-w-[1400px] mx-auto px-8 py-32">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
            <div>
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Component 01</span>
              <h2 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tighter">The Occupancy <br/><span className="italic">Engine.</span></h2>
            </div>
            <p className="max-w-md text-slate-500 font-light leading-relaxed">
              An institutional-grade sales infrastructure that converts interest into occupancy without human intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            <div className="lg:col-span-4 space-y-12">
              <div className="bg-stone-50 border border-stone-200 p-8 rounded-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 bg-stone-300 rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 italic">Current State: The Leaky Bucket</span>
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-6">Passive Intake Failure</h3>
                <div className="space-y-6">
                  {[
                    { label: "The Capture", text: "Generic info@ email inbox check. Delayed and unmonitored." },
                    { label: "The Process", text: "Manager checks when spare moments allow—often 4-24hrs later." },
                    { label: "The Follow-up", text: "Manual phone call. Single attempt, then lead is abandoned." }
                  ].map((item, i) => (
                    <div key={i} className="border-b border-stone-200 pb-4 last:border-0">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400 block mb-1">{item.label}</span>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-stone-200">
                  <span className="text-[10px] font-bold text-red-900/50 uppercase tracking-widest block mb-4">Economic Impact</span>
                  <p className="text-sm text-slate-400 italic font-light">
                    "Losing one private-pay resident due to a slow response costs the home £75,000–£100,000 in annual lost fees."
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="mb-20">
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8 leading-tight">
                  From a digital "Black Hole" <br/>to a <span className="italic">High-Speed Pipeline.</span>
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                  We don't sell AI chatbots. We install Instant Response Infrastructure. When a family reaches out, silence is replaced by an empathy-driven, professional capture system that secures the "Speed to Trust."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                {[
                  { title: "Instant Capture", detail: "N8N logic listens to website forms and Carehome.co.uk 24/7. The moment 'Submit' is clicked, the engine fires." },
                  { title: "30s AI Voice Call", detail: "Sarah (AI Assistant) calls the prospect immediately. Introduces herself, acknowledges the specific care need, and initiates triage." },
                  { title: "Elite Qualification", detail: "Strategic questioning regarding budget, timeline, and urgency. Identifying high-intent private-pay leads instantly." },
                  { title: "Calendar Integration", detail: "Seamless booking. Sarah identifies manager availability and secures tours directly into the GHL master calendar." },
                  { title: "Multi-Channel Nurture", detail: "Automatic WhatsApp and email follow-ups with digital brochures and testimonials keep the family warm for 7 days." },
                  { title: "GHL CRM Sync", detail: "Full transcriptions of every conversation are logged. The manager walks into the tour knowing exactly what the family needs." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 hover:bg-stone-50 transition-colors">
                    <div className="mb-6"><GrowthNode /></div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 02 Detail Section: Recruitment Engine */}
      <section className="relative overflow-hidden bg-[#FAF9F6] border-b border-stone-200">
        <div className="max-w-[1400px] mx-auto px-8 py-32">
          {/* Header */}
          <div className="mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
            <div>
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Component 02</span>
              <h2 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tighter">The Recruitment <br/><span className="italic">Engine.</span></h2>
            </div>
            <p className="max-w-md text-slate-500 font-light leading-relaxed">
              An aggressive, automated direct-hire infrastructure designed to eliminate agency dependency and stabilize your workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            {/* The Current State: The Vacancy Crisis */}
            <div className="lg:col-span-4 space-y-12">
              <div className="bg-white border border-stone-200 p-8 rounded-sm shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 bg-red-400/50 rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 italic">Current State: The Vacancy Crisis</span>
                </div>
                
                <h3 className="text-xl font-serif text-slate-900 mb-6">Fragmented Manual Process</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "The Post", text: "Standard Indeed ad placement. Passive waiting for CVs." },
                    { label: "The Delay", text: "CVs sit in inboxes for 3–5 days while managers cover clinical shifts." },
                    { label: "The Ghosting", text: "Good candidates are hired by faster competitors before you call." },
                    { label: "Compliance Gap", text: "DBS and Right to Work checks take weeks of manual 'email tag'." }
                  ].map((item, i) => (
                    <div key={i} className="border-b border-stone-100 pb-4 last:border-0">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">{item.label}</span>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-stone-200">
                  <span className="text-[10px] font-bold text-red-900/50 uppercase tracking-widest block mb-4">Economic impact</span>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-500 font-light">
                      <strong className="text-slate-900">Speed is Survival:</strong> Carer shelf-life on Indeed is &lt; 24 hours.
                    </p>
                    <p className="text-sm text-slate-500 font-light">
                      <strong className="text-slate-900">Agency Markups:</strong> Each vacant role costs £150–£300 extra daily.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution: Agency Assassin */}
            <div className="lg:col-span-8">
              <div className="mb-20">
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8 leading-tight">
                  Stop paying the 40% <br/><span className="italic">"Impatience Tax"</span> to agencies.
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                  We don't sell recruitment software. We install Agency Elimination. By contacting every applicant in 60 seconds, we build your own private "Staff Bank," ensuring you hire the best talent before an agency even sees their application.
                </p>
              </div>

              {/* Technical Breakdown: The Agency Assassin */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                {[
                  { 
                    title: "The Indeed 'Magnet'", 
                    detail: "Real-time sync with Indeed and LinkedIn. The second a 'Carer' applies, the engine intercepts the data instantly." 
                  },
                  { 
                    title: "The 'Chloe' Vetting Call", 
                    detail: "Chloe (AI Recruiter) calls applicants in 2 minutes. No more 'manager on the floor' delays or missed top-tier talent." 
                  },
                  { 
                    title: "Compliance Triage", 
                    detail: "Chloe asks the 'Dealbreaker' questions: Right to Work, NVQ levels, and weekend availability confirmed before you even see the CV." 
                  },
                  { 
                    title: "Auto-Rejection Logic", 
                    detail: "Polite, instant rejection for candidates who don't fit. Maintains reputation while keeping your inbox 100% clean." 
                  },
                  { 
                    title: "Instant Interview Booking", 
                    detail: "Qualified candidates are pushed directly into your manager's face-to-face interview schedule on the spot." 
                  },
                  { 
                    title: "Direct-Hire Velocity", 
                    detail: "By operating in seconds rather than days, you 'buy' staff for the cost of an ad rather than a £5,000 agency fee." 
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 hover:bg-stone-50 transition-colors">
                    <div className="mb-6"><GrowthNode /></div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 03 Detail Section: Staff Oracle */}
      <section className="relative overflow-hidden bg-white border-b border-stone-200">
        <div className="max-w-[1400px] mx-auto px-8 py-32">
          {/* Header */}
          <div className="mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
            <div>
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-4 block">System Component 03</span>
              <h2 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tighter">The Staff <br/><span className="italic">Oracle.</span></h2>
            </div>
            <p className="max-w-md text-slate-500 font-light leading-relaxed">
              A private, automated support layer that protects your workforce stability and prevents the manager-level bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            {/* The Current State: The Support Vacuum */}
            <div className="lg:col-span-4 space-y-12">
              <div className="bg-stone-50 border border-stone-200 p-8 rounded-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 bg-stone-300 rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 italic">Current State: The Support Vacuum</span>
                </div>
                
                <h3 className="text-xl font-serif text-slate-900 mb-6">Manager-Dependent Friction</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "The Manual", text: "200-page paper handbooks provided at induction but never referenced again." },
                    { label: "The Interruption", text: "Carers leave the floor to find a manager for routine policy FAQs, wasting 20 mins." },
                    { label: "The Silent Exit", text: "Stressed staff don't complain; they ghost or resign when it's already too late." }
                  ].map((item, i) => (
                    <div key={i} className="border-b border-stone-200 pb-4 last:border-0">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400 block mb-1">{item.label}</span>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-stone-200">
                  <span className="text-[10px] font-bold text-red-900/50 uppercase tracking-widest block mb-4">The Churn Cost</span>
                  <p className="text-sm text-slate-400 italic font-light">
                    "Losing a single experienced carer costs £6,000. For a mid-sized home, turnover at 30% creates a silent £90,000 annual loss."
                  </p>
                </div>
              </div>
            </div>

            {/* The Solution: Operational Peace */}
            <div className="lg:col-span-8">
              <div className="mb-20">
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8 leading-tight">
                  Protect your <span className="italic">Managers</span> from the 40% <br/>"Repetitive FAQ" tax.
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
                  We don't sell staff chatbots. We install Instant Support Infrastructure. The "Oracle" lives on every carer's phone, providing safe, instant policy answers 24/7 and acting as an Early Warning System for burnout.
                </p>
              </div>

              {/* Technical Breakdown: The Staff Oracle */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                {[
                  { 
                    title: "Digital Knowledge Core", 
                    detail: "The 200-page handbook, CQC policies, and SOPs are indexed into a high-precision vector database for instant recall." 
                  },
                  { 
                    title: "WhatsApp 'Oracle' Interface", 
                    detail: "Carers text the system directly for help with reporting, maintenance, or procedures without leaving the floor." 
                  },
                  { 
                    title: "3s Compliant Answers", 
                    detail: "Instant, safe responses pulled from the 2026 Manual, complete with medical emergency disclaimers and nurse-alerts." 
                  },
                  { 
                    title: "Manager Escalation Logic", 
                    detail: "If the Oracle doesn't know, it pings the manager directly to update the core, turning one question into a system-wide upgrade." 
                  },
                  { 
                    title: "Moral Sentiment Tracking", 
                    detail: "The system identifies clusters of questions (e.g., 'payroll' or 'exhaustion') and alerts owners to potential morale issues." 
                  },
                  { 
                    title: "Retention Infrastructure", 
                    detail: "Eliminates the 'First 90-Day Friction.' Staff feel supported and capable from day one, reducing silent churn significantly." 
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 hover:bg-stone-50 transition-colors">
                    <div className="mb-6"><GrowthNode /></div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Technical Definition / Closing */}
      <section className="bg-slate-900 text-white py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center">Built for Stability.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-slate-500 mb-6">Structural Integrity</h4>
              <p className="text-slate-400 font-light leading-relaxed">
                Unlike marketing funnels that leak, Effito is built with closed-loop logic. Every input (an enquiry, an applicant, a staff query) has a predefined, automated outcome path.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-slate-500 mb-6">Bespoke Tailoring</h4>
              <p className="text-slate-400 font-light leading-relaxed">
                We don't use templates. We map your home's unique pricing, room availability, and care philosophy into the system's logic core.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
