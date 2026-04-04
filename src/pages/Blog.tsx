import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
  tag?: string;
}

// ─── Blog Data ────────────────────────────────────────────────────────────────
const articles: Article[] = [
  {
    slug: 'why-care-homes-lose-residents-slow-enquiry-response',
    category: 'Occupancy',
    title: 'Why Care Homes Lose Residents Before They Even Call Back',
    excerpt:
      'The average care home takes 6–24 hours to respond to an enquiry. By then, the family has already toured three competitors. Here is the operational fix.',
    readTime: '6 min read',
    date: 'March 2025',
    featured: true,
    tag: 'Most Read',
  },
  {
    slug: 'agency-nursing-costs-how-to-eliminate-them',
    category: 'Recruitment',
    title: 'Agency Nursing Fees Are Destroying Your Margin — Here Is How to Stop It',
    excerpt:
      'UK care homes spent over £2.5 billion on agency staff in 2024. The homes breaking this cycle share one thing in common: a permanent, automated talent pipeline.',
    readTime: '8 min read',
    date: 'March 2025',
    featured: true,
    tag: 'Editor\'s Pick',
  },
  {
    slug: 'care-home-automation-guide-2025',
    category: 'Operations',
    title: 'The Complete Guide to Care Home Automation in 2025',
    excerpt:
      'From enquiry handling to staff onboarding — a structured breakdown of every process care home operators can automate today without adding headcount.',
    readTime: '12 min read',
    date: 'February 2025',
    featured: true,
  },
  {
    slug: 'cqc-compliance-automation-staff-policies',
    category: 'Compliance',
    title: 'How Automated Policy Access Keeps Your CQC Rating Intact',
    excerpt:
      'When staff can access the right SOP in under 10 seconds — without interrupting the manager — compliance incidents drop significantly. Here is the architecture.',
    readTime: '5 min read',
    date: 'February 2025',
  },
  {
    slug: 'care-home-occupancy-optimisation',
    category: 'Occupancy',
    title: 'The Occupancy Optimisation Playbook for Independent Care Homes',
    excerpt:
      'Full occupancy is not luck — it is a system. This playbook outlines the exact infrastructure independent operators use to maintain 97%+ bed fill consistently.',
    readTime: '9 min read',
    date: 'January 2025',
  },
  {
    slug: 'staff-retention-care-homes-2025',
    category: 'Retention',
    title: 'Why Your Best Care Staff Are Leaving — And the Infrastructure to Keep Them',
    excerpt:
      'Turnover in residential care averages 34% annually. The cost is catastrophic. The solution is not pay rises — it is removing the friction that burns them out.',
    readTime: '7 min read',
    date: 'January 2025',
  },
  {
    slug: 'enquiry-response-time-care-home-benchmark',
    category: 'Occupancy',
    title: 'Enquiry Response Time: The KPI Every Care Home Owner Is Ignoring',
    excerpt:
      'Speed-to-respond is now the single biggest determinant of bed conversion. We analysed 400+ enquiries to build the definitive benchmark for UK residential care.',
    readTime: '6 min read',
    date: 'December 2024',
  },
  {
    slug: 'care-home-recruitment-pipeline-build',
    category: 'Recruitment',
    title: 'Build a Recruitment Pipeline That Runs Without You',
    excerpt:
      'A permanent talent pipeline means you never call an agency in a crisis again. Here is exactly how to architect one — and what most operators get wrong.',
    readTime: '10 min read',
    date: 'December 2024',
  },
  {
    slug: 'operational-admin-time-care-home-directors',
    category: 'Operations',
    title: '30 Hours a Week: The Hidden Admin Tax on Care Home Directors',
    excerpt:
      'Most senior managers spend 70% of their time on tasks that could be automated. This is what that time looks like — and what happens when you get it back.',
    readTime: '5 min read',
    date: 'November 2024',
  },
];

const categories = ['All', 'Occupancy', 'Recruitment', 'Retention', 'Operations', 'Compliance'];

const categoryColors: Record<string, string> = {
  Occupancy: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  Recruitment: 'text-blue-700 bg-blue-50 border-blue-200',
  Retention: 'text-amber-700 bg-amber-50 border-amber-200',
  Operations: 'text-slate-700 bg-slate-100 border-slate-200',
  Compliance: 'text-rose-700 bg-rose-50 border-rose-200',
};

