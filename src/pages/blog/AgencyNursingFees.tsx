import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const relatedArticles = [
  {
    slug: 'care-home-recruitment-pipeline-build',
    category: 'Recruitment',
    title: 'Build a Recruitment Pipeline That Runs Without You',
    readTime: '10 min read',
    date: 'January 2026',
  },
  {
    slug: 'staff-retention-care-homes-2025',
    category: 'Retention',
    title: 'Why Your Best Care Staff Are Leaving — And the Infrastructure to Keep Them',
    readTime: '7 min read',
    date: 'February 2026',
  },
  {
    slug: 'operational-admin-time-care-home-directors',
    category: 'Operations',
    title: '30 Hours a Week: The Hidden Admin Tax on Care Home Directors',
    readTime: '5 min read',
    date: 'January 2026',
  },
];

const AgencyNursingFees: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Agency Nursing Fees Are Destroying Your Margin | Effito Blog</title>
        <meta
          name="description"
          content="UK care homes spent over £2.5 billion on agency staff in 2024. The homes breaking this cycle share one thing: a permanent, always-on recruitment pipeline. Here is how they built it."
        />
        <meta
          name="keywords"
          content="agency nursing fees care home, reduce agency staff costs, care home recruitment, care home staffing UK, eliminate agency care home, care home hiring pipeline, residential care staff"
        />
        <link rel="canonical" href="https://www.effito.com/blog/agency-nursing-costs-how-to-eliminate-them" />
        <meta property="og:title" content="Agency Nursing Fees Are Destroying Your Margin — Here Is How to Stop It" />
        <meta property="og:description" content="UK care homes spent over £2.5 billion on agency staff in 2024. The homes breaking this cycle share one thing: a permanent recruitment pipeline." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.effito.com/blog/agency-nursing-costs-how-to-eliminate-them" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agency Nursing Fees Are Destroying Your Margin — Here Is How to Stop It" />
        <meta name="twitter:description" content="UK care homes spent over £2.5 billion on agency staff in 2024. Here is how the best operators are ending their dependency on agencies for good." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Agency Nursing Fees Are Destroying Your Margin — Here Is How to Stop It",
            "description": "UK care homes spent over £2.5 billion on agency staff in 2024. The homes breaking this cycle share one thing: a permanent, always-on recruitment pipeline.",
            "datePublished": "2025-03-10",
            "dateModified": "2025-03-10",
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
              "@id": "https://www.effito.com/blog/agency-nursing-costs-how-to-eliminate-them"
            },
            "keywords": "agency nursing fees, care home recruitment, reduce agency costs, care home staffing UK",
            "articleSection": "Recruitment"
          }
        `}</script>
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">

        {/* ── Article Header ── */}
        <section className="px-6 md:px-8 pt-14 md:pt-20 pb-0 max-w-[1400px] mx-auto">

          {/* Breadcrumb */}
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
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-300">Recruitment</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-stone-200 pb-12 md:pb-20">

            {/* Left — headline block */}
            <div className="lg:col-span-8 lg:pr-16 lg:border-r lg:border-stone-200">

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-sm">
                  Recruitment
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-sm">
                  Editor's Pick
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.05] mb-8"
              >
                Agency Nursing Fees Are Destroying Your Margin. Here Is How to Stop It.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl"
              >
                UK care homes spent over £2.5 billion on agency staff in 2024. The homes that are breaking this cycle all share one thing in common: a permanent, always-on recruitment pipeline that means they never have to call an agency in a panic again.
              </motion.p>
            </div>

            {/* Right — meta block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 lg:pl-16 flex flex-col justify-between pt-10 lg:pt-0"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Published</span>
                  <span className="text-sm font-light text-slate-600">April 2026</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Reading Time</span>
                  <span className="text-sm font-light text-slate-600">8 minutes</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Written by</span>
                  <span className="text-sm font-light text-slate-600">Reece Hubbard</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Topic</span>
                  <span className="text-sm font-light text-slate-600">Recruitment & Staffing Costs</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-200">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-slate-900 text-white px-6 py-4 text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-slate-800 transition-all"
                >
                  Cut Your Agency Bill
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Article Body ── */}
        <section className="px-6 md:px-8 py-14 md:py-20 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-8 lg:pr-16 lg:border-r lg:border-stone-200"
            >
              <div>

                {/* ── Opening ── */}
                <p className="text-lg md:text-xl text-slate-700 leading-[1.8] font-light mb-8">
                  We spoke to an owner last year who was spending £28,000 a month on agency staff. Every single month, without fail. He knew it was unsustainable. He had known for years. But every time a shift went unfilled the night before, he had no other option. He picked up the phone, called the agency, and paid whatever rate they quoted him.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  That is not a staffing problem. That is a structural problem. And it is one we see in almost every independent care home we speak to across the UK.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The agency has become the safety net. The problem is that the safety net now costs more than the floor it is supposed to catch you from.
                </p>

                {/* Pull quote */}
                <div className="border-l-4 border-slate-900 pl-8 py-2 mb-14">
                  <p className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight italic leading-[1.3]">
                    "The agency has become the safety net. The problem is that the safety net now costs more than the floor it is supposed to catch you from."
                  </p>
                </div>

                {/* ── Section 2 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  How Did We Get Here?
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Agency dependency in residential care did not happen overnight. It crept in over years, shift by shift, until it became the default rather than the emergency measure.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The cycle goes something like this. A care assistant hands in their notice. The home posts a job on Indeed, waits a few weeks, interviews a handful of people, and eventually makes a hire. In the gap before the new person starts, or when the hire falls through, the manager calls an agency. That agency worker comes in, does a passable job, and goes home. No continuity, no investment in the home, no reason to stay.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Meanwhile the permanent job posting sits there, slowly going stale. Other candidates apply, nobody follows up quickly enough, and they take jobs elsewhere. So the agency continues. And the bill continues with it.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The real issue is that most homes recruit reactively. A vacancy opens and then the process begins. By the time you are actively looking for someone, you are already behind. Agencies win because they have done the work in advance. They have a bench of available workers ready to send out. The independent home, starting from scratch every single time, simply cannot compete with that speed.
                </p>

                {/* Stat box */}
                <div className="bg-slate-900 p-8 md:p-10 mb-14">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { stat: '£2.5bn', label: 'spent by UK care homes on agency staff in 2024' },
                      { stat: '34%', label: 'average annual staff turnover in residential care' },
                      { stat: '£18–35', label: 'typical agency markup per hour above direct hire cost' },
                    ].map((item, i) => (
                      <div key={i} className={`${i > 0 ? 'md:border-l md:border-slate-800 md:pl-8' : ''}`}>
                        <div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2">{item.stat}</div>
                        <div className="text-sm text-slate-400 font-light leading-relaxed">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Section 3 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What It Actually Costs You
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Most owners we speak to know their monthly agency bill. Far fewer have actually calculated what that figure means across a year, and what it means for their actual margin.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Take a care home spending £15,000 a month on agency cover. That is £180,000 a year. For context, that is enough to employ three full-time senior care assistants with room to spare. It is enough to fund a full marketing operation. It is enough to renovate a wing of the building.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  But the financial cost is only part of it. Agency workers do not know your residents. They do not know your routines, your documentation systems, or where things are kept. Every time an agency worker walks through the door, your permanent staff have to spend time bringing them up to speed. That is time taken away from actual care. It affects morale too. Your best permanent staff watch agency workers walk in at a higher effective rate, do less, and leave. That breeds resentment.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  And then there is the CQC angle. Inspectors look at staffing consistency. High agency usage is a flag. It raises questions about continuity of care and management capability that you do not want to be answering during an inspection.
                </p>

                {/* ── Section 4 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Homes That Have Fixed This
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  There is a growing number of independent operators who have reduced their agency spend by 70, 80, even 90 percent. They are not doing anything magical. They have not found some secret pool of available nurses. What they have done is change when they recruit.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  They recruit permanently. Not when a vacancy appears. Permanently. Their pipeline is always running in the background, collecting applicants, engaging them, screening them, keeping warm candidates ready for when a role opens up. By the time they need someone, they already have three people in conversation.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  This sounds obvious when you say it out loud. But it requires infrastructure to actually pull off. You cannot manually maintain an ongoing pipeline of candidates when you are already stretched managing the home. It has to run without you having to think about it.
                </p>

                {/* Numbered breakdown */}
                <div className="space-y-0 border border-stone-200 mb-14">
                  <div className="px-4 py-3 bg-stone-50 border-b border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">What a permanent pipeline actually looks like</span>
                  </div>
                  {[
                    {
                      num: '01',
                      title: 'Always-on job presence',
                      body: 'Your roles are visible and attracting applicants at all times, not just when a vacancy is urgent. Candidates find you before you need them.',
                    },
                    {
                      num: '02',
                      title: 'Instant applicant engagement',
                      body: 'When someone applies, they hear back within two minutes. Not two days. Speed here matters for the same reason it matters with resident enquiries — good candidates have options.',
                    },
                    {
                      num: '03',
                      title: 'Automated screening',
                      body: 'Basic qualification checks, right to work, experience and availability are gathered before a human is involved. You only speak to people worth speaking to.',
                    },
                    {
                      num: '04',
                      title: 'Interview booked automatically',
                      body: 'Qualified candidates are offered interview slots directly from your calendar. No back and forth. No lost candidates while you find a time that works.',
                    },
                    {
                      num: '05',
                      title: 'Warm bench maintained',
                      body: 'Candidates who were not quite right for the last role stay in your pipeline. When the next vacancy opens, you already have people to call.',
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
                  The Speed Problem Nobody Talks About
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Here is something that surprises a lot of owners when we tell them. The average care home takes over 48 hours to respond to a job application. In a sector with a 34% annual turnover rate and fierce competition for the same pool of workers, that is catastrophic.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  A good care assistant submits three or four applications in an evening. The home that responds first gets the interview. The home that responds on Thursday to a Monday application finds that person has already accepted an offer somewhere else.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This is exactly parallel to the enquiry response problem we wrote about in our previous article. Speed is the differentiator. Not your reputation, not your pay rate, not your benefits package. The home that responds first wins.
                </p>

                {/* Pull quote 2 */}
                <div className="border-l-4 border-blue-500 pl-8 py-2 mb-14">
                  <p className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic leading-[1.35]">
                    "A good care assistant submits three or four applications in an evening. The home that responds first gets the interview."
                  </p>
                </div>

                {/* ── Section 6 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  This Is Not About Replacing the Human Side of Hiring
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  We want to be clear about something, because we hear this concern often. Automating your recruitment pipeline does not mean removing human judgment from who you hire. Care is a people business. The decision about who walks onto your floor and looks after your residents absolutely has to involve your judgment, your gut, your interview process.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  What automation handles is everything that happens before that conversation. The initial acknowledgement, the screening questions, the scheduling. The administrative layer that currently eats hours of management time every week and still produces slow, inconsistent results.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Your manager's time is spent interviewing good candidates who have been pre-qualified and are already excited to join. Not chasing applications that went cold three days ago.
                </p>

                {/* ── Section 7 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What Happens When You Stop Calling the Agency
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The owner we mentioned at the start of this article. The one spending £28,000 a month. He is down to under £4,000. Not because he got lucky with hiring. Because he now has a pipeline that is always running, always warm, and always producing candidates before he needs them.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The shift happened gradually over about three months. At first he was still calling agencies occasionally. Then less. Then rarely. Then one month he realised he had not called one at all.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The financial impact was obvious. But what he talked about most was the operational calm. Not scrambling every time someone rang in sick. Not feeling held hostage by agencies who knew he had no alternative. Having options.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  That feeling of having options is what a recruitment pipeline actually gives you. It is not just about cost. It is about not being at the mercy of a system that profits from your desperation.
                </p>

                {/* Closing CTA box */}
                <div className="bg-slate-900 p-8 md:p-12 mt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-5">Next Step</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-5">
                    See what your agency bill looks like in 90 days with Effito.
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-lg">
                    We build and install the recruitment pipeline described in this article as part of our infrastructure installation. Book a strategy call and we will show you exactly how it works.
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

                {/* About the Author */}
                <div className="border border-stone-200 p-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">About the Author</span>
                  <p className="text-sm text-slate-900 font-semibold mb-1">Reece Hubbard</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                    Co-founder at Effito. Reece works with care home owners across the UK to break their dependency on agency staff and build permanent recruitment pipelines that run without them.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center border border-slate-900 text-slate-900 px-5 py-3.5 text-[10px] uppercase tracking-[0.35em] font-bold hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Speak to Reece
                  </Link>
                </div>

                {/* Key takeaways */}
                <div className="border border-stone-200 p-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">Key Takeaways</span>
                  <ul className="space-y-4">
                    {[
                      'UK care homes spent £2.5 billion on agency staff in 2024',
                      'Agency dependency is a structural problem, not a staffing one',
                      'Most homes respond to job applications in 48+ hours — top candidates are gone by then',
                      'A permanent pipeline recruits before vacancies appear, not after',
                      'Homes with automated pipelines routinely cut agency spend by 70–85%',
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 font-light leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related articles */}
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">Related Reading</span>
                  <div className="space-y-0">
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.slug}
                        to={`/blog/${article.slug}`}
                        className="group flex gap-4 py-5 border-b border-stone-200 last:border-0 hover:bg-stone-50 -mx-2 px-2 transition-colors"
                      >
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-600 shrink-0 mt-1">
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

export default AgencyNursingFees;
