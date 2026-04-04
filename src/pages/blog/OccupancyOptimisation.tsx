import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const relatedArticles = [
  {
    slug: 'why-care-homes-lose-residents-slow-enquiry-response',
    category: 'Occupancy',
    title: 'Why Care Homes Lose Residents Before They Even Call Back',
    readTime: '6 min read',
    date: 'March 2025',
  },
  {
    slug: 'enquiry-response-time-care-home-benchmark',
    category: 'Occupancy',
    title: 'Enquiry Response Time: The KPI Every Care Home Owner Is Ignoring',
    readTime: '6 min read',
    date: 'December 2024',
  },
  {
    slug: 'care-home-automation-guide-2025',
    category: 'Operations',
    title: 'What Care Home Automation Actually Looks Like in 2025',
    readTime: '12 min read',
    date: 'February 2025',
  },
];

const OccupancyOptimisation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>The Occupancy Optimisation Playbook for Independent Care Homes | Effito Blog</title>
        <meta
          name="description"
          content="Full occupancy is not luck. It is a system. Here is exactly how independent care home owners consistently maintain 97% bed fill — and what the ones sitting at 84% are doing differently."
        />
        <meta
          name="keywords"
          content="care home occupancy optimisation, increase care home occupancy, care home bed fill, residential care home vacancy, care home full occupancy UK, care home private residents, occupancy rate care home, improve care home revenue"
        />
        <link rel="canonical" href="https://www.effito.com/blog/care-home-occupancy-optimisation" />
        <meta property="og:title" content="The Occupancy Optimisation Playbook for Independent Care Homes" />
        <meta property="og:description" content="Full occupancy is not luck. It is a system. Here is exactly what high-occupancy homes do differently." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.effito.com/blog/care-home-occupancy-optimisation" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Occupancy Optimisation Playbook for Independent Care Homes" />
        <meta name="twitter:description" content="Full occupancy is not luck. It is a system. Here is how the best care homes maintain 97% bed fill consistently." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "The Occupancy Optimisation Playbook for Independent Care Homes",
            "description": "Full occupancy is not luck. It is a system. Here is exactly how independent care home owners consistently maintain 97% bed fill and what the ones sitting at 84% are doing differently.",
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "author": {
              "@type": "Person",
              "name": "Harry Pickup",
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
              "@id": "https://www.effito.com/blog/care-home-occupancy-optimisation"
            },
            "keywords": "care home occupancy, bed fill, residential care home vacancies, care home revenue UK",
            "articleSection": "Occupancy"
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
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-300">Occupancy</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-stone-200 pb-12 md:pb-20">

            <div className="lg:col-span-8 lg:pr-16 lg:border-r lg:border-stone-200">

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-sm">
                  Occupancy
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.05] mb-8"
              >
                The Occupancy Optimisation Playbook for Independent Care Homes
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl"
              >
                Full occupancy is not luck and it is not about having the nicest building on the street. It is a system. Here is exactly what the homes consistently sitting at 97% are doing that the ones sitting at 84% are not.
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
                  <span className="text-sm font-light text-slate-600">9 minutes</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Written by</span>
                  <span className="text-sm font-light text-slate-600">Harry Pickup</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-1.5">Topic</span>
                  <span className="text-sm font-light text-slate-600">Occupancy & Revenue</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-200">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-slate-900 text-white px-6 py-4 text-[11px] uppercase tracking-[0.35em] font-bold hover:bg-slate-800 transition-all"
                >
                  Optimise Your Occupancy
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
                  Think of your care home like a hotel. A really important hotel, obviously — one where the guests need round-the-clock care and the stakes are considerably higher than a mint on the pillow. But the underlying business logic is the same. An empty room is not neutral. An empty room costs you money every single day it stays empty.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The national average occupancy rate for UK residential care homes sits at around 86%. That sounds respectable until you do the maths. A 40-bed home at 86% has roughly five or six beds sitting empty right now. At £1,298 per week per bed, that is somewhere between £6,500 and £7,800 walking out the door every single week. Not because those beds are broken. Not because there is no demand. Just because the process of converting an enquiry into an admission is leaking at multiple points — and most owners have no idea where.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The homes consistently operating above 97% occupancy are not doing something miraculous. They are not outspending everyone on marketing or undercutting on fees. They have simply fixed the leaks. This article is about what those leaks actually are.
                </p>

                {/* Pull quote */}
                <div className="border-l-4 border-emerald-500 pl-8 py-2 mb-14">
                  <p className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight italic leading-[1.3]">
                    "A 40-bed home at 86% occupancy is losing between £6,500 and £7,800 every week. Not because there is no demand. Because the process is leaking."
                  </p>
                </div>

                {/* ── Section 2 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  Leak One: The Response Gap
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Imagine you run a restaurant. Someone walks up to the door, looks at the menu, and knocks. Nobody answers for six hours. By the time you open the door, they have eaten somewhere else and left a review online about the experience.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  This is more or less what happens to care home enquiries every day across the UK.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Families contact an average of 3.5 care homes simultaneously when they are looking for a placement. They are not loyal to any one of them at that stage. They are assessing. And the first home to respond with a warm, structured, knowledgeable conversation has a massive advantage over everyone who replies later.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The average care home response time sits somewhere between six and twenty-four hours. Some homes never reply at all. An estimated 52% of phone enquiries go completely unanswered. Not slow. Just gone.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Here is what makes this even more painful. Enquiries peak between 10am and noon. That is also peak medication round time. Your manager is on the floor, as they should be. They cannot be in two places at once. Nobody can. So the phone rings, nobody answers, and the family tries the next home on the list.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The response gap is not a people problem. It is a systems problem. And systems problems have systems solutions.
                </p>

                {/* ── Section 3 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  Leak Two: Out-of-Hours Invisibility
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Here is something that surprises most owners when they first hear it. Twenty-four percent of all care enquiries arrive outside standard working hours. Evenings. Weekends. Bank holidays. Sunday nights when a family has just made a difficult decision and they are not waiting until Monday to act on it.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  These are often the highest-quality enquiries too. A family searching for care at 9pm on a Sunday is not idly browsing. Something has happened. A hospital has raised concerns. A fall has made the family accept what they had been avoiding. The urgency is real and the decision timeline is short.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  For most homes, these enquiries land in an inbox and sit there until someone arrives the next morning. By Monday they are stale. The family has spoken to someone else. Or they have slept on it and the urgency has cooled. Either way, the window you had at 9pm Sunday — when they were ready to act — has gone.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The homes operating at 97% occupancy are not leaving a quarter of their enquiries sitting overnight. They have coverage that does not clock off at 5pm. Not a person sitting in a call centre — that would be prohibitively expensive. Automated systems that respond within seconds, gather the right information, and have a tour booked in the calendar before the family has even closed their laptop.
                </p>

                {/* Stat callout */}
                <div className="bg-slate-900 p-8 md:p-10 mb-14">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { stat: '86%', label: 'national average occupancy — meaning roughly 1 in 7 beds is empty right now' },
                      { stat: '3.5', label: 'homes a family contacts simultaneously before choosing — you are racing the clock from the moment they enquire' },
                      { stat: '18%', label: 'of private self-funders move in within the first week of enquiry — the fastest movers go to whoever responds first' },
                    ].map((item, i) => (
                      <div key={i} className={`${i > 0 ? 'md:border-l md:border-slate-800 md:pl-8' : ''}`}>
                        <div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2">{item.stat}</div>
                        <div className="text-sm text-slate-400 font-light leading-relaxed">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs font-light mt-6 pt-6 border-t border-slate-800">Sources: Gov.uk Capacity Tracker Feb 2026; Lottie 2024 Care Seeker Survey; TrustedCare Enquiry to Placement Study</p>
                </div>

                {/* ── Section 4 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  Leak Three: The Tour Booking Bottleneck
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  You got the enquiry. You replied. The family seems interested. Now comes a back-and-forth over availability that can stretch across three days of missed calls and email chains, each one cooling the family's enthusiasm slightly.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Scheduling a tour should take thirty seconds. In most care homes it takes three days. Think about that like planning a holiday. You find a destination you love, you are excited, you are ready to book — but the travel agent says they will check availability and come back to you. Three days later you have booked somewhere else entirely because the first person kept you waiting.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Best-in-class care homes achieve a tour booking rate of over 40% from qualifying enquiries on the initial call. The industry average is significantly lower. The difference is not charm. It is speed. When a tour is offered and booked in the same conversation — while the family is still warm, still engaged, still emotionally present — conversion rates climb sharply.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Every extra day between enquiry and tour booking is a day the family could decide somewhere else felt more organised. More capable. More on the ball. First impressions in care are everything. A slow, disjointed booking experience is a first impression, whether you think of it that way or not.
                </p>

                {/* Pull quote 2 */}
                <div className="border-l-4 border-emerald-500 pl-8 py-2 mb-14">
                  <p className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic leading-[1.35]">
                    "Scheduling a tour should take thirty seconds. In most care homes it takes three days. Every one of those days is a day the family might choose someone else."
                  </p>
                </div>

                {/* ── Section 5 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  Leak Four: The Cold Lead Nobody Chases
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Not every enquiry converts immediately. Some families are planning weeks or months ahead. A parent is still living independently but the family can see the trajectory. They are gathering information now so they are not scrambling later.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  In most care homes, these enquiries are handled once and then forgotten. There is no system for staying in touch. No follow-up at two weeks. No gentle check-in at six weeks. The enquiry goes cold not because the family lost interest but because the home stopped showing interest.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Here is a number worth sitting with. Only 4% of enquiries older than ten weeks convert to a placement. But 69% of all placements happen within four weeks of the initial enquiry. That means the conversion window is short and concentrated. If you are not actively nurturing leads in that window, someone else is.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  Consistent follow-up is not glamorous. It is also not something a busy care home manager can reliably do manually while juggling everything else. But it is the difference between a lead going to a competitor and a lead becoming a resident. Homes that have automated their follow-up sequences — structured touchpoints that keep the conversation warm without requiring a human to remember to send them — consistently convert more of their existing pipeline without generating a single new enquiry.
                </p>

                {/* ── Section 6: What 97% looks like ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  What 97% Actually Looks Like Day to Day
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Homes operating at high occupancy do not feel the same as homes operating at 84%. The difference is not just financial. It is operational. It is cultural.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  At 97%, a vacancy is an event — an unusual, temporary situation that the whole admissions process is already geared up to resolve. When a resident moves on, the pipeline is already warm. Enquiries that have been nurtured over the past weeks are ready to move forward. The next admission often happens within days.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  At 84%, a vacancy is a slow bleed. The home posts on a directory listing, waits for enquiries, hopes someone calls, scrambles to respond, and two or three weeks later the bed is still empty. The costs are piling up. The manager is under pressure. And the next enquiry that does come in — if it arrives at 7pm on a Thursday — goes unanswered until Friday morning.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The gap between those two worlds is not luck or location or the quality of the building. It is whether the infrastructure underneath the admissions process is doing its job.
                </p>

                {/* Breakdown box */}
                <div className="space-y-0 border border-stone-200 mb-14">
                  <div className="px-4 py-3 bg-stone-50 border-b border-stone-200">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">The four leaks that separate 84% from 97%</span>
                  </div>
                  {[
                    {
                      num: '01',
                      title: 'The response gap',
                      body: 'Enquiries going unanswered for hours or days while staff are occupied with care. The family has moved on before you pick up the phone.',
                    },
                    {
                      num: '02',
                      title: 'Out-of-hours invisibility',
                      body: 'One in four enquiries arrives when no one is there to receive it. For the highest-intent families, this is the moment they needed you most.',
                    },
                    {
                      num: '03',
                      title: 'The tour booking bottleneck',
                      body: 'A three-day back-and-forth to schedule a visit that should take thirty seconds. Every day of delay is a day enthusiasm fades.',
                    },
                    {
                      num: '04',
                      title: 'The cold lead nobody chases',
                      body: 'Enquiries that do not convert immediately are simply forgotten. No follow-up. No nurture. No second chance.',
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

                {/* ── Section 7 ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  The Maths You Should Do Right Now
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Take your current occupancy rate. Subtract it from 97%. Multiply the difference by the number of beds you have. That is how many additional residents you would have at full optimisation. Now multiply that by your weekly fee rate. Then multiply by 52.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  For a 40-bed home at 86% occupancy charging £1,298 a week, closing that gap to 97% is worth around £74,000 a year. That number does not require a new building, a rebrand, or a single extra penny spent on marketing. It requires fixing the process that handles the enquiries already coming in.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  Most owners read that figure and feel one of two things. Either they are sceptical, which is fair — big numbers deserve scrutiny. Or they feel a quiet, slightly uncomfortable realisation that this money has been sitting on the table for years.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The ones who feel the second thing tend to do something about it.
                </p>

                {/* Final pull quote */}
                <div className="border-l-4 border-slate-900 pl-8 py-2 mb-14">
                  <p className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic leading-[1.35]">
                    "Closing the gap from 86% to 97% occupancy for a 40-bed home is worth around £74,000 a year. No new marketing. No new building. Just fixing the process."
                  </p>
                </div>

                {/* ── Closing ── */}
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-6">
                  Full Occupancy Is Not a Destination. It Is a Habit.
                </h2>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  The homes that sustain 97% occupancy over years are not running constant marketing campaigns. They are not doing anything flashy. They have built a machine that catches enquiries the moment they arrive, qualifies them properly, books tours fast, and keeps leads warm until they are ready to commit. Then they let the machine run.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-8">
                  It is a bit like compound interest. The gains build quietly in the background. A tour booked on Sunday evening. A follow-up sent automatically at two weeks. An inquiry at 11pm that gets a response in under a minute. None of it feels dramatic from the outside. But over twelve months, the occupancy numbers tell a completely different story.
                </p>

                <p className="text-base md:text-lg text-slate-600 leading-[1.85] font-light mb-14">
                  The question is not whether this is possible for your home. It is whether you are willing to stop leaving money in the cracks.
                </p>

                {/* Closing CTA */}
                <div className="bg-slate-900 p-8 md:p-12 mt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-5">Next Step</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-5">
                    Find out exactly where your occupancy is leaking.
                  </h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-lg">
                    We do a specific, no-obligation review of your current enquiry process — and show you in plain numbers what closing the gap would mean for your home. Book a call and let's look at it together.
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
                  <p className="text-sm text-slate-900 font-semibold mb-1">Harry Pickup</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                    Co-founder at Effito. Harry works with independent care home owners across the UK to identify and close the operational gaps costing them occupancy, revenue, and time.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center border border-slate-900 text-slate-900 px-5 py-3.5 text-[10px] uppercase tracking-[0.35em] font-bold hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Speak to Harry
                  </Link>
                </div>

                <div className="border border-stone-200 p-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-5">Key Takeaways</span>
                  <ul className="space-y-4">
                    {[
                      'The national average care home occupancy is 86% — roughly 1 in 7 beds is empty',
                      'A 40-bed home closing the gap to 97% generates around £74,000 in additional annual revenue',
                      '52% of care home phone enquiries go completely unanswered',
                      '24% of enquiries arrive out of hours — and these are often the most urgent',
                      'Families contact 3.5 homes simultaneously — the first to respond wins the race',
                      'Only 4% of enquiries older than 10 weeks ever convert to a placement',
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600 font-light leading-relaxed">
                        <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
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
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-600 shrink-0 mt-1">
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

export default OccupancyOptimisation;
