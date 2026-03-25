import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Challenges: React.FC = () => {
  const economicImpact = [
    {
      category: "Lead Response Failure",
      annualCost: "£75,000 to £150,000",
      breakdown: [
        { item: "Average private pay fee per resident", value: "£1,500/week" },
        { item: "Annual value per resident", value: "£78,000" },
        { item: "Leads lost to delayed response (4+ hours)", value: "60% to 85%" },
        { item: "Potential residents lost annually (10 bed home)", value: "1 to 2" }
      ],
      reality: "Every enquiry you fail to capture within the first hour is statistically going to a competitor. In a market where families contact five to seven homes simultaneously, speed is not a luxury. It is survival."
    },
    {
      category: "Agency Dependency Spiral",
      annualCost: "£180,000 to £300,000",
      breakdown: [
        { item: "Direct hire carer annual cost", value: "£28,000" },
        { item: "Agency carer annual cost (same role)", value: "£42,000" },
        { item: "Premium paid per agency carer", value: "£14,000/year" },
        { item: "Typical agency usage (40 bed home)", value: "10 to 15 FTE" }
      ],
      reality: "Most homes are trapped in a reactive hiring cycle. A position opens, you post on Indeed, wait three to five days to review CVs, schedule interviews over two weeks, and lose the best candidates to faster competitors. Meanwhile, you are paying 40% to 50% markups to agencies to cover the gap."
    },
    {
      category: "Administrative Time Drain",
      annualCost: "£45,000 to £65,000",
      breakdown: [
        { item: "Manager hourly rate", value: "£28 to £35/hour" },
        { item: "Hours spent on manual enquiry logging per week", value: "8 to 12 hours" },
        { item: "Hours spent on recruitment admin per week", value: "10 to 15 hours" },
        { item: "Hours spent answering staff policy questions per week", value: "5 to 8 hours" }
      ],
      reality: "Your most expensive staff (managers and deputy managers) are spending 25 to 30 hours per week on administrative tasks that could be automated. That is 30% of their salary going to data entry, phone tag, and answering the same questions repeatedly instead of clinical leadership and quality improvement."
    },
    {
      category: "Staff Turnover Cycle",
      annualCost: "£90,000 to £150,000",
      breakdown: [
        { item: "Cost to replace one carer (recruitment and training)", value: "£6,000" },
        { item: "Industry average turnover rate", value: "28% to 35%" },
        { item: "Staff lost annually (40 bed home, 60 staff)", value: "15 to 20" },
        { item: "Hidden costs: agency cover during vacancy", value: "£3,000 to £5,000 per vacancy" }
      ],
      reality: "High turnover is not just about recruitment costs. Every time a carer leaves, you lose institutional knowledge, continuity of care suffers, residents notice, and remaining staff carry extra burden leading to burnout. It is a compounding cycle that most homes cannot break without systematic intervention."
    }
  ];

  const systemicProblems = [
    {
      problem: "The Response Gap",
      what: "Manual inquiry handling means families wait 4 to 24 hours for a callback",
      why: "Managers are on the floor, in meetings, or off shift when enquiries arrive",
      cost: "60% to 85% of high intent leads are lost to competitors who respond faster",
      solution: "Instant automated triage with AI voice engagement within 30 seconds of enquiry"
    },
    {
      problem: "Recruitment Velocity Failure",
      what: "CVs sit in inboxes for three to five days before first contact",
      why: "Manual screening is time intensive and gets deprioritized during clinical crises",
      cost: "Best candidates accept other offers. You are left with bottom tier applicants or agency reliance",
      solution: "Instant applicant engagement with automated compliance screening and interview booking"
    },
    {
      problem: "The Manager Bottleneck",
      what: "All institutional knowledge lives in managers' heads. Staff interrupt constantly for policy questions",
      why: "200 page handbooks provided at induction are never referenced again",
      cost: "20 to 30 hours per week of manager interruptions. New staff feel unsupported and leave within 90 days",
      solution: "Digital knowledge oracle accessible 24/7 via WhatsApp for instant policy guidance"
    },
    {
      problem: "Capacity Volatility",
      what: "Occupancy fluctuates 10% to 15% month over month creating revenue instability",
      why: "No systematic pipeline. You are reactive to move outs rather than proactive on intake",
      cost: "One empty bed for one month equals £6,000 to £8,000 lost revenue that never comes back",
      solution: "Continuous intake pressure system maintaining 95% to 98% occupancy stability"
    },
    {
      problem: "Information Fragmentation",
      what: "Enquiry data lives in emails, texts, voicemails, and manager notebooks",
      why: "No centralized system. Tracking is manual and inconsistent",
      cost: "Follow ups are missed, tours are not booked, families slip through cracks unknowingly",
      solution: "Centralized CRM with full conversation transcripts and automatic nurture sequences"
    },
    {
      problem: "Compliance Burden",
      what: "DBS checks, Right to Work verification, reference chasing takes two to three weeks per hire",
      why: "Manual email tag with candidates and agencies. No automation",
      cost: "Positions stay vacant longer. You pay agency premiums while waiting for clearances",
      solution: "Automated compliance workflow with candidate self service portal and proactive chase up"
    }
  ];

  const hiddenCosts = [
    {
      title: "The Missed Tour Cascade",
      scenario: "A family calls at 6 PM. Your manager is off shift. They leave a voicemail. You call back the next afternoon.",
      impact: "By the time you call back, they have already toured two other homes and are emotionally leaning toward one. Your tour is now a backup option at best.",
      realCost: "You do not lose one resident. You lose the emotional first mover advantage. Conversion rate drops from 40% to 8%.",
      annualizedImpact: "If this happens to 20% of your enquiries (realistic for manual systems), you are losing three to four residents per year. That is £234,000 to £312,000."
    },
    {
      title: "The Agency Creep",
      scenario: "You post a carer position on Indeed. Fifteen people apply. By the time you review CVs four days later, ten have accepted other jobs. You interview the remaining five. None are suitable.",
      impact: "The position stays vacant another two weeks. You post again. Same cycle. Meanwhile, you are paying an agency carer £42 per hour (versus £16 per hour direct) to cover the shift.",
      realCost: "That one vacant position, filled by agency for six weeks, equals £10,920 in markup premiums. Multiply by three to four open positions per year.",
      annualizedImpact: "£32,760 to £43,680 paid to agencies because your recruitment response speed is too slow."
    },
    {
      title: "The Manager Burnout Tax",
      scenario: "Your home manager spends 30 hours per week on admin: logging enquiries, scheduling tours, answering staff questions about sick pay, screening CVs, booking interviews.",
      impact: "They have ten hours left for clinical leadership, team development, CQC prep, and culture building. Quality initiatives stall. Team morale drops. Compliance becomes reactive.",
      realCost: "You are paying a £50,000 manager to do £25,000 worth of administrative work that could be automated.",
      annualizedImpact: "£25,000 in misallocated leadership salary plus intangible costs of lower care standards and missed CQC opportunities."
    },
    {
      title: "The Silent Resignation Wave",
      scenario: "A new carer joins. They receive a 200 page handbook at induction. Week two: they cannot remember the sick leave policy. They interrupt the manager. Manager is busy. They feel unsupported.",
      impact: "Week eight: they are frustrated, stressed, considering leaving. Week twelve: they hand in notice. You never knew there was a problem until it was too late.",
      realCost: "30% of new hires leave within 90 days in homes without systematic support infrastructure. Each replacement costs £6,000.",
      annualizedImpact: "Fifteen hires per year, 30% early turnover, £6,000 per replacement equals £27,000 lost to preventable early stage churn."
    }
  ];

  const realityCheck = [
    {
      myth: "We respond to all our enquiries within 24 hours",
      reality: "80% of families make their decision within the first four hours. Within 24 hours means you are 20 hours too late.",
      data: "Care homes with sub one hour response times convert at 38% to 42%. Homes with 4+ hour response times convert at 6% to 12%."
    },
    {
      myth: "We only use agencies temporarily during busy periods",
      reality: "Most homes have been temporarily using agencies for two to three years because their recruitment pipeline never catches up.",
      data: "Average agency usage in UK care homes: 18% of total staff hours. At £42 per hour versus £16 per hour, that is a permanent 40% labor cost premium."
    },
    {
      myth: "Our staff know where to find policy information",
      reality: "Your staff interrupt managers fifteen to twenty times per week with questions that are answered in the handbook they never open.",
      data: "Homes with digital knowledge systems see 75% reduction in manager interruptions and 40% improvement in 90 day retention."
    },
    {
      myth: "We are at 85% occupancy so we are doing fine",
      reality: "85% occupancy means 15% of your revenue potential is gone forever. That is six empty beds in a 40 bed home, equaling £468,000 per year in lost fees.",
      data: "The difference between 85% and 97% occupancy in a 40 bed home is £748,800 in annual revenue. That is not a rounding error. It is a luxury car every year."
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
        <section className="px-6 md:px-8 py-20 md:py-40 max-w-[1400px] mx-auto border-b border-stone-200">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-8 md:mb-12 block"
            >
              Industry Diagnosis
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-serif text-slate-900 mb-10 md:mb-16 tracking-tighter leading-[1.05] md:leading-[0.92]"
            >
              The Silent Tax of <br className="hidden md:block" />
              <span className="italic">Manual Operations.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 leading-[1.6] font-light max-w-3xl"
            >
              Most care homes are losing £300,000 to £600,000 annually to operational inefficiencies they do not even measure. Not from poor care. Not from bad management. From systems built for a market that no longer exists.
            </motion.p>
          </div>
        </section>

        {/* Economic Impact Breakdown */}
        <section className="py-24 md:py-40 px-6 md:px-8 bg-white border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20 md:mb-32">
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tight leading-tight">
                The Real Cost of <span className="italic">Reactive Infrastructure.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
                These are not projections. These are the measured, quantifiable costs that show up in your P&L every month, whether you are tracking them or not.
              </p>
            </div>

            <div className="space-y-20 md:space-y-32">
              {economicImpact.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16"
                >
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 leading-tight">{item.category}</h3>
                    <div className="text-4xl md:text-5xl font-serif text-red-900 mb-8 tracking-tight">{item.annualCost}</div>
                    <p className="text-base text-slate-500 font-light leading-[1.7] italic border-l-[3px] border-stone-300 pl-6">
                      {item.reality}
                    </p>
                  </div>
                  <div className="lg:col-span-8 bg-stone-50 p-8 md:p-12 border border-stone-200 shadow-sm">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-400 mb-8">Economic Breakdown</h4>
                    <div className="space-y-5">
                      {item.breakdown.map((line, j) => (
                        <div key={j} className="flex justify-between items-start gap-8 border-b border-stone-200 pb-4 last:border-0">
                          <span className="text-sm text-slate-600 font-light leading-relaxed">{line.item}</span>
                          <span className="text-sm text-slate-900 font-semibold font-mono whitespace-nowrap">{line.value}</span>
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
        <section className="py-24 md:py-40 px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="mb-20 md:mb-32">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tight leading-tight">
              Six Structural <span className="italic">Failure Points.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
              These problems compound. Fixing one in isolation does not work. You need systematic infrastructure replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 shadow-sm">
            {systemicProblems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-14 hover:bg-stone-50 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 leading-tight">{item.problem}</h3>
                </div>
                <div className="space-y-6 text-sm">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-2">What Happens</span>
                    <p className="text-slate-600 font-light leading-relaxed">{item.what}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-2">Why It Happens</span>
                    <p className="text-slate-600 font-light leading-relaxed">{item.why}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-red-900/60 block mb-2">Annual Cost</span>
                    <p className="text-slate-900 font-medium leading-relaxed">{item.cost}</p>
                  </div>
                  <div className="pt-5 border-t border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-emerald-900/60 block mb-2">Infrastructure Fix</span>
                    <p className="text-slate-900 font-light text-xs leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hidden Costs Deep Dive */}
        <section className="py-24 md:py-40 px-6 md:px-8 bg-slate-900 text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20 md:mb-32">
              <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight leading-tight">
                The Costs You <span className="italic opacity-60">Do Not Track.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                These scenarios happen every week. You do not see them because they are invisible in your current systems. But they are costing you more than your entire marketing budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              {hiddenCosts.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/60 p-10 md:p-12 border border-slate-700/50 shadow-xl"
                >
                  <h3 className="text-2xl md:text-3xl font-serif mb-8 leading-tight">{item.title}</h3>
                  <div className="space-y-6 text-sm">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500 block mb-3">The Scenario</span>
                      <p className="text-slate-300 font-light leading-[1.7]">{item.scenario}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500 block mb-3">The Impact</span>
                      <p className="text-slate-300 font-light leading-[1.7]">{item.impact}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500 block mb-3">The Real Cost</span>
                      <p className="text-white font-medium leading-relaxed">{item.realCost}</p>
                    </div>
                    <div className="pt-6 border-t border-slate-700/50">
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-red-400 block mb-3">Annualized Impact</span>
                      <p className="text-red-300 font-semibold text-lg">{item.annualizedImpact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reality Check */}
        <section className="py-24 md:py-40 px-6 md:px-8 bg-white border-b border-stone-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20 md:mb-32">
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tight leading-tight">
                What You Tell Yourself <br className="hidden md:block" />
                versus <span className="italic">What Is Actually True.</span>
              </h2>
            </div>

            <div className="space-y-10">
              {realityCheck.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12 bg-stone-50 border border-stone-200 shadow-sm"
                >
                  <div className="md:col-span-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-3">The Comfortable Narrative</span>
                    <p className="text-slate-900 font-medium italic text-base leading-relaxed">"{item.myth}"</p>
                  </div>
                  <div className="md:col-span-7">
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-red-900/60 block mb-3">The Uncomfortable Reality</span>
                    <p className="text-slate-900 font-light mb-6 leading-[1.7]">{item.reality}</p>
                    <div className="bg-white p-6 border-l-[3px] border-slate-900 shadow-sm">
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-900 block mb-2">Industry Data</span>
                      <p className="text-xs text-slate-600 font-mono leading-relaxed">{item.data}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-32 md:py-48 px-6 md:px-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-10 tracking-tight leading-tight">
              These are not unsolvable problems. <br className="hidden md:block" />
              They are <span className="italic">infrastructure problems.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 mb-14 font-light leading-[1.7] max-w-2xl mx-auto">
              Every challenge outlined here has a systematic solution. Effito replaces manual processes with engineered infrastructure that works 24/7, captures every opportunity, and eliminates the hidden taxes draining your profitability.
            </p>
            <motion.a 
              href="/infrastructure"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-slate-900 text-white px-14 py-7 text-[11px] uppercase tracking-[0.45em] font-bold shadow-2xl hover:bg-slate-800 transition-all duration-300"
            >
              See The Infrastructure
            </motion.a>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Challenges;
