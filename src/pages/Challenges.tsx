import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Challenges: React.FC = () => {
  const economicImpact = [
    {
      category: "Lead Response Failure",
      annualCost: "£75,000 - £150,000",
      breakdown: [
        { item: "Average private pay fee per resident", value: "£1,500/week" },
        { item: "Annual value per resident", value: "£78,000" },
        { item: "Leads lost to 4+ hour response delays", value: "60-85%" },
        { item: "Potential residents lost annually (10 bed home)", value: "1-2" }
      ],
      reality: "Every enquiry you don't capture within the first hour is statistically going to a competitor. In a market where families contact 5-7 homes simultaneously, speed isn't a luxury—it's survival."
    },
    {
      category: "Agency Dependency Spiral",
      annualCost: "£180,000 - £300,000",
      breakdown: [
        { item: "Direct hire carer annual cost", value: "£28,000" },
        { item: "Agency carer annual cost (same role)", value: "£42,000" },
        { item: "Premium paid per agency carer", value: "£14,000/year" },
        { item: "Typical agency usage (40 bed home)", value: "10-15 FTE" }
      ],
      reality: "Most homes are trapped in a reactive hiring cycle: a position opens, you post on Indeed, wait 3-5 days to review CVs, schedule interviews over 2 weeks, and lose the best candidates to faster competitors. Meanwhile, you're paying 40-50% markups to agencies to cover the gap."
    },
    {
      category: "Administrative Time Drain",
      annualCost: "£45,000 - £65,000",
      breakdown: [
        { item: "Manager hourly rate", value: "£28-35/hour" },
        { item: "Hours spent on manual enquiry logging/week", value: "8-12 hours" },
        { item: "Hours spent on recruitment admin/week", value: "10-15 hours" },
        { item: "Hours spent answering staff policy questions/week", value: "5-8 hours" }
      ],
      reality: "Your most expensive staff—managers and deputy managers—are spending 25-30 hours per week on administrative tasks that could be automated. That's 30% of their salary going to data entry, phone tag, and answering the same questions repeatedly instead of clinical leadership and quality improvement."
    },
    {
      category: "Staff Turnover Cycle",
      annualCost: "£90,000 - £150,000",
      breakdown: [
        { item: "Cost to replace one carer (recruitment + training)", value: "£6,000" },
        { item: "Industry average turnover rate", value: "28-35%" },
        { item: "Staff lost annually (40 bed home, 60 staff)", value: "15-20" },
        { item: "Hidden costs: agency cover during vacancy", value: "£3,000-5,000 per vacancy" }
      ],
      reality: "High turnover isn't just about recruitment costs. Every time a carer leaves, you lose institutional knowledge, continuity of care suffers, residents notice, and remaining staff carry extra burden leading to burnout. It's a compounding cycle that most homes can't break without systematic intervention."
    }
  ];

  const systemicProblems = [
    {
      problem: "The Response Gap",
      what: "Manual inquiry handling means families wait 4-24 hours for a callback",
      why: "Managers are on the floor, in meetings, or off-shift when enquiries arrive",
      cost: "60-85% of high-intent leads are lost to competitors who respond faster",
      solution: "Instant automated triage with AI voice engagement within 30 seconds of enquiry"
    },
    {
      problem: "Recruitment Velocity Failure",
      what: "CVs sit in inboxes for 3-5 days before first contact",
      why: "Manual screening is time-intensive and gets deprioritized during clinical crises",
      cost: "Best candidates accept other offers; you're left with bottom-tier applicants or agency reliance",
      solution: "Instant applicant engagement with automated compliance screening and interview booking"
    },
    {
      problem: "The Manager Bottleneck",
      what: "All institutional knowledge lives in managers' heads; staff interrupt constantly for policy questions",
      why: "200-page handbooks provided at induction are never referenced again",
      cost: "20-30 hours/week of manager interruptions; new staff feel unsupported and leave within 90 days",
      solution: "Digital knowledge oracle accessible 24/7 via WhatsApp for instant policy guidance"
    },
    {
      problem: "Capacity Volatility",
      what: "Occupancy fluctuates 10-15% month-to-month creating revenue instability",
      why: "No systematic pipeline; you're reactive to move-outs rather than proactive on intake",
      cost: "One empty bed for one month = £6,000-8,000 lost revenue that never comes back",
      solution: "Continuous intake pressure system maintaining 95-98% occupancy stability"
    },
    {
      problem: "Information Fragmentation",
      what: "Enquiry data lives in emails, texts, voicemails, and manager notebooks",
      why: "No centralized system; tracking is manual and inconsistent",
      cost: "Follow-ups are missed, tours aren't booked, families slip through cracks unknowingly",
      solution: "Centralized CRM with full conversation transcripts and automatic nurture sequences"
    },
    {
      problem: "Compliance Burden",
      what: "DBS checks, Right to Work verification, reference chasing takes 2-3 weeks per hire",
      why: "Manual email tag with candidates and agencies; no automation",
      cost: "Positions stay vacant longer; you pay agency premiums while waiting for clearances",
      solution: "Automated compliance workflow with candidate self-service portal and proactive chase-up"
    }
  ];

  const hiddenCosts = [
    {
      title: "The Missed Tour Cascade",
      scenario: "A family calls at 6 PM. Your manager is off-shift. They leave a voicemail. You call back the next afternoon.",
      impact: "By the time you call back, they've already toured two other homes and are emotionally leaning toward one. Your tour is now a 'backup option' at best.",
      realCost: "You don't lose one resident—you lose the emotional first-mover advantage. Conversion rate drops from 40% to 8%.",
      annualizedImpact: "If this happens to 20% of your enquiries (realistic for manual systems), you're losing 3-4 residents per year = £234,000-312,000."
    },
    {
      title: "The Agency Creep",
      scenario: "You post a carer position on Indeed. 15 people apply. By the time you review CVs 4 days later, 10 have accepted other jobs. You interview the remaining 5. None are suitable.",
      impact: "The position stays vacant another 2 weeks. You post again. Same cycle. Meanwhile, you're paying an agency carer £42/hour (vs. £16/hour direct) to cover the shift.",
      realCost: "That one vacant position, filled by agency for 6 weeks = £10,920 in markup premiums. Multiply by 3-4 open positions per year.",
      annualizedImpact: "£32,760-43,680 paid to agencies because your recruitment response speed is too slow."
    },
    {
      title: "The Manager Burnout Tax",
      scenario: "Your home manager spends 30 hours per week on admin: logging enquiries, scheduling tours, answering staff questions about sick pay, screening CVs, booking interviews.",
      impact: "They have 10 hours left for clinical leadership, team development, CQC prep, and culture-building. Quality initiatives stall. Team morale drops. Compliance becomes reactive.",
      realCost: "You're paying a £50,000 manager to do £25,000 worth of administrative work that could be automated.",
      annualizedImpact: "£25,000 in misallocated leadership salary + intangible costs of lower care standards and missed CQC opportunities."
    },
    {
      title: "The Silent Resignation Wave",
      scenario: "A new carer joins. They're given a 200-page handbook at induction. Week 2: they can't remember the sick leave policy. They interrupt the manager. Manager is busy. They feel unsupported.",
      impact: "Week 8: they're frustrated, stressed, considering leaving. Week 12: they hand in notice. You never knew there was a problem until it was too late.",
      realCost: "30% of new hires leave within 90 days in homes without systematic support infrastructure. Each replacement costs £6,000.",
      annualizedImpact: "15 hires/year × 30% early turnover × £6,000 = £27,000 lost to preventable early-stage churn."
    }
  ];

  const realityCheck = [
    {
      myth: "We respond to all our enquiries within 24 hours",
      reality: "80% of families make their decision within the first 4 hours. 'Within 24 hours' means you're 20 hours too late.",
      data: "Care homes with sub-1-hour response times convert at 38-42%. Homes with 4+ hour response times convert at 6-12%."
    },
    {
      myth: "We only use agencies temporarily during busy periods",
      reality: "Most homes have been 'temporarily' using agencies for 2-3 years because their recruitment pipeline never catches up.",
      data: "Average agency usage in UK care homes: 18% of total staff hours. At £42/hour vs £16/hour, that's a permanent 40% labor cost premium."
    },
    {
      myth: "Our staff know where to find policy information",
      reality: "Your staff interrupt managers 15-20 times per week with questions that are answered in the handbook they never open.",
      data: "Homes with digital knowledge systems see 75% reduction in manager interruptions and 40% improvement in 90-day retention."
    },
    {
      myth: "We're at 85% occupancy so we're doing fine",
      reality: "85% occupancy means 15% of your revenue potential is gone forever. That's 6 empty beds in a 40-bed home = £468,000/year in lost fees.",
      data: "The difference between 85% and 97% occupancy in a 40-bed home is £748,800 in annual revenue. That's not a rounding error—it's a luxury car every year."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Care Home Challenges | The Cost of Manual Operations</title>
        <meta name="description" content="Understand the hidden costs of manual inquiry handling, reactive recruitment, and staff overload — and how Effito eliminates operational chaos." />
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">
        {/* Hero */}
        <section className="px-6 md:px-8 py-16 md:py-32 max-w-[1400px] mx-auto border-b border-stone-200">
          <div className="max-w-4xl">
            <span className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-stone-400 mb-6 md:mb-8 block">Industry Diagnosis</span>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 md:mb-12 tracking-tighter leading-[1.1] md:leading-[0.9]">
              The Silent Tax of <br className="hidden md:block" />
              <span className="italic">Manual Operations.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl">
              Most care homes are losing £300,000-600,000 annually to operational inefficiencies they don't even measure. Not from poor care. Not from bad management. From systems built for a market that no longer exists.
            </p>
          </div>
        </section>

        {/* Economic Impact Breakdown */}
        <section className="py-20 md:py-32 px-6 md:px-8 bg-white border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
                The Real Cost of <span className="italic">Reactive Infrastructure.</span>
              </h2>
              <p className="text-slate-500 max-w-2xl font-light leading-relaxed">
                These aren't projections. These are the measured, quantifiable costs that show up in your P&L every month—whether you're tracking them or not.
              </p>
            </div>

            <div className="space-y-16 md:space-y-24">
              {economicImpact.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
                >
                  <div className="lg:col-span-4">
                    <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">{item.category}</h3>
                    <div className="text-3xl md:text-4xl font-serif text-red-900 mb-6">{item.annualCost}</div>
                    <p className="text-sm text-slate-500 font-light leading-relaxed italic border-l-2 border-stone-200 pl-4">
                      {item.reality}
                    </p>
                  </div>
                  <div className="lg:col-span-8 bg-stone-50 p-6 md:p-8 border border-stone-200">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-6">Economic Breakdown</h4>
                    <div className="space-y-4">
                      {item.breakdown.map((line, j) => (
                        <div key={j} className="flex justify-between items-start border-b border-stone-200 pb-3 last:border-0">
                          <span className="text-sm text-slate-600 font-light">{line.item}</span>
                          <span className="text-sm text-slate-900 font-semibold font-mono">{line.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Systemic Problems Framework */}
        <section className="py-20 md:py-32 px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
              Six Structural <span className="italic">Failure Points.</span>
            </h2>
            <p className="text-slate-500 max-w-2xl font-light leading-relaxed">
              These problems compound. Fixing one in isolation doesn't work. You need systematic infrastructure replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
            {systemicProblems.map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-10 hover:bg-stone-50 transition-colors">
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <h3 className="text-lg md:text-xl font-serif text-slate-900">{item.problem}</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400 block mb-1">What Happens</span>
                    <p className="text-slate-600 font-light">{item.what}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400 block mb-1">Why It Happens</span>
                    <p className="text-slate-600 font-light">{item.why}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-red-900/60 block mb-1">Annual Cost</span>
                    <p className="text-slate-900 font-medium">{item.cost}</p>
                  </div>
                  <div className="pt-4 border-t border-stone-100">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-900/60 block mb-1">Infrastructure Fix</span>
                    <p className="text-slate-900 font-light text-xs">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden Costs Deep Dive */}
        <section className="py-20 md:py-32 px-6 md:px-8 bg-slate-900 text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">
                The Costs You <span className="italic opacity-60">Don't Track.</span>
              </h2>
              <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
                These scenarios happen every week. You don't see them because they're invisible in your current systems. But they're costing you more than your entire marketing budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {hiddenCosts.map((item, i) => (
                <div key={i} className="bg-slate-800 p-8 md:p-10 border border-slate-700">
                  <h3 className="text-xl md:text-2xl font-serif mb-6">{item.title}</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 block mb-2">The Scenario</span>
                      <p className="text-slate-300 font-light leading-relaxed">{item.scenario}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 block mb-2">The Impact</span>
                      <p className="text-slate-300 font-light leading-relaxed">{item.impact}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 block mb-2">The Real Cost</span>
                      <p className="text-white font-medium">{item.realCost}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-700">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-red-400 block mb-2">Annualized Impact</span>
                      <p className="text-red-300 font-semibold text-lg">{item.annualizedImpact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reality Check */}
        <section className="py-20 md:py-32 px-6 md:px-8 bg-white border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
                What You Tell Yourself vs. <span className="italic">What's Actually True.</span>
              </h2>
            </div>

            <div className="space-y-8">
              {realityCheck.map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8 bg-stone-50 border border-stone-200">
                  <div className="md:col-span-5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400 block mb-2">The Comfortable Narrative</span>
                    <p className="text-slate-900 font-medium italic">"{item.myth}"</p>
                  </div>
                  <div className="md:col-span-7">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-red-900/60 block mb-2">The Uncomfortable Reality</span>
                    <p className="text-slate-900 font-light mb-4">{item.reality}</p>
                    <div className="bg-white p-4 border-l-2 border-slate-900">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-900 block mb-1">Industry Data</span>
                      <p className="text-xs text-slate-600 font-mono">{item.data}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 md:py-40 px-6 md:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tight">
            These aren't unsolvable problems. <br className="hidden md:block" />
            They're <span className="italic">infrastructure problems.</span>
          </h2>
          <p className="text-lg text-slate-500 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Every challenge outlined here has a systematic solution. Effito replaces manual processes with engineered infrastructure that works 24/7, captures every opportunity, and eliminates the hidden taxes draining your profitability.
          </p>
          <a 
            href="/infrastructure" 
            className="inline-block bg-slate-900 text-white px-12 py-6 text-[12px] uppercase tracking-[0.4em] font-bold shadow-2xl hover:bg-slate-800 transition-colors"
          >
            See The Infrastructure
          </a>
        </section>
      </div>
    </>
  );
};

export default Challenges;