// ─── Featured Article Card ────────────────────────────────────────────────────
const FeaturedCard: React.FC<{ article: Article; index: number }> = ({ article, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link
      to={`/blog/${article.slug}`}
      className="group block h-full bg-white border border-stone-200 hover:border-slate-400 transition-all duration-300 hover:shadow-xl"
    >
      {/* Top accent bar */}
      <div className="h-[3px] bg-slate-900 w-0 group-hover:w-full transition-all duration-500" />

      <div className="p-8 md:p-10 flex flex-col h-full">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-6">
          <span
            className={`text-[9px] font-bold uppercase tracking-[0.35em] px-2.5 py-1 border rounded-sm ${categoryColors[article.category] ?? 'text-stone-500 bg-stone-50 border-stone-200'}`}
          >
            {article.category}
          </span>
          {article.tag && (
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-sm">
              {article.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight leading-[1.2] mb-5 group-hover:text-slate-700 transition-colors flex-1">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-stone-100">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">{article.date}</span>
            <span className="w-1 h-1 bg-stone-300 rounded-full" />
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">{article.readTime}</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-900 group-hover:translate-x-1 transition-transform duration-300 inline-block">
            Read →
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

// ─── List Article Row ─────────────────────────────────────────────────────────
const ArticleRow: React.FC<{ article: Article; index: number }> = ({ article, index }) => (
  <motion.article
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="border-b border-stone-200 last:border-0"
  >
    <Link
      to={`/blog/${article.slug}`}
      className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 hover:bg-stone-50 px-0 transition-colors duration-200"
    >
      <span
        className={`shrink-0 text-[9px] font-bold uppercase tracking-[0.3em] px-2.5 py-1 border rounded-sm self-start sm:self-auto ${categoryColors[article.category] ?? 'text-stone-500 bg-stone-50 border-stone-200'}`}
      >
        {article.category}
      </span>

      <h3 className="flex-1 text-base md:text-lg font-serif text-slate-900 tracking-tight leading-tight group-hover:text-slate-600 transition-colors">
        {article.title}
      </h3>

      <div className="flex items-center gap-4 shrink-0">
        <span className="hidden md:block text-[10px] font-mono text-stone-400 uppercase tracking-widest">{article.date}</span>
        <span className="hidden md:block text-[10px] font-mono text-stone-400 uppercase tracking-widest">{article.readTime}</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-900 group-hover:translate-x-1 transition-transform duration-300 inline-block">
          →
        </span>
      </div>
    </Link>
  </motion.article>
);

// ─── Blog Page ────────────────────────────────────────────────────────────────
const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredArticles = articles.filter((a) => a.featured);
  const filteredArticles =
    activeCategory === 'All'
      ? articles.filter((a) => !a.featured)
      : articles.filter((a) => a.category === activeCategory && !a.featured);

  const allFiltered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Blog | Effito — Care Home Automation & Operations Insights</title>
        <meta
          name="description"
          content="Expert insights on care home automation, occupancy optimisation, recruitment, staff retention, and CQC compliance. Helping UK care home owners run smarter operations."
        />
        <meta
          name="keywords"
          content="care home automation, care home operations, care home occupancy, care home recruitment, staff retention care homes, CQC compliance, care home management software, residential care home software UK"
        />
        <link rel="canonical" href="https://www.effito.com/blog" />

        {/* Open Graph */}
        <meta property="og:title" content="Effito Blog — Care Home Automation & Operations" />
        <meta
          property="og:description"
          content="Practical guides and insights for care home owners, operators, and managers on automation, occupancy, and staff operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.effito.com/blog" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Effito Blog — Care Home Automation & Operations" />
        <meta
          name="twitter:description"
          content="Practical guides and insights for care home owners, operators, and managers."
        />

        {/* Schema.org Blog */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Effito Blog",
            "description": "Expert insights on care home automation, occupancy optimisation, recruitment, and staff retention for UK residential care home owners.",
            "url": "https://www.effito.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Effito",
              "url": "https://www.effito.com"
            }
          }
        `}</script>
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">

        {/* ── Hero ── */}
        <section className="px-6 md:px-8 pt-20 md:pt-32 pb-16 md:pb-24 max-w-[1400px] mx-auto border-b border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-end">

            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase text-stone-400 mb-8 md:mb-10 block"
              >
                Effito Intelligence
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-[7rem] font-serif text-slate-900 tracking-tighter leading-[1.02] md:leading-[0.92] mb-8 md:mb-10"
              >
                Operational <br className="hidden md:block" />
                <span className="italic">Edge.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-xl"
              >
                Practical intelligence for care home owners, operators, and directors who
                are building institutions that outlast the chaos of manual management.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:col-span-5 lg:pb-2"
            >
              {/* Stats strip */}
              <div className="grid grid-cols-3 gap-0 border border-stone-200">
                {[
                  { value: '9', label: 'Articles' },
                  { value: '5', label: 'Topics' },
                  { value: '∞', label: 'Value' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`p-6 md:p-8 text-center ${i > 0 ? 'border-l border-stone-200' : ''}`}
                  >
                    <div className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tighter mb-1">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── Featured Articles ── */}
        <section className="px-6 md:px-8 py-16 md:py-24 max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-10 md:mb-14">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-slate-900 rounded-full" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-900">
                Featured Reading
              </span>
            </div>
            <div className="hidden md:block h-px bg-stone-200 flex-1 ml-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-stone-200">
            {featuredArticles.map((article, i) => (
              <div key={article.slug} className={`${i > 0 ? 'border-l border-stone-200' : ''}`}>
                <FeaturedCard article={article} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Category Filter + Article List ── */}
        <section className="px-6 md:px-8 pb-24 md:pb-40 max-w-[1400px] mx-auto">

          {/* Filter Bar */}
          <div className="flex items-center gap-0 mb-12 border border-stone-200 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 md:px-7 py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-200 border-r border-stone-200 last:border-r-0 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-stone-400 hover:text-slate-900 hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Section heading */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">
              {activeCategory === 'All' ? 'All Articles' : activeCategory}
              <span className="ml-3 text-stone-300">
                ({activeCategory === 'All' ? articles.length : articles.filter(a => a.category === activeCategory).length})
              </span>
            </span>
          </div>

          {/* Articles */}
          {activeCategory === 'All' ? (
            <>
              {/* Non-featured in list view */}
              <div>
                {filteredArticles.map((article, i) => (
                  <ArticleRow key={article.slug} article={article} index={i} />
                ))}
              </div>
            </>
          ) : (
            <div>
              {allFiltered.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-stone-400 font-light text-sm">No articles in this category yet.</p>
                </div>
              ) : (
                allFiltered.map((article, i) => (
                  <ArticleRow key={article.slug} article={article} index={i} />
                ))
              )}
            </div>
          )}

        </section>

        {/* ── Newsletter / Strategy CTA ── */}
        <section className="bg-slate-900 py-24 md:py-40 px-6 md:px-8 relative overflow-hidden">
          {/* Background texture lines */}
          <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 border-l border-white"
                style={{ left: `${(i + 1) * 8.33}%` }}
              />
            ))}
          </div>

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">

              <div className="lg:col-span-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-8">
                  Next Step
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter leading-tight mb-8">
                  Reading is the beginning. <br />
                  <span className="italic opacity-60">Infrastructure</span> is the answer.
                </h2>
                <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
                  Every article on this blog points to the same conclusion: manual operations
                  cost care homes residents, staff, and margin. We install the systems that
                  end that permanently.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="w-full text-center inline-block bg-[#FAF9F6] text-slate-900 px-10 py-6 text-[12px] uppercase tracking-widest font-bold hover:bg-white transition-all shadow-2xl"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  to="/performance"
                  className="w-full text-center inline-block border border-slate-700 text-slate-400 px-10 py-6 text-[12px] uppercase tracking-widest font-semibold hover:border-slate-500 hover:text-slate-300 transition-all"
                >
                  View Performance Data
                </Link>

                {/* Social proof */}
                <div className="flex items-center gap-3 mt-2 pl-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-slate-500">
                      Limited installations per month
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SEO Rich Footer Strip ── */}
        <section className="px-6 md:px-8 py-14 border-t border-stone-200 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                heading: 'Occupancy',
                links: ['Enquiry Response Automation', 'Bed Fill Optimisation', 'Tour Booking Systems'],
              },
              {
                heading: 'Recruitment',
                links: ['Agency Fee Elimination', 'Automated Screening', 'Talent Pipeline Build'],
              },
              {
                heading: 'Retention',
                links: ['Staff Burnout Prevention', 'SOP Access Systems', 'Onboarding Automation'],
              },
              {
                heading: 'Operations',
                links: ['CQC Compliance Ops', 'Admin Time Recovery', 'Performance Dashboards'],
              },
            ].map((col, i) => (
              <div key={i}>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">{col.heading}</span>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-xs text-slate-500 font-light hover:text-slate-800 cursor-pointer transition-colors leading-relaxed block">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default Blog;
