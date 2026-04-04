import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const relatedArticles = [
  {
    slug: 'care-home-automation-guide-2025',
    category: 'Operations',
    title: 'What Care Home Automation Actually Looks Like in 2025',
    readTime: '12 min read',
    date: 'February 2025',
  },
  {
    slug: 'staff-retention-care-homes-2025',
    category: 'Retention',
    title: 'Why Your Best Care Staff Are Leaving — And the Infrastructure to Keep Them',
    readTime: '7 min read',
    date: 'January 2025',
  },
  {
    slug: 'operational-admin-time-care-home-directors',
    category: 'Operations',
    title: '30 Hours a Week: The Hidden Admin Tax on Care Home Directors',
    readTime: '5 min read',
    date: 'November 2024',
  },
];

const CQCComplianceAutomation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Your CQC Rating Depends on Something Most Owners Never Think About | Effito Blog</title>
        <meta
          name="description"
          content="CQC inspectors do not just assess your care standards. They assess whether your staff actually know your policies. Here is the compliance gap most homes do not realise they have — and how to close it."
        />
        <meta
          name="keywords"
          content="CQC compliance care home, CQC inspection preparation, care home policies staff access, care home compliance software, CQC rating care home UK, care home SOPs staff, residential care compliance"
        />
        <link rel="canonical" href="https://www.effito.com/blog/cqc-compliance-automation-staff-policies" />
        <meta property="og:title" content="Your CQC Rating Depends on Something Most Owners Never Think About" />
        <meta property="og:description" content="CQC inspectors do not just assess your care standards. They assess whether your staff actually know your policies. Here is the gap most homes do not realise they have." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.effito.com/blog/cqc-compliance-automation-staff-policies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your CQC Rating Depends on Something Most Owners Never Think About" />
        <meta name="twitter:description" content="CQC inspectors assess whether your staff know your policies. Here is the compliance gap most homes do not realise they have." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Your CQC Rating Depends on Something Most Owners Never Think About",
            "description": "CQC inspectors do not just assess your care standards. They assess whether your staff actually know your policies. Here is the compliance gap most homes do not realise they have.",
            "datePublished": "2025-02-15",
            "dateModified": "2025-02-15",
            "author": {
              "@type": "Organization",
              "name": "Effito",
              "url": "https://www.effito.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Effito",
              "url": "https://www.effito.com"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.effito.com/blog/cqc-compliance-automation-staff-policies"
            },
            "keywords": "CQC compliance care home, care home policies, CQC inspection, residential care compliance UK",
            "articleSection": "Compliance"
          }
        `}</script>
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">

        {/* ── Article Header ── */}
        <section className="px-6 md:px-8 pt-14 md:pt-20 pb-0 max-w-[1400px] mx-auto">

          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-12 md:mb-16"
            aria-label="Breadcrumb"
          >
            <Link to="/blog" className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-400 hover:text-slate-900 transition-colors">
              Blog
            </Link>
            <span className="text-stone-300 text-[10px]">/</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-300">Compliance</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-stone-200 pb-12 md:pb-20">

            <div className="lg:col-span-8 lg:pr-16 lg:border-r lg:border-stone-200">

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-sm">
                  Compliance
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.05] mb-8"
              >
                Your CQC Rating Depends on Something Most Owners Never Think About
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl"
              >
                You have the policies. You have the handbooks. You spent hours writing them. But if your staff cannot find the right one at the right moment, CQC does not care that it exists. Here is what inspectors are actually looking for — and what most homes get wrong.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 lg:pl-16 flex flex-col justify-between pt-10 lg:pt-0"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Published</span>
                  <span className="text-sm font-light text-slate-600">February 2025</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Reading Time</span>
                  <span className="text-sm font-light text-slate-600">5 minutes</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Written by</span>
                  <span className="text-sm font-light text-slate-600">Effito Editorial</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Topic</span>
                  <span className="text-sm font-light text-slate-600">CQC Compliance & Policy Access</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-200">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-slate-900 text-white px-6 py-4 text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-slate-800 transition-all"
                >
                  Strengthen Your Compliance
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Article Body ── */}
        <section className="px-6 md:px-8 py-14 md:py-20 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-8 lg:pr-16 lg:border-r lg:border-stone-200"
            >
              <div>

                {/* ── Opening ── */}
                <p className="text-lg md:text-xl text-slate-700 leading-[1.8] font-light mb-8">
                  Picture the scene. A CQC inspector arrives unannounced. Your manager is composed, the home looks good, care records are in order. Things are going well. Then the inspector pulls aside one of your care assistants — someone who started eight weeks ago — and asks them a straightforward question about your safeguarding escalation procedure.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The care assistant knows they were trained on it. They definitely read something about it at some point. The handbook is around somewhere. They think it might be in the blue folder in the office. Or maybe the shared drive. They are not sure which version is the current one.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This is not a horror story. This is Tuesday.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  CQC does not just inspect your care standards. They inspect your systems. And one of the things they look for specifically is whether your staff can demonstrate working knowledge of your policies and procedures — not in theory, but in practice, in real time, when asked. If the answer is a hesitant "I think it's in the blue folder," that is a problem. A documented, written-down, inspection-notable problem.
                </p>

                {/* Pull quote */}
                <div className="border-l-4 border-rose-500 pl-8 py-2 mb-14">
                  <p className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight italic leading-[1.3]">
                    "CQC does not care that your handbook exists. They care whether your staff can actually use it."
                  </p>
                </div>

                {/* ── Section 2 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Blue Folder Problem
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Most care homes have a version of the blue folder. Sometimes it is an actual folder. Sometimes it is a shared drive that nobody can navigate. Sometimes it is a stack of laminated sheets near the nurses' station that were last updated in 2021 and have a coffee stain on page three.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The policies themselves are usually fine. Care home owners invest real time and money into getting them right. They are reviewed, updated, signed off. The problem is the last mile — getting that information from the document into the head of a care assistant at 10pm on a night shift when something uncertain is happening and the manager is not answering their phone.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The gap between having a policy and staff actually being able to use it is enormous. And almost nobody talks about it.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Here is why it matters so much. CQC's well-led and safe domains both hinge on this. Inspectors ask staff questions. Real questions, to real people, without warning. If staff consistently struggle to answer, or answer inconsistently, it signals to inspectors that your governance is superficial. Policies exist on paper but do not live in the organisation. That is a findings comment you do not want to be reading in your inspection report.
                </p>

                {/* ── Section 3: The night shift problem ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The 3am Problem Nobody Has Solved
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Care homes operate around the clock. Managers, for the most part, do not.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  That leaves a fifteen-hour window every day — evenings, nights, early mornings — when your staff are making decisions without easy access to the guidance they need. And in care, the decisions that happen at 3am are often the ones that matter most. An unfamiliar medication interaction. An escalating behaviour. A resident in distress. A situation that does not feel right but is hard to describe.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  There are three things a night staff member can do when they are unsure. They can call the manager at home, which erodes trust and goodwill fast. They can guess, which is a clinical risk. Or they can do nothing and hope the morning shift deals with it, which is also a risk.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  None of those options are good. And all three are happening in care homes across the country, every single night, because there is no fourth option. There is no system that says: here is the exact section of your policy that applies to this situation, right now, in plain language, at 3am.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Until recently, that was just an accepted limitation of the sector. Turns out it does not have to be.
                </p>

                {/* ── Section 4: What is now possible ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What Instant Policy Access Actually Looks Like
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Imagine your entire set of policies, SOPs, care handbooks, and operational documents are instantly searchable by any member of staff, at any time, through a message on their phone. No log-ins to remember. No shared drive to navigate. No asking someone where the right document is.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  A staff member types a question in plain English. "What do I do if a resident refuses their medication?" The system searches your approved documents, finds the relevant section, and responds with the answer. In seconds. At midnight. On Christmas Day. Exactly the same as it does at 9am on a Monday.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This is not a Google search of the entire internet. It only pulls from your documents. Your policies. Your procedures. The answer a staff member receives is not generic guidance from somewhere online. It is the specific, approved, up-to-date policy from your own home. And because every question and every answer is logged automatically, you have a clear record of your staff actively engaging with your documentation.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  That log is not just useful internally. It is CQC gold.
                </p>

                {/* Stat callout */}
                <div className="bg-slate-900 p-8 md:p-10 mb-14">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { stat: '14.4%', label: 'annual turnover for care staff who feel supported and informed at work' },
                      { stat: '42.2%', label: 'annual turnover for those who do not — nearly three times higher' },
                    ].map((item, i) => (
                      <div key={i} className={`${i > 0 ? 'md:border-l md:border-slate-800 md:pl-8' : ''}`}>
                        <div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2">{item.stat}</div>
                        <div className="text-sm text-slate-400 font-light leading-relaxed">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs font-light mt-6 pt-6 border-t border-slate-800">Source: Skills for Care State of the Workforce 2025</p>
                </div>

                {/* ── Section 5: The CQC angle ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  Why This Is an Occupancy Issue, Not Just a Compliance One
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Here is something a lot of owners have not fully joined up. Your CQC rating is not just a compliance matter. It directly affects your revenue.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Homes rated Good or Outstanding consistently attract a higher proportion of private self-funders. Private self-funders pay significantly more per week than local authority placements. Families choosing a care home privately do their research. They look at CQC ratings. A Requires Improvement rating does not just create operational headaches — it steers the highest-value residents towards your competitors.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  So every piece of infrastructure that strengthens your inspection performance has a direct commercial consequence. It is not just about ticking boxes. It is about being the home that families trust enough to place their most important person in.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  A care assistant confidently explaining your safeguarding procedure during an unannounced inspection is not a small thing. It is the kind of evidence that moves a rating. And a rating that moves upward is worth a very large amount of money over time.
                </p>

                {/* Pull quote 2 */}
                <div className="border-l-4 border-slate-900 pl-8 py-2 mb-14">
                  <p className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic leading-[1.35]">
                    "A Requires Improvement rating does not just create headaches. It steers the highest-value residents to your competitors."
                  </p>
                </div>

                {/* ── Section 6: The emergency angle ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Emergency Safety Net Nobody Talks About
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  There is one more thing worth understanding here, and it genuinely surprised us when we first thought through the implications.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  When a staff member sends a message to a policy system at 2am about a safeguarding concern, something important can happen automatically. The system detects the nature of the language. It recognises that this is not a question about medication storage. It answers the staff member and simultaneously alerts the manager directly — telling them what was asked, when, and by whom — so a human can respond if the situation requires it.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This means critical situations do not fall through the cracks because a staff member was unsure whether to escalate. The escalation happens automatically, the moment the right words appear.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Think about what that means for safeguarding, for medication incidents, for any situation where the difference between early intervention and a serious event is whether someone knew to raise it. The system creates a real-time safety net that does not depend on a staff member's confidence, experience, or willingness to knock on the manager's door.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  And every one of those interactions is logged. Timestamped. Attached to a contact. Ready to evidence at inspection.
                </p>

                {/* Breakdown box */}
                <div className="space-y-0 border border-stone-200 mb-14">
                  <div className="px-4 py-3 bg-stone-50 border-b border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">What this kind of system actually gives you</span>
                  </div>
                  {[
                    {
                      num: '01',
                      title: 'Staff can find the right answer instantly',
                      body: 'Any question, any time, from your own approved documents. No blue folders. No shared drives. No waiting until morning.',
                    },
                    {
                      num: '02',
                      title: 'Every interaction is logged and timestamped',
                      body: 'A complete, auditable record of staff engaging with your policies. Exactly what CQC looks for when assessing whether your governance is real.',
                    },
                    {
                      num: '03',
                      title: 'New starters get up to speed faster',
                      body: 'The first few weeks are the highest risk period for early departures. A system that answers their questions from day one builds confidence quickly.',
                    },
                    {
                      num: '04',
                      title: 'Managers get alerted to serious situations automatically',
                      body: 'Trigger language — safeguarding, medication errors, incidents — flags the manager in real time. No situation has to wait until morning.',
                    },
                    {
                      num: '05',
                      title: 'Answers only come from your documents',
                      body: 'Not the internet. Not generic guidance. Your home\'s own policies, so staff are always working from the right version of the truth.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 border-b border-stone-200 last:border-0 group hover:bg-stone-50 transition-colors">
                      <span className="text-[10px] font-mono text-stone-300 shrink-0 mt-1 group-hover:text-slate-400 transition-colors">{item.num}</span>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 font-light leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Closing ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Blue Folder Deserves Better
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  You put real effort into your policies. The care you take writing them reflects the standards you hold the home to. The frustrating thing is that all of that effort can be undermined in about thirty seconds by a care assistant who cannot find the right document under pressure.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  That is not the care assistant's fault. It is a systems failure. And it is completely fixable.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The homes that have solved this problem are not spending hours briefing staff before every inspection or hoping nobody gets asked a hard question. Their staff know where to find the answers because finding answers is genuinely easy. And that confidence — that quiet, everyday competence — is exactly what CQC is looking for when they walk through the door.
                </p>

                {/* Closing CTA box */}
                <div className="bg-slate-900 p-8 md:p-12 mt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-5">Next Step</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-5">
                    Give your staff the answers they need. Whenever they need them.
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-lg">
                    We install the infrastructure that makes your policies genuinely accessible — to every member of staff, at any hour, from their phone. Book a call and we will show you exactly how it works.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-[#FAF9F6] text-slate-900 px-8 py-4 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all"
                  >
                    Book a Strategy Call
                  </Link>
                </div>

              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden lg:block lg:col-span-4 lg:pl-16"
            >
              <div className="sticky top-28 space-y-10">

                <div className="border border-stone-200 p-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">About Effito</span>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                    Effito installs operational infrastructure for UK residential care homes — including systems that give staff instant access to your policies, 24 hours a day, from their phone.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center border border-slate-900 text-slate-900 px-5 py-3.5 text-[10px] uppercase tracking-[0.35em] font-bold hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Book Strategy Call
                  </Link>
                </div>

                <div className="border border-stone-200 p-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">Key Takeaways</span>
                  <ul className="space-y-4">
                    {[
                      'CQC assess whether staff can demonstrate policy knowledge in real time, not just whether documents exist',
                      'Care homes operate 24/7 but most policy access depends on someone being in the office',
                      'Staff who feel supported leave at 14.4% per year — those who do not leave at 42.2%',
                      'A logged record of staff engaging with your policies is evidence CQC actively looks for',
                      'Better CQC ratings directly attract more private self-funders — higher revenue per bed',
                      'Trigger detection means critical situations are flagged to managers automatically, at any hour',
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 font-light leading-relaxed">
                        <span className="text-rose-400 font-bold shrink-0 mt-0.5">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">Related Reading</span>
                  <div className="space-y-0">
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.slug}
                        to={`/blog/${article.slug}`}
                        className="group flex gap-4 py-5 border-b border-stone-200 last:border-0 hover:bg-stone-50 -mx-2 px-2 transition-colors"
                      >
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-rose-400 shrink-0 mt-1">
                          {article.category}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-sm font-serif text-slate-800 leading-snug group-hover:text-slate-500 transition-colors">
                            {article.title}
                          </h4>
                          <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-1.5 block">{article.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </motion.aside>

          </div>
        </section>

        {/* ── Back to Blog ── */}
        <section className="px-6 md:px-8 py-16 border-t border-stone-200 max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              to="/blog"
              className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-stone-400 hover:text-slate-900 transition-colors"
            >
              <span>←</span> Back to All Articles
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-slate-900 text-white px-8 py-4 text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-slate-800 transition-all"
            >
              Book a Strategy Call
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default CQCComplianceAutomation;
