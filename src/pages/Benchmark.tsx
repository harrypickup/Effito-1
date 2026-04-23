import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Types ──────────────────────────────────────────────────────────────────
type Rating = 'red' | 'amber' | 'green';
type Step = 'intro' | 'occupancy' | 'recruitment' | 'operations' | 'capture' | 'results';

interface MetricResult {
  label: string;
  userValue: string;
  benchmark: string;
  bestInClass: string;
  rating: Rating;
  insight: string;
  source: string;
  inverse?: boolean; // true = lower is better (turnover, agency spend, admin hours etc.)
}

// ─── Component ──────────────────────────────────────────────────────────────
const Benchmark: React.FC = () => {
  const [step, setStep] = useState<Step>('intro');
  const resultsRef = useRef<HTMLDivElement>(null);

  // Scroll to top on every step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  // Pillar 1 inputs
  const [occupancy, setOccupancy] = useState(86);
  const [weeklyFee, setWeeklyFee] = useState(1298);
  const [responseTime, setResponseTime] = useState('4-24hrs');
  const [conversionRate, setConversionRate] = useState(25);
  const [oohCoverage, setOohCoverage] = useState('none');

  // Pillar 2 inputs
  const [turnover, setTurnover] = useState(25);
  const [agencySpend, setAgencySpend] = useState(10);
  const [earlyLeaver, setEarlyLeaver] = useState(39);

  // Pillar 3 inputs
  const [adminHours, setAdminHours] = useState(5);
  const [cqcRating, setCqcRating] = useState('good');

  // Capture
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [homeName, setHomeName] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // ── Rating Logic ─────────────────────────────────────────────────────────
  // Normal:  green = val >= great, amber = val >= avg, red = below avg
  // Inverse: green = val <= great, amber = val <= avg, red = above avg
  const getRate = (val: number, avg: number, good: number, great: number, inverse = false): Rating => {
    if (inverse) {
      if (val <= great) return 'green';
      if (val <= avg)   return 'amber';
      return 'red';
    }
    if (val >= great) return 'green';
    if (val >= avg)   return 'amber';
    return 'red';
  };

  const getResponseHours = (v: string): number => {
    const map: Record<string, number> = {
      'under5min': 0.08, '5-30min': 0.3, '30-60min': 0.75,
      '1-4hrs': 2.5, '4-24hrs': 12, 'nextday': 36, 'never': 999,
    };
    return map[v] ?? 12;
  };

  const getResponseLabel = (v: string): string => {
    const map: Record<string, string> = {
      'under5min': 'Under 5 minutes', '5-30min': '5–30 minutes',
      '30-60min': '30–60 minutes', '1-4hrs': '1–4 hours',
      '4-24hrs': '4–24 hours', 'nextday': 'Next working day or longer',
      'never': 'No consistent process',
    };
    return map[v] ?? v;
  };

  // ── Generate Results ──────────────────────────────────────────────────────
  const generateResults = (): MetricResult[] => {
    const respHours = getResponseHours(responseTime);
    // Response rating: green = under 30 mins, amber = 30 mins–2 hrs, red = 2 hrs+
    const responseRating: Rating = respHours <= 0.5 ? 'green' : respHours <= 2 ? 'amber' : 'red';

    return [

      // ── PILLAR 1 ──────────────────────────────────────────────────────────
      {
        label: 'Occupancy Rate',
        userValue: `${occupancy}%`,
        benchmark: '86%',
        bestInClass: '92%+',
        // green = 92%+, amber = 86–91%, red = below 86%
        rating: getRate(occupancy, 86, 90, 92),
        insight: occupancy < 86
          ? 'Below the national average. Every additional percentage point of occupancy adds approximately £676 per week to revenue on a 40-bed home. Faster, 24/7 enquiry response is the single most impactful lever for moving this number.'
          : occupancy < 92
          ? 'At or above the national average, but there is meaningful room to grow. Homes consistently operating at 92%+ are those that respond to every enquiry within minutes — including evenings and weekends.'
          : 'Strong occupancy — well above the industry benchmark. Maintaining this requires consistent enquiry capture and structured follow-up so no lead goes cold between first contact and admission.',
        source: 'Gov.uk Capacity Tracker, DHSC Monthly Statistics 2025',
        inverse: false,
      },

      {
        label: 'Average Weekly Fee',
        userValue: `£${weeklyFee.toLocaleString()}`,
        benchmark: '£1,298',
        bestInClass: '£1,400+',
        // green = £1,400+, amber = £1,298–£1,399, red = below £1,298
        rating: getRate(weeklyFee, 1298, 1350, 1400),
        insight: weeklyFee < 1298
          ? 'Below the national self-funder average of £1,298. Homes with higher CQC ratings and professional enquiry handling typically command a 16–17% fee premium. The quality of your first contact matters as much as the quality of the home itself.'
          : weeklyFee < 1400
          ? 'In line with the national market. Homes in the premium bracket consistently deliver a professional experience from the very first enquiry call — this is often where fee expectations are set in a family\'s mind.'
          : 'Above the national average — you are in the premium segment. Sustaining this requires that the enquiry and onboarding experience matches the fee expectation from first contact onwards.',
        source: 'LaingBuisson 2024; Multiple sector sources 2025',
        inverse: false,
      },

      {
        label: 'Enquiry Response Time',
        userValue: getResponseLabel(responseTime),
        benchmark: '4+ hours (sector average)',
        bestInClass: 'Under 5 minutes',
        // green = under 30 mins, amber = 30 mins–2 hrs, red = 2 hrs+
        rating: responseRating,
        insight: responseRating === 'red'
          ? 'This is where most occupancy is lost. Families contact an average of 3.5 homes simultaneously — the first to respond with a warm, knowledgeable conversation wins the resident. An estimated 52% of care home telephone enquiries go completely unanswered. Every hour of delay significantly reduces your chances of converting the enquiry.'
          : responseRating === 'amber'
          ? 'Better than average, but still leaving revenue on the table. 18% of private self-funding residents — the highest-value leads — move in within a week of enquiry. These families need a response in minutes, not hours. A 1–2 hour delay can cost you the admission entirely.'
          : 'Best-in-class response time. You are in a very small minority of homes capturing enquiries at the moment of highest intent — when families have just submitted and are waiting. This is the single strongest driver of enquiry-to-admission conversion.',
        source: 'Paperclip care call-answering service; TrustedCare 2024; Lottie 2024',
        inverse: true,
      },

      {
        label: 'Enquiry-to-Admission Conversion',
        userValue: `${conversionRate}%`,
        benchmark: '24.7%',
        bestInClass: '35%+',
        // green = 35%+, amber = 24.7–34%, red = below 24.7%
        rating: getRate(conversionRate, 24.7, 30, 35),
        insight: conversionRate < 24.7
          ? 'Below the sector average of 24.7% across 27,886 enquiries. The most common causes are slow first response, no enquiry qualification, and no structured follow-up. Only 4% of enquiries older than 10 weeks ever convert — the window closes fast.'
          : conversionRate < 35
          ? 'At or above the sector average. Homes consistently hitting 35%+ qualify every enquiry on first contact — understanding care type, funding situation, and urgency before booking a tour. This ensures every tour is a genuine opportunity.'
          : 'Excellent conversion rate — well above the sector average. Structured follow-up sequences will help maintain this by keeping warm leads engaged throughout their full decision window.',
        source: 'TrustedCare 2023 Market Review (27,886 records, 34 operators)',
        inverse: false,
      },

      {
        label: 'Out-of-Hours Enquiry Coverage',
        userValue: oohCoverage === 'none' ? 'No coverage' : oohCoverage === 'partial' ? 'Partial (answerphone / limited)' : 'Full 24/7 coverage',
        benchmark: 'No coverage (majority of homes)',
        bestInClass: 'Full 24/7 live or automated response',
        rating: oohCoverage === 'full' ? 'green' : oohCoverage === 'partial' ? 'amber' : 'red',
        insight: oohCoverage === 'none'
          ? '24% of all care enquiries arrive outside standard business hours — evenings, weekends, and bank holidays. These are often the most urgent: a family making a crisis decision on a Sunday evening. Every one of these currently waits until Monday morning, by which time a competitor has already called back and booked the tour.'
          : oohCoverage === 'partial'
          ? 'Answerphone coverage is better than nothing, but research shows only 20% of callers leave a voicemail — the other 80% move on immediately. A live or automated response that calls back within minutes captures the full 24% of enquiries that arrive out of hours.'
          : 'Full 24/7 coverage puts you in a very small minority of care homes. You are capturing enquiries that most competitors miss entirely — including the highest-urgency, fastest-moving families who have already decided to proceed.',
        source: 'TrustedCare 2023 Care Home Market Review',
        inverse: false,
      },

      // ── PILLAR 2 ──────────────────────────────────────────────────────────
      {
        label: 'Annual Staff Turnover',
        userValue: `${turnover}%`,
        benchmark: '25%',
        bestInClass: '<18%',
        // inverse — lower is better
        // green = 18% or under, amber = 19–25%, red = above 25%
        rating: getRate(turnover, 25, 20, 18, true),
        insight: turnover > 25
          ? 'Above the sector average of 25%. Each replacement hire costs £3,600 and takes an average of 76 days. At this rate, recruitment is generating a significant recurring cost and operational disruption that compounds each quarter.'
          : turnover <= 18
          ? 'Well below the sector average — strong retention. This reduces agency dependency, improves continuity of care for residents, and is a positive indicator for CQC inspectors who view staff longevity as a marker of a well-run home.'
          : 'At or near the sector average. Every percentage point of reduction avoids approximately £3,600 in recruitment cost and 76 days of vacancy. Faster candidate screening and better first-year staff support are the primary levers.',
        source: 'CQC State of Care 2024/25; Skills for Care 2024/25',
        inverse: true,
      },

      {
        label: 'Agency Spend (% of Staffing Budget)',
        userValue: `${agencySpend}%`,
        benchmark: '10%',
        bestInClass: '<5%',
        // inverse — lower is better
        // green = 5% or under, amber = 6–10%, red = above 10%
        rating: getRate(agencySpend, 10, 7, 5, true),
        insight: agencySpend > 10
          ? 'Above the sector average of 10%. Agency staff cost 25–40% more per shift than permanent staff. The most effective way to reduce this is not negotiating agency rates — it is shortening the time between a job application arriving and the candidate starting their first shift, so vacancies close before emergency agency cover becomes necessary.'
          : agencySpend <= 5
          ? 'Minimal agency reliance — well below the sector average. This directly protects margins and improves care consistency, which CQC inspectors increasingly assess as a quality indicator in inspections.'
          : 'At or below the sector average. Further reduction comes from building a faster permanent hiring pipeline that closes roles before emergency agency bookings are needed.',
        source: 'Sona.com staffing analysis; CQC State of Care 2024/25',
        inverse: true,
      },

      {
        label: 'Early Leaver Rate (Within Year 1)',
        userValue: `${earlyLeaver}%`,
        benchmark: '39%',
        bestInClass: '<20%',
        // inverse — lower is better
        // threshold adjusted: avg set to 40 so 39% correctly returns amber not red
        // green = under 20%, amber = 20–39%, red = 40%+
        rating: getRate(earlyLeaver, 40, 28, 20, true),
        insight: earlyLeaver >= 40
          ? 'Above the national average of 39%. Nearly 4 in 10 care workers leave before their first anniversary, each triggering a full replacement cycle of £3,600 and 76 days. The root cause is almost always poor screening — candidates who were not properly assessed for values fit or realistic job expectations arrive unprepared and leave quickly.'
          : earlyLeaver <= 20
          ? 'Strong first-year retention — well below the sector average of 39%. This compounds positively: lower early attrition means less repeat recruitment spend, less agency dependency, and better continuity of care for residents.'
          : 'At or below the sector average. Early leavers most commonly cite feeling unsupported and poor onboarding. Structured screening for genuine motivation before hiring, and instant policy access from day one, both reduce this significantly.',
        source: 'CQC State of Care 2024/25; Skills for Care 2024/25',
        inverse: true,
      },

      // ── PILLAR 3 ──────────────────────────────────────────────────────────
      {
        label: 'Manager Admin Hours Per Day',
        userValue: `${adminHours} hrs`,
        benchmark: '5–6 hours',
        bestInClass: '<2 hours',
        // inverse — lower is better
        // green = under 2 hrs, amber = 2–5 hrs, red = 5 hrs+
        rating: getRate(adminHours, 5, 3, 2, true),
        insight: adminHours >= 5
          ? 'At the sector average — and a significant operational drag. Florence app research of 222 care managers found 20% spending 7–8 hours daily on admin. Enquiry handling, recruitment screening, and answering staff policy queries are the three largest time sinks, and all three are highly automatable.'
          : adminHours <= 2
          ? 'Highly efficient manager operation — well below the sector average. Your leadership team is spending time on care quality, compliance, and team development rather than administrative tasks. This is a genuine competitive advantage that compounds over time.'
          : 'Below the sector average of 5–6 hours. Every additional hour reclaimed from admin is an hour available for resident care, CQC readiness, and team leadership. The three biggest admin time sinks in care homes are enquiry handling, recruitment, and staff policy queries.',
        source: 'Florence app survey, 222 NHS/social care managers, Sep 2023',
        inverse: true,
      },

      {
        label: 'CQC Rating',
        userValue: cqcRating === 'outstanding' ? 'Outstanding' : cqcRating === 'good' ? 'Good' : 'Requires Improvement',
        benchmark: 'Good',
        bestInClass: 'Outstanding',
        // not inverse — outstanding is best, RI is worst
        rating: cqcRating === 'outstanding' ? 'green' : cqcRating === 'good' ? 'amber' : 'red',
        insight: cqcRating === 'ri'
          ? 'Requires Improvement directly impacts your ability to attract self-funders and command premium fees. Homes rated Outstanding charge 16–17% more per week on average. The path forward is through demonstrable systems: staff who can evidence policy knowledge, responsive management, and consistent documented care quality.'
          : cqcRating === 'good'
          ? 'Good is the expected baseline — but Outstanding is where the commercial difference is felt. Homes rated Outstanding command 16–17% higher fees and attract a higher proportion of self-funders. The inspection evidence for Outstanding typically includes systematic staff support, documented knowledge access, and proactive leadership.'
          : 'Outstanding puts you in an elite group with a clear commercial advantage. Sustaining this rating requires ongoing evidence of staff engagement, policy compliance, and proactive operational systems that inspectors can observe and document.',
        source: 'Grant Thornton Care Homes for the Elderly 2025; CQC',
        inverse: false,
      },
    ];
  };

  // ── Score Calculation ─────────────────────────────────────────────────────
  const getOverallScore = (results: MetricResult[]): { score: number; greens: number; ambers: number; reds: number } => {
    let greens = 0, ambers = 0, reds = 0;
    results.forEach(r => {
      if (r.rating === 'green') greens++;
      else if (r.rating === 'amber') ambers++;
      else reds++;
    });
    const score = Math.round((greens * 10 + ambers * 5) / results.length * 10);
    return { score, greens, ambers, reds };
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 80) return 'Market Leader';
    if (score >= 60) return 'Above Average';
    if (score >= 40) return 'Average';
    return 'Below Average';
  };

  // ── GHL Submission ────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);

    try {
      await fetch('YOUR_GHL_WEBHOOK_URL_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          care_home_name: homeName,
          source: 'benchmark_tool',
          occupancy,
          weekly_fee: weeklyFee,
          response_time: responseTime,
          conversion_rate: conversionRate,
          ooh_coverage: oohCoverage,
          turnover,
          agency_spend: agencySpend,
          early_leaver: earlyLeaver,
          admin_hours: adminHours,
          cqc_rating: cqcRating,
        }),
      });
    } catch {
      // Fail silently — still show results
    }

    setSubmitting(false);
    setStep('results');
  };

  // ── Shared UI Components ──────────────────────────────────────────────────
  const RatingDot: React.FC<{ rating: Rating; size?: string }> = ({ rating, size = 'w-2 h-2' }) => (
    <div className={`${size} rounded-full flex-shrink-0 ${
      rating === 'green' ? 'bg-emerald-500' : rating === 'amber' ? 'bg-amber-500' : 'bg-red-400'
    }`} />
  );

  // For inverse metrics (lower = better), the label flips for green/red.
  // Amber is always "At Benchmark" regardless of direction.
  const RatingLabel: React.FC<{ rating: Rating; inverse?: boolean }> = ({ rating, inverse = false }) => {
    const label = () => {
      if (rating === 'amber') return 'At Benchmark';
      if (inverse) return rating === 'green' ? 'Better Than Benchmark' : 'Worse Than Benchmark';
      return rating === 'green' ? 'Above Benchmark' : 'Below Benchmark';
    };
    return (
      <span className={`text-[9px] font-bold uppercase tracking-[0.3em] ${
        rating === 'green' ? 'text-emerald-600' : rating === 'amber' ? 'text-amber-600' : 'text-red-400'
      }`}>
        {label()}
      </span>
    );
  };

  const SliderInput: React.FC<{
    label: string; value: number; onChange: (v: number) => void;
    min: number; max: number; step?: number; unit?: string; prefix?: string;
  }> = ({ label, value, onChange, min, max, step: s = 1, unit = '', prefix = '' }) => (
    <div className="py-8 border-b border-stone-100 last:border-0">
      <div className="flex justify-between items-baseline mb-4">
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900">{label}</span>
        <span className="text-2xl font-serif text-slate-900 tracking-tight">{prefix}{value.toLocaleString()}{unit}</span>
      </div>
      <input
        type="range" min={min} max={max} step={s} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-[3px] bg-stone-200 rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-900
          [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#FAF9F6]
          [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_#1E1E2A] [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110
          [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-slate-900 [&::-moz-range-thumb]:border-[3px]
          [&::-moz-range-thumb]:border-[#FAF9F6] [&::-moz-range-thumb]:cursor-pointer"
      />
      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-stone-400">{prefix}{min.toLocaleString()}{unit}</span>
        <span className="text-[10px] text-stone-400">{prefix}{max.toLocaleString()}{unit}</span>
      </div>
    </div>
  );

  const SelectInput: React.FC<{
    label: string; value: string; onChange: (v: string) => void;
    options: { value: string; label: string }[];
  }> = ({ label, value, onChange, options }) => (
    <div className="py-8 border-b border-stone-100 last:border-0">
      <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-900 block mb-4">{label}</span>
      <div className="grid grid-cols-1 gap-2">
        {options.map(o => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className={`text-left px-5 py-3.5 text-sm transition-all duration-200 border ${
              value === o.value
                ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                : 'bg-white text-slate-600 border-stone-200 hover:border-slate-400 font-light'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );

  const NavButton: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => (
    <button
      onClick={onClick}
      className="px-10 py-5 text-[13px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 shadow-xl"
    >
      {label}
    </button>
  );

  const StepIndicator: React.FC<{ current: number; total: number }> = ({ current, total }) => (
    <div className="flex gap-2 items-center mb-12">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`h-[3px] transition-all duration-500 ${
          i <= current ? 'bg-slate-900 w-8' : 'bg-stone-200 w-4'
        }`} />
      ))}
      <span className="text-[10px] font-mono text-stone-400 ml-2">{current + 1}/{total}</span>
    </div>
  );

  // ── Derived State ─────────────────────────────────────────────────────────
  const results = generateResults();
  const { score, greens, ambers, reds } = getOverallScore(results);
  const worstMetric = results.find(r => r.rating === 'red') ?? null;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="bg-[#FAF9F6] relative overflow-x-hidden min-h-screen">

      <Helmet>
        <title>Care Home Benchmark | Effito</title>
        <meta name="description" content="Benchmark your care home across 10 critical metrics against verified UK industry data. Free tool from Effito — see exactly where you stand in 2 minutes." />
      </Helmet>

      {/* Print styles for PDF download */}
      <style>{`
        @media print {
          header, footer, button, nav, .no-print { display: none !important; }
          body { background: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          section { break-inside: avoid; }
          .bg-slate-900 { background-color: #0F172A !important; }
          .text-white { color: white !important; }
          .text-emerald-400, .text-emerald-500, .text-emerald-600 { color: #059669 !important; }
          .text-amber-400, .text-amber-500, .text-amber-600 { color: #D97706 !important; }
          .text-red-400 { color: #F87171 !important; }
          .bg-emerald-500 { background-color: #059669 !important; }
          .bg-amber-500 { background-color: #D97706 !important; }
          .bg-red-400 { background-color: #F87171 !important; }
        }
      `}</style>

      <AnimatePresence mode="wait">

        {/* ── INTRO ─────────────────────────────────────────────────────── */}
        {step === 'intro' && (
          <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <section className="relative px-6 md:px-8 py-16 md:py-32 max-w-[1400px] mx-auto min-h-[calc(100vh-73px)] flex items-center">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                <div>
                  <span className="inline-block text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.4em] text-stone-400 mb-8">
                    Free Industry Tool
                  </span>
                  <h1 className="text-5xl md:text-[5.5rem] font-serif leading-[0.9] tracking-tighter text-slate-900 mb-8">
                    How does your home <span className="italic">compare?</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-light">
                    Benchmark your care home across 10 critical metrics against verified UK industry data. Takes 2 minutes. Results are immediate and personalised.
                  </p>
                  <NavButton onClick={() => setStep('occupancy')} label="Start Benchmarking" />
                </div>

                <div className="hidden lg:block">
                  <div className="border border-stone-200 bg-white">
                    <div className="bg-slate-900 px-8 py-5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">What You'll Receive</span>
                    </div>
                    {[
                      { num: '01', title: 'RAG Performance Rating', desc: 'Red, amber, or green across every metric — instantly see where you stand.' },
                      { num: '02', title: 'Verified Industry Benchmarks', desc: 'Your numbers compared against data from CQC, TrustedCare, Skills for Care, and Gov.uk.' },
                      { num: '03', title: 'Personalised Insight Per Metric', desc: 'Specific analysis of what each score means for your home and what moves the needle.' },
                      { num: '04', title: 'Overall Performance Score', desc: 'A single number that tells you exactly how your operation compares to the market.' },
                    ].map((item, i) => (
                      <div key={i} className="px-8 py-6 border-b border-stone-100 last:border-0 group hover:bg-stone-50 transition-colors flex gap-6">
                        <span className="text-[10px] font-mono text-stone-300 mt-1 shrink-0">{item.num}</span>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-1.5">{item.title}</h4>
                          <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ── STEP 1: OCCUPANCY ─────────────────────────────────────────── */}
        {step === 'occupancy' && (
          <motion.div key="occ" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-3xl mx-auto">
              <StepIndicator current={0} total={4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Section 01 — Occupancy & Revenue</span>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter mb-4">Enquiry Performance.</h2>
              <p className="text-slate-500 font-light mb-12 max-w-lg">How effectively your home captures and converts enquiries into residents.</p>

              <div className="bg-white border border-stone-200 px-8 md:px-10">
                <SliderInput label="Current Occupancy Rate" value={occupancy} onChange={setOccupancy} min={60} max={100} unit="%" />
                <SliderInput label="Average Weekly Fee (Self-funder)" value={weeklyFee} onChange={setWeeklyFee} min={600} max={2500} step={25} prefix="£" />
                <SelectInput label="Average Enquiry Response Time" value={responseTime} onChange={setResponseTime} options={[
                  { value: 'under5min', label: 'Under 5 minutes' },
                  { value: '5-30min', label: '5–30 minutes' },
                  { value: '30-60min', label: '30–60 minutes' },
                  { value: '1-4hrs', label: '1–4 hours' },
                  { value: '4-24hrs', label: '4–24 hours' },
                  { value: 'nextday', label: 'Next working day or longer' },
                  { value: 'never', label: 'No consistent process' },
                ]} />
                <SliderInput label="Enquiry-to-Admission Conversion Rate" value={conversionRate} onChange={setConversionRate} min={5} max={50} unit="%" />
                <SelectInput label="Out-of-Hours Enquiry Coverage" value={oohCoverage} onChange={setOohCoverage} options={[
                  { value: 'none', label: 'None — enquiries wait until next business day' },
                  { value: 'partial', label: 'Partial — answerphone or occasional staff' },
                  { value: 'full', label: 'Full 24/7 live or automated response' },
                ]} />
              </div>

              <div className="flex gap-6 mt-10 items-center">
                <NavButton onClick={() => setStep('recruitment')} label="Next — Recruitment" />
                <button onClick={() => setStep('intro')} className="text-sm text-stone-400 hover:text-slate-900 transition-colors font-light">Back</button>
              </div>
            </section>
          </motion.div>
        )}

        {/* ── STEP 2: RECRUITMENT ───────────────────────────────────────── */}
        {step === 'recruitment' && (
          <motion.div key="rec" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-3xl mx-auto">
              <StepIndicator current={1} total={4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Section 02 — Recruitment & Staffing</span>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter mb-4">Workforce Stability.</h2>
              <p className="text-slate-500 font-light mb-12 max-w-lg">How your recruitment pipeline and staff retention compare to the sector.</p>

              <div className="bg-white border border-stone-200 px-8 md:px-10">
                <SliderInput label="Annual Staff Turnover Rate" value={turnover} onChange={setTurnover} min={5} max={60} unit="%" />
                <SliderInput label="Agency Spend (% of Total Staffing Budget)" value={agencySpend} onChange={setAgencySpend} min={0} max={30} unit="%" />
                <SliderInput label="Early Leaver Rate (Leave Within Year 1)" value={earlyLeaver} onChange={setEarlyLeaver} min={5} max={70} unit="%" />
              </div>

              <div className="flex gap-6 mt-10 items-center">
                <NavButton onClick={() => setStep('operations')} label="Next — Operations" />
                <button onClick={() => setStep('occupancy')} className="text-sm text-stone-400 hover:text-slate-900 transition-colors font-light">Back</button>
              </div>
            </section>
          </motion.div>
        )}

        {/* ── STEP 3: OPERATIONS ────────────────────────────────────────── */}
        {step === 'operations' && (
          <motion.div key="ops" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-3xl mx-auto">
              <StepIndicator current={2} total={4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Section 03 — Operations & Compliance</span>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter mb-4">Manager Efficiency.</h2>
              <p className="text-slate-500 font-light mb-12 max-w-lg">How much of your leadership capacity is spent on care versus administration.</p>

              <div className="bg-white border border-stone-200 px-8 md:px-10">
                <SliderInput label="Manager Admin Hours Per Day" value={adminHours} onChange={setAdminHours} min={1} max={8} step={0.5} unit=" hrs" />
                <SelectInput label="Current CQC Rating" value={cqcRating} onChange={setCqcRating} options={[
                  { value: 'outstanding', label: 'Outstanding' },
                  { value: 'good', label: 'Good' },
                  { value: 'ri', label: 'Requires Improvement' },
                ]} />
              </div>

              <div className="flex gap-6 mt-10 items-center">
                <NavButton onClick={() => setStep('capture')} label="Get My Results" />
                <button onClick={() => setStep('recruitment')} className="text-sm text-stone-400 hover:text-slate-900 transition-colors font-light">Back</button>
              </div>
            </section>
          </motion.div>
        )}

        {/* ── EMAIL CAPTURE ─────────────────────────────────────────────── */}
        {step === 'capture' && (
          <motion.div key="cap" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-xl mx-auto">
              <StepIndicator current={3} total={4} />
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tighter mb-4">Your report is ready.</h2>
              <p className="text-slate-500 font-light mb-12">Enter your details to unlock your personalised benchmark results.</p>

              <div className="bg-white border border-stone-200 p-8 md:p-10 space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">Your Name</label>
                  <input
                    type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name"
                    className="w-full bg-stone-50 border border-stone-200 px-5 py-4 text-sm text-slate-900 font-light
                      focus:outline-none focus:border-slate-900 transition-colors placeholder:text-stone-300"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">Work Email</label>
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@carehome.co.uk"
                    className="w-full bg-stone-50 border border-stone-200 px-5 py-4 text-sm text-slate-900 font-light
                      focus:outline-none focus:border-slate-900 transition-colors placeholder:text-stone-300"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
                    Care Home Name <span className="text-stone-300 normal-case tracking-normal font-light">(optional)</span>
                  </label>
                  <input
                    type="text" value={homeName} onChange={e => setHomeName(e.target.value)} placeholder="e.g. Maple Lodge Care Home"
                    className="w-full bg-stone-50 border border-stone-200 px-5 py-4 text-sm text-slate-900 font-light
                      focus:outline-none focus:border-slate-900 transition-colors placeholder:text-stone-300"
                  />
                </div>
              </div>

              <div className="flex gap-6 mt-10 items-center">
                <button
                  onClick={handleSubmit}
                  disabled={!name.trim() || !email.trim() || submitting}
                  className={`px-10 py-5 text-[13px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl ${
                    name.trim() && email.trim() && !submitting
                      ? 'bg-slate-900 text-white hover:bg-slate-800 cursor-pointer'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {submitting ? 'Processing...' : 'View My Results'}
                </button>
                <button onClick={() => setStep('operations')} className="text-sm text-stone-400 hover:text-slate-900 transition-colors font-light">Back</button>
              </div>

              <p className="text-[11px] text-stone-400 mt-6 font-light leading-relaxed">
                Your data is private and will not be shared with third parties. We may occasionally send relevant care home insights — unsubscribe any time.
              </p>
            </section>
          </motion.div>
        )}

        {/* ── RESULTS ───────────────────────────────────────────────────── */}
        {step === 'results' && (
          <motion.div key="res" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>

            {/* Score Header */}
            <section className="bg-slate-900 py-16 md:py-24 px-6 md:px-8">
              <div className="max-w-[1400px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mb-12"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-6">
                    {homeName ? `${homeName} — Benchmark Report` : 'Your Benchmark Report'}
                  </span>
                  <div className="text-8xl md:text-[10rem] font-serif text-white tracking-tighter leading-none mb-4">{score}</div>
                  <div className="text-[13px] uppercase tracking-[0.3em] font-semibold text-slate-400 mb-2">{getScoreLabel(score)}</div>
                  <div className="text-sm text-slate-500 font-light">out of 100</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="grid grid-cols-3 gap-0 max-w-md mx-auto border border-slate-800"
                >
                  <div className="text-center py-5 border-r border-slate-800">
                    <div className="text-3xl font-serif text-emerald-400 mb-1">{greens}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Strong</div>
                  </div>
                  <div className="text-center py-5 border-r border-slate-800">
                    <div className="text-3xl font-serif text-amber-400 mb-1">{ambers}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Average</div>
                  </div>
                  <div className="text-center py-5">
                    <div className="text-3xl font-serif text-red-400 mb-1">{reds}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Opportunity</div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Results Detail */}
            <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1400px] mx-auto" ref={resultsRef}>

              {/* Biggest Opportunity */}
              {worstMetric && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
                  className="mb-12 md:mb-16 border border-red-200 bg-red-50/30"
                >
                  <div className="bg-slate-900 px-8 py-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">Your Biggest Opportunity</span>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight mb-3">{worstMetric.label}</h3>
                    <div className="flex items-baseline gap-4 mb-5">
                      <span className="text-4xl font-serif text-red-400">{worstMetric.userValue}</span>
                      <span className="text-sm text-stone-400 font-light">vs. best-in-class {worstMetric.bestInClass}</span>
                    </div>
                    <p className="text-sm text-slate-600 font-light leading-[1.8] max-w-2xl">{worstMetric.insight}</p>
                  </div>
                </motion.div>
              )}

              {/* Header + Download */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                <div>
                  <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter mb-4">Detailed Breakdown.</h2>
                  <p className="text-slate-500 font-light max-w-xl">Each metric scored against verified industry data with personalised analysis.</p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="no-print shrink-0 border border-slate-900 text-slate-900 px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-3"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Report
                </button>
              </div>

              {/* Metric Rows */}
              <div className="space-y-0 border border-stone-200">
                {results.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    className="border-b border-stone-200 last:border-0 group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      <div className="lg:col-span-4 p-6 md:p-8 bg-white group-hover:bg-stone-50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <RatingDot rating={r.rating} />
                          <RatingLabel rating={r.rating} inverse={r.inverse} />
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-900 mb-6">{r.label}</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-baseline">
                            <span className="text-[10px] text-stone-400 uppercase tracking-widest">Your Home</span>
                            <span className="text-xl font-serif text-slate-900 tracking-tight">{r.userValue}</span>
                          </div>
                          <div className="h-px bg-stone-100" />
                          <div className="flex justify-between items-baseline">
                            <span className="text-[10px] text-stone-400 uppercase tracking-widest">Sector Avg</span>
                            <span className="text-sm text-stone-400 font-light">{r.benchmark}</span>
                          </div>
                          <div className="flex justify-between items-baseline">
                            <span className="text-[10px] text-stone-400 uppercase tracking-widest">Best-in-class</span>
                            <span className="text-sm text-emerald-600 font-light">{r.bestInClass}</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-8 p-6 md:p-8 bg-stone-50 group-hover:bg-stone-100/50 transition-colors lg:border-l border-stone-200">
                        <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-3">Analysis</span>
                        <p className="text-sm text-slate-600 font-light leading-[1.8] mb-4">{r.insight}</p>
                        <span className="text-[10px] text-stone-400 italic">Source: {r.source}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 py-20 md:py-32 px-6 md:px-8 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-6">What Comes Next</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight">
                  Turn these insights into <span className="italic">results.</span>
                </h2>
                <p className="text-slate-400 text-base md:text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
                  {reds > 3
                    ? 'Your home has significant room for improvement across multiple areas. A 30-minute strategy call will show you exactly which metrics to prioritise and what the revenue impact looks like.'
                    : reds > 0
                    ? 'Your home is performing well in some areas but has specific gaps that are costing you revenue. A 30-minute call will show you how to close them.'
                    : 'Strong performance across the board. Let\'s explore what moving from good to exceptional looks like — and what that means in revenue terms for your home.'
                  }
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-[#FAF9F6] text-slate-900 px-12 py-6 text-[14px] uppercase tracking-widest font-semibold hover:bg-white transition-all shadow-2xl"
                >
                  Book a Strategy Call
                </a>
                <div className="mt-6">
                  <span className="text-[11px] text-slate-500">Free 30-minute walkthrough · No commitment · Personalised to your results</span>
                </div>
              </div>
            </section>

            {/* Sources */}
            <section className="py-12 px-6 md:px-8 border-t border-stone-200">
              <div className="max-w-[1400px] mx-auto">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-stone-400 block mb-4">Sources & Methodology</span>
                <p className="text-[11px] text-stone-400 font-light leading-relaxed max-w-4xl">
                  Benchmarks sourced from: Gov.uk Capacity Tracker / DHSC Monthly Statistics (2025); TrustedCare 2023 Care Home Market Review (50,000+ enquiries, 42 operators, 27,886 records); TrustedCare 2024 — How & When Care Seekers Get in Touch; Paperclip care call-answering service; CQC State of Care 2024/25; Skills for Care State of the Adult Social Care Workforce 2024/25; Grant Thornton — Care Homes for the Elderly 2025; Florence app manager survey (222 NHS/social care managers, Sep 2023); Sona.com staffing analysis; LaingBuisson 2024. RAG ratings are calculated relative to published sector averages. Individual home results will vary.
                </p>
              </div>
            </section>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default Benchmark;
