import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const relatedArticles = [
  {
    slug: 'agency-nursing-costs-how-to-eliminate-them',
    category: 'Recruitment',
    title: 'Agency Nursing Fees Are Destroying Your Margin — Here Is How to Stop It',
    readTime: '8 min read',
    date: 'March 2025',
  },
  {
    slug: 'cqc-compliance-automation-staff-policies',
    category: 'Compliance',
    title: 'Your CQC Rating Depends on Something Most Owners Never Think About',
    readTime: '5 min read',
    date: 'February 2025',
  },
  {
    slug: 'care-home-recruitment-pipeline-build',
    category: 'Recruitment',
    title: 'Build a Recruitment Pipeline That Runs Without You',
    readTime: '10 min read',
    date: 'December 2024',
  },
];

const StaffRetention: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Why Your Best Care Staff Are Leaving and How to Keep Them | Effito Blog</title>
        <meta
          name="description"
          content="Care staff turnover in residential care averages 34% annually. The homes that have cracked retention are not paying more than everyone else. They have removed the friction that burns good people out. Here is what that looks like."
        />
        <meta
          name="keywords"
          content="care home staff retention, reduce care staff turnover, why care workers leave, care home employee retention UK, residential care staff retention, care home staffing problems, keep care staff, care worker burnout"
        />
        <link rel="canonical" href="https://www.effito.com/blog/staff-retention-care-homes-2025" />
        <meta property="og:title" content="Why Your Best Care Staff Are Leaving and How to Keep Them" />
        <meta property="og:description" content="Turnover in residential care averages 34% annually. The homes cracking retention are not paying more. They have removed the friction that burns people out." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.effito.com/blog/staff-retention-care-homes-2025" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Your Best Care Staff Are Leaving and How to Keep Them" />
        <meta name="twitter:description" content="34% annual turnover. £3,600 per replacement hire. The solution is not pay rises. Here is what actually works." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Why Your Best Care Staff Are Leaving and How to Keep Them",
            "description": "Care staff turnover in residential care averages 34% annually. The homes that have cracked retention are not paying more. They have removed the friction that burns good people out.",
            "datePublished": "2025-01-20",
            "dateModified": "2025-01-20",
            "author": {
              "@type": "Person",
              "name": "Reece Hubbard",
              "worksFor": {
                "@type": "Organization",
                "name": "Effito",
                "url": "https://www.effito.com"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Effito",
              "url": "https://www.effito.com"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.effito.com/blog/staff-retention-care-homes-2025"
            },
            "keywords": "care home staff retention, care worker turnover, residential care staffing UK, care home employee retention",
            "articleSection": "Retention"
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
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-300">Retention</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-stone-200 pb-12 md:pb-20">

            <div className="lg:col-span-8 lg:pr-16 lg:border-r lg:border-stone-200">

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-sm">
                  Retention
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.05] mb-8"
              >
                Why Your Best Care Staff Are Leaving and How to Keep Them
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl"
              >
                Turnover in residential care averages 34% a year. The homes that have cracked it are not paying their staff more than everyone else. They have removed the friction that quietly grinds good people down. Here is what that friction looks like and what happens when you fix it.
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
                  <span className="text-sm font-light text-slate-600">January 2025</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Reading Time</span>
                  <span className="text-sm font-light text-slate-600">7 minutes</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Written by</span>
                  <span className="text-sm font-light text-slate-600">Reece Hubbard</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Topic</span>
                  <span className="text-sm font-light text-slate-600">Staff Retention & Operations</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-200">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-slate-900 text-white px-6 py-4 text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-slate-800 transition-all"
                >
                  Reduce Your Turnover
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
                  There is a care assistant somewhere in the UK right now who is brilliant at their job. Residents love them. Colleagues trust them. They turn up on time, they go above and beyond, and they genuinely care about the people in their home. They are exactly the kind of person you spent months trying to hire.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  And they are filling in a resignation letter.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Not because the pay is terrible. Not because they hate the residents. Not even because of one single awful thing that happened. They are leaving because of the accumulation of a hundred small frictions that nobody ever fixed. The policy they could not find at 11pm. The manager who was too buried in admin to answer a simple question. The feeling, creeping in slowly over months, that this job asks everything of them and the organisation cannot quite hold its end of the bargain.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Good staff do not usually leave in a dramatic blaze. They drift. And by the time you notice they are gone, three more are thinking about it.
                </p>

                {/* Pull quote */}
                <div className="border-l-4 border-amber-500 pl-8 py-2 mb-14">
                  <p className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight italic leading-[1.3]">
                    "Good staff do not usually leave in a dramatic blaze. They drift. And by the time you notice they are gone, three more are thinking about it."
                  </p>
                </div>

                {/* ── Section 2 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Numbers Are Worse Than Most Owners Realise
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The average annual staff turnover rate across UK residential care homes sits at around 34%. One in three of your team will leave this year. And in the first year of employment, that figure rises to 39%. Nearly four in ten new starters will not make it to their first anniversary.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Every time someone leaves, Skills for Care puts the replacement cost at £3,600 per care worker. That covers recruitment, onboarding, and the weeks of lost productivity while someone new gets up to speed. For a 30-staff home losing a third of its team annually, that is roughly £36,000 a year spent just on replacing people. Before you factor in agency cover, manager time, or the impact on the residents who built a relationship with the person who just left.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  It is like running a bath with the plug half out. You keep pouring water in and wondering why the bath is never full.
                </p>

                {/* Stat callout */}
                <div className="bg-slate-900 p-8 md:p-10 mb-14">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { stat: '34%', label: 'average annual staff turnover across UK residential care homes' },
                      { stat: '39%', label: 'of staff with under one year of service leave before their first anniversary' },
                      { stat: '£3,600', label: 'cost of replacing a single care worker, per Skills for Care 2024' },
                    ].map((item, i) => (
                      <div key={i} className={`${i > 0 ? 'md:border-l md:border-slate-800 md:pl-8' : ''}`}>
                        <div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2">{item.stat}</div>
                        <div className="text-sm text-slate-400 font-light leading-relaxed">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs font-light mt-6 pt-6 border-t border-slate-800">Sources: Skills for Care State of the Workforce 2024/25; CQC State of Care 2024/25</p>
                </div>

                {/* ── Section 3 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Pay Rise Myth
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The instinctive response to high turnover is to reach for the salary lever. Pay people more and they will stay. It sounds logical. It is also largely wrong, or at least, deeply incomplete.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Skills for Care tracks something it calls positive employment factors. Things like feeling genuinely supported at work, knowing what is expected of you, having access to the information and guidance you need, feeling that your employer actually notices you. Staff who experience these factors leave at 14.4% annually. Staff who do not experience them leave at 42.2%.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Read those numbers again. Not 14% versus 16%. Not a marginal difference. Nearly three times the turnover rate, driven not by pay but by whether a person feels supported and informed in their job.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Most independent care homes genuinely care about their staff. The owners we speak to are not indifferent people. But caring about your team and having the systems that make them feel supported are two different things. One is a feeling. The other is infrastructure. You can have all the goodwill in the world and still fail on the infrastructure.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The pay rise solves a different problem. Raising wages reduces financial stress. It helps with attraction. But it does not fix the care assistant standing at the nurses' station at midnight trying to remember the home's medication refusal procedure with no one to ask and nowhere obvious to look. That person does not need more money. They need an answer.
                </p>

                {/* Pull quote 2 */}
                <div className="border-l-4 border-slate-900 pl-8 py-2 mb-14">
                  <p className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic leading-[1.35]">
                    "Caring about your team and having the systems that make them feel supported are two different things. One is a feeling. The other is infrastructure."
                  </p>
                </div>

                {/* ── Section 4 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What the Friction Actually Looks Like
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The friction that drives care staff out rarely arrives as one big thing. It builds up like limescale. Slowly, invisibly, until one day the pipes are blocked and you cannot work out exactly when it happened.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Here is what it looks like in practice. A new starter in their first week has a question about the handover process. They do not want to bother the manager who is clearly busy. They look for the handbook. It is a PDF buried three folders deep on a shared drive that nobody told them about. They find something, but it is the 2022 version. They are not sure if it is current. They do their best. They feel vaguely uncertain and vaguely unsupported in equal measure.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  That moment matters far more than most owners appreciate. The first few weeks in a new care job are the highest-risk period for departure. Nearly four in ten people who leave within a year do so in those early months when the job still feels unfamiliar and the support structures have not yet clicked into place. A small friction at week two can become a resignation at week eight.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Then there is the manager themselves. A survey of 222 NHS and social care managers found that 20% were spending seven to eight hours a day on administrative tasks. Nearly half said that admin burden was directly impacting the quality of care they could provide. When a manager is drowning in paperwork, they become less available to their team. Staff questions go unanswered for longer. Small issues are not caught early. People feel less seen.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The manager is not doing anything wrong. They are just stretched beyond what any one person should be expected to manage. And that stretch ripples outward to every member of the team around them.
                </p>

                {/* Breakdown box */}
                <div className="space-y-0 border border-stone-200 mb-14">
                  <div className="px-4 py-3 bg-stone-50 border-b border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">The friction points that quietly drive good staff away</span>
                  </div>
                  {[
                    {
                      num: '01',
                      title: 'Not knowing what to do and having nobody there',
                      body: 'Night shifts, weekend shifts, early mornings. Good staff do not quit because things are hard. They quit because they feel alone with the hard things.',
                    },
                    {
                      num: '02',
                      title: 'Policies that exist but cannot be found',
                      body: 'A handbook nobody can navigate is the same as no handbook. Staff who cannot find the answer default to guessing, which creates anxiety and risk in equal measure.',
                    },
                    {
                      num: '03',
                      title: 'A manager too buried to be present',
                      body: 'When the manager spends most of their time on admin, they become less accessible. The team feels that absence even if they cannot name it.',
                    },
                    {
                      num: '04',
                      title: 'A chaotic first few weeks',
                      body: 'The onboarding experience sets the tone for the entire employment. A new starter who feels lost in week one rarely becomes a five-year employee.',
                    },
                    {
                      num: '05',
                      title: 'Watching agency workers walk in and out',
                      body: 'Nothing erodes morale quite like permanent staff seeing agency workers receive premium rates for less commitment. It signals something about how the organisation values loyalty.',
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

                {/* ── Section 5 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What Fixing It Actually Looks Like
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The homes we see with low turnover rates share a few things in common that are worth paying attention to.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Their staff can get answers when they need them, not just when someone is available to give them. Policies and procedures are genuinely accessible, not technically accessible in theory but practically inaccessible in practice. A care assistant on a night shift can send a message and get the relevant section of the handbook back in seconds. That one change removes an enormous amount of low-level anxiety from a job that already carries plenty of its own.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Their managers have time to actually manage. Because routine admin is handled by systems rather than humans, the manager spends their day on people rather than paperwork. They notice when someone seems off. They have a proper conversation with the new starter in week three rather than a hurried five minutes at the end of a twelve-hour shift. That presence is what retention actually feels like from a staff member's perspective.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Their onboarding is structured rather than improvised. New starters know where things are from day one. They have access to information. They feel set up to succeed rather than thrown in and expected to swim. The first week feels like the organisation was expecting them and was ready.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  None of this is about spending more money per head on staff. It is about removing the friction that makes a good job feel like a grinding one.
                </p>

                {/* ── Section 6: Closing ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Compounding Cost of Getting This Wrong
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  High turnover does not just cost money in replacement fees. It costs continuity of care, which affects residents. It costs team morale, because watching colleagues leave repeatedly is demoralising. It costs the manager's time, which is the scarcest resource in the building. And it costs your CQC position, because inspectors see staffing consistency as a proxy for governance quality.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  High turnover also makes recruitment harder. A home with a reputation for burning through staff struggles to attract good candidates. Word travels fast in the care sector. People talk.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The inverse is also true. Homes with low turnover become known for it. Good staff recommend the home to people they know. The pipeline of candidates improves. The quality of care improves. The CQC rating reflects it. And the occupancy follows, because families ask about staffing stability when they are choosing a home for someone they love.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Retention is not a soft HR issue. It is a commercial strategy. And right now, in most independent care homes, it is being left largely to chance.
                </p>

                {/* Closing CTA */}
                <div className="bg-slate-900 p-8 md:p-12 mt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-5">Next Step</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-5">
                    Stop pouring water into a bath with the plug out.
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-lg">
                    We install the infrastructure that removes the friction driving your best people out. Book a call and we will walk you through exactly what that looks like in practice.
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
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">About the Author</span>
                  <p className="text-sm text-slate-900 font-semibold mb-1">Reece Hubbard</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                    Co-founder at Effito. Reece works with care home owners to identify the operational friction points that drive staff turnover and build the infrastructure that removes them.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center border border-slate-900 text-slate-900 px-5 py-3.5 text-[10px] uppercase tracking-[0.35em] font-bold hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Speak to Reece
                  </Link>
                </div>

                <div className="border border-stone-200 p-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">Key Takeaways</span>
                  <ul className="space-y-4">
                    {[
                      'Annual turnover in residential care averages 34% — nearly 4 in 10 new starters leave within a year',
                      'Each replacement costs £3,600 in direct recruitment costs alone',
                      'Staff with positive employment factors leave at 14.4% per year — those without leave at 42.2%',
                      'Retention is driven by feeling supported, not just by pay',
                      'Manager admin burden directly reduces the support staff experience at work',
                      'High turnover damages CQC position, team morale, and occupancy — all at once',
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 font-light leading-relaxed">
                        <span className="text-amber-500 font-bold shrink-0 mt-0.5">✓</span>
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
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-600 shrink-0 mt-1">
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

export default StaffRetention;
