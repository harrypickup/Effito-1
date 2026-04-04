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
    slug: 'staff-retention-care-homes-2025',
    category: 'Retention',
    title: 'Why Your Best Care Staff Are Leaving and How to Keep Them',
    readTime: '7 min read',
    date: 'January 2025',
  },
  {
    slug: 'care-home-automation-guide-2025',
    category: 'Operations',
    title: 'What Care Home Automation Actually Looks Like in 2025',
    readTime: '12 min read',
    date: 'February 2025',
  },
];

const RecruitmentPipeline: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Build a Care Home Recruitment Pipeline That Runs Without You | Effito Blog</title>
        <meta
          name="description"
          content="Most care homes recruit like they are putting out fires. Post a job when someone leaves. Hope for applications. Chase candidates who have already gone elsewhere. There is a better way — and the homes using it never panic-call an agency again."
        />
        <meta
          name="keywords"
          content="care home recruitment pipeline, care home hiring system, recruit care staff, care home talent pipeline UK, care home recruitment strategy, care home staffing system, hire care workers faster, care home recruitment process"
        />
        <link rel="canonical" href="https://www.effito.com/blog/care-home-recruitment-pipeline-build" />
        <meta property="og:title" content="Build a Care Home Recruitment Pipeline That Runs Without You" />
        <meta property="og:description" content="Most care homes recruit like they are putting out fires. Here is how to build a system that means you never panic-call an agency again." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.effito.com/blog/care-home-recruitment-pipeline-build" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Build a Care Home Recruitment Pipeline That Runs Without You" />
        <meta name="twitter:description" content="Most care homes recruit reactively. Here is what proactive, always-on recruitment looks like — and what it does to your agency bill." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Build a Care Home Recruitment Pipeline That Runs Without You",
            "description": "Most care homes recruit like they are putting out fires. Post a job when someone leaves. Hope for applications. Chase candidates who have already gone elsewhere. There is a better way.",
            "datePublished": "2024-12-20",
            "dateModified": "2024-12-20",
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
              "@id": "https://www.effito.com/blog/care-home-recruitment-pipeline-build"
            },
            "keywords": "care home recruitment pipeline, care home hiring system, care home talent pipeline UK, recruit care staff faster",
            "articleSection": "Recruitment"
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
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-300">Recruitment</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-stone-200 pb-12 md:pb-20">

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
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.05] mb-8"
              >
                Build a Recruitment Pipeline That Runs Without You
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl"
              >
                Most care homes recruit the same way they fight fires. Wait for something to go wrong, then scramble. It is exhausting, expensive, and completely avoidable. Here is what it looks like when you build a system instead.
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
                  <span className="text-sm font-light text-slate-600">December 2024</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Reading Time</span>
                  <span className="text-sm font-light text-slate-600">10 minutes</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Written by</span>
                  <span className="text-sm font-light text-slate-600">Reece Hubbard</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Topic</span>
                  <span className="text-sm font-light text-slate-600">Recruitment & Hiring Systems</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-200">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-slate-900 text-white px-6 py-4 text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-slate-800 transition-all"
                >
                  Build Your Pipeline
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
                  Imagine running a restaurant where you only ever ordered ingredients after a customer sat down and placed their order. No stock. No preparation. Just pure, chaotic hope that the supplier can deliver in the next twenty minutes while the customer sits waiting with a bread roll and dwindling patience.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Nobody runs a restaurant like that. It would be absurd. The kitchen would collapse within a week.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  And yet this is almost exactly how the majority of care homes approach recruitment. A member of staff hands in their notice. The manager posts a job. Applications trickle in over two or three weeks. A handful get through to a phone call. Two do not show up. One accepts and then changes their mind before starting. Meanwhile the rota has a hole in it, the team is stretched, and the agency bill is climbing.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This is reactive recruitment. And it is the default setting for most independent care homes in the UK, not because owners are doing something wrong, but because nobody ever showed them a different way of doing it.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  There is a different way. It is not complicated. But it requires a fundamental shift in how you think about recruitment — from an event you manage when it happens, to a system that runs all the time, whether you have a vacancy or not.
                </p>

                {/* Pull quote */}
                <div className="border-l-4 border-blue-500 pl-8 py-2 mb-14">
                  <p className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight italic leading-[1.3]">
                    "Reactive recruitment is like only ordering ingredients after the customer sits down. The kitchen collapses. It just takes a bit longer."
                  </p>
                </div>

                {/* ── Section 2 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  Why Reactive Recruitment Always Loses
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The care sector has one of the most competitive talent markets in the UK. There are more care jobs available than there are people to fill them, and that gap is widening. Care workers know they have options. They apply to multiple employers at once, and they go with whoever responds first, offers the clearest path forward, and makes the process feel like the job is actually worth wanting.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The average time to hire in the care sector is 76 days. Read that again. From posting a job to someone starting a shift: 76 days. More than two months of an open vacancy, agency cover, and a manager spending time on the hiring process that they do not have.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  And within that 76-day window, 40% of candidates who accept an offer do not actually start. They find something else between offer and start date, because the process took so long that something better came along. So the clock resets. Back to the beginning.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The care home posting a job and waiting is like trying to catch a train by turning up at the station and hoping one passes through. Sometimes it works. Mostly you stand on the platform for a long time watching other people get where they are going.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Agencies, to their credit, have figured this out. They maintain a warm bench of available workers at all times. When you call them in a panic, they can place someone within hours. That responsiveness is why care homes pay such eye-watering premiums to use them. Agencies are not winning because they are better at people. They are winning because they prepared when you did not.
                </p>

                {/* Stat callout */}
                <div className="bg-slate-900 p-8 md:p-10 mb-14">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { stat: '76', label: 'days average time to hire in the care sector — two months of open vacancy and agency cover' },
                      { stat: '40%', label: 'of candidates who accept an offer never actually start — they found something else in the wait' },
                      { stat: '17.7hrs', label: 'of manager admin per vacancy — nearly half a working week, every single hire' },
                    ].map((item, i) => (
                      <div key={i} className={`${i > 0 ? 'md:border-l md:border-slate-800 md:pl-8' : ''}`}>
                        <div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2">{item.stat}</div>
                        <div className="text-sm text-slate-400 font-light leading-relaxed">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs font-light mt-6 pt-6 border-t border-slate-800">Sources: Jobtrain ATS for Care 2024; Totaljobs HR survey 748 leaders Aug 2025; Skills for Care 2024/25</p>
                </div>

                {/* ── Section 3 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Moment Most Owners Get This Wrong
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  There is a specific moment in the reactive recruitment cycle where things fall apart, and it happens so quietly that most managers never even notice it.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  A care assistant applies for a role on a Tuesday evening. They have applied to four care homes. They are genuinely interested in yours because they live nearby and a friend mentioned it was a good place to work. They send the application and go to bed.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Wednesday morning, one of the other homes they applied to calls them before 9am. Friendly, professional, asks a few quick questions, and offers an interview for Friday. They feel wanted. They feel like that home is on top of things. They say yes.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Your manager reads the application on Thursday afternoon, between a handover and a medication query. They think the candidate looks promising. They send an email asking them to call back to arrange a chat.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The candidate starts their new job the following Monday. They never reply to your email. Your manager assumes they were not that interested.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  They were interested. They are just already employed somewhere else. This exact sequence plays out dozens of times a year in the average care home, completely invisible on any report.
                </p>

                {/* Pull quote 2 */}
                <div className="border-l-4 border-slate-900 pl-8 py-2 mb-14">
                  <p className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic leading-[1.35]">
                    "The candidate was interested. They are just already employed somewhere else. This plays out dozens of times a year, invisible on any report."
                  </p>
                </div>

                {/* ── Section 4 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What a Pipeline Actually Is
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  A recruitment pipeline is not a fancy word for a spreadsheet of CVs. It is a living, running system that attracts candidates before you need them, engages them the moment they show interest, screens them without consuming manager time, and keeps warm candidates ready for when a vacancy opens.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Think of it like a river rather than a bucket. A bucket sits empty until you need it, and then you scramble to fill it. A river flows continuously. By the time you need the water, it is already there.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  In practice, a properly built recruitment pipeline works like this. Your job listings are always live, always attracting applicants, not just when you have an urgent vacancy. The moment someone applies, they receive a call within minutes, not days. That call screens the basics: experience, qualifications, right to work, availability, and what they are actually looking for. The call outcome is recorded automatically. Qualified candidates are shortlisted. Unqualified candidates are handled appropriately without the manager ever seeing them. Good candidates who are not quite right for this moment stay warm in the system for next time.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  By the time a vacancy opens up, there are already people in conversation. Sometimes the hire is made within days. The agency never even gets a call.
                </p>

                {/* How it works breakdown */}
                <div className="space-y-0 border border-stone-200 mb-14">
                  <div className="px-4 py-3 bg-stone-50 border-b border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">What a pipeline does that manual recruitment cannot</span>
                  </div>
                  {[
                    {
                      num: '01',
                      title: 'It runs when you are not watching',
                      body: 'A candidate applies at 7pm on a Friday. Your pipeline responds within minutes, screens them, and has their details ready for Monday. No manual intervention required. No candidate lost over a weekend.',
                    },
                    {
                      num: '02',
                      title: 'It is faster than the competition',
                      body: 'The home that speaks to a candidate first wins. A system that responds in minutes beats a manager who responds in days, every single time. Speed is the differentiator and a system is the only way to guarantee it.',
                    },
                    {
                      num: '03',
                      title: 'It protects your manager\'s time',
                      body: 'Seventeen hours of admin per hire is the current average. A pipeline that automates screening, tagging, and shortlisting brings that down to under three. Those fourteen hours go back to running the home.',
                    },
                    {
                      num: '04',
                      title: 'It filters quality before a human is involved',
                      body: 'A manager\'s time is too valuable to spend on candidates who are not right for the role. Automated screening means the manager sees a shortlist, not a pile of applications with no context.',
                    },
                    {
                      num: '05',
                      title: 'It maintains a warm bench',
                      body: 'Not every good candidate is available right now. A pipeline keeps them warm. When the next vacancy opens, you already have three people you can call who know who you are and have already expressed interest.',
                    },
                    {
                      num: '06',
                      title: 'It reduces agency dependency structurally',
                      body: 'The agency wins because it has the infrastructure to respond fast. Build your own infrastructure and you take that advantage away. One provider went from £40,000 a month in agency spend to near zero. Not through luck. Through pipeline.',
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
                  The Hidden Cost of Hiring Slowly
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Here is a calculation worth doing. Take your average agency cost per shift. Multiply it by the number of agency shifts you covered last month. Now consider how many of those shifts were needed because you had a vacancy that had been open for more than two weeks.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Agency fees in care typically represent a 25 to 40% premium on what the same shift would cost as permanent staff. A home covering ten agency shifts a week at a £30 premium per shift is spending an extra £15,600 a year on cover for the exact same hours that a permanent hire would have provided for less. That is before the direct recruitment costs, before the manager time, before the impact on team morale.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The cost of slow hiring is not just the agency bill. It is the permanent headcount you never quite manage to build because the pipeline is always empty when you need it most.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Homes that have solved this describe the change with the same phrase, over and over. They say they feel in control. Not lucky. Not grateful that someone decent applied. In control. Because when a vacancy opens, they have options. And having options is everything.
                </p>

                {/* ── Section 6 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Mistake Owners Make When They Try to Build One Manually
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Some owners have tried to build a pipeline manually. They create a spreadsheet to track applicants. They set a reminder to follow up. They ask the manager to keep job ads live even when there is no immediate vacancy. For about three weeks it works reasonably well. Then something urgent happens on the floor, the spreadsheet goes untouched for a fortnight, and the system quietly collapses under the weight of everything else the manager is trying to do.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This is not a failure of effort or intention. It is a failure of design. A pipeline that depends on a human remembering to maintain it is not a pipeline. It is a to-do list. And to-do lists in care homes have a very short half-life.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  A real pipeline runs automatically. The acknowledgement of a new application, the screening call, the tagging, the shortlist notification, the follow-up with a candidate who went quiet — all of it happens without the manager initiating it. The manager receives the output: a shortlist of screened, rated candidates with everything they need to make a decision. They did not build the shortlist. The system built it for them.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  That is the distinction that matters. Not whether you have a process on paper. Whether you have infrastructure that makes the process happen whether you remember it or not.
                </p>

                {/* ── Section 7: Closing ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  You Are One Person Down From Finding Out Why This Matters
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Every care home owner reading this is, at most, one resignation away from needing to hire urgently. It might be next week. It might be next month. It will happen.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  When it does, the question is simple. Do you have a pipeline already running, with warm candidates already engaged, ready to move forward quickly? Or do you post a job on Indeed, sit back, and start budgeting for agency cover while you wait?
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The homes that have built the pipeline do not dread that resignation letter the way other homes do. It is still inconvenient. But it is not a crisis. Because the system was already running before they needed it. That is the entire point.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Building a recruitment pipeline is not a complicated or expensive undertaking. It requires the right infrastructure, the right process, and the decision to stop treating recruitment as something you deal with when it becomes a problem. The homes that made that decision six months ago are not scrambling right now. They are interviewing.
                </p>

                {/* Closing CTA */}
                <div className="bg-slate-900 p-8 md:p-12 mt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-5">Next Step</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-5">
                    Stop waiting for the next resignation to think about recruitment.
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-lg">
                    We build and install the recruitment pipeline described in this article as part of our infrastructure installation. Book a call with me and I will show you exactly how it works, what it costs, and what it saves.
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
                    Co-founder at Effito. Reece has built recruitment pipelines for independent care homes across the UK, helping owners replace reactive hiring with systems that run whether they are watching or not.
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
                      'The average time to hire in care is 76 days — two months of agency cover and open vacancy',
                      '40% of candidates who accept an offer never start, because the process took too long',
                      'Good candidates apply to multiple homes simultaneously — whoever calls first wins',
                      'Manual pipelines collapse under operational pressure — only automated systems actually run',
                      'Agency fees typically add 25 to 40% on top of what permanent staff would cost for the same hours',
                      'The homes that solve recruitment describe the same thing: feeling in control rather than in crisis',
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 font-light leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">✓</span>
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

export default RecruitmentPipeline;
