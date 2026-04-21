import React, { useState } from 'react';
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
}

// ─── Benchmark Data ─────────────────────────────────────────────────────────
const BENCHMARKS = {
  occupancy: { avg: 86, good: 90, great: 92 },
  weeklyFee: { avg: 1298, good: 1350, great: 1400 },
  responseTime: { avg: 4, good: 1, great: 0.08 }, // hours — 0.08 ≈ 5 mins
  conversionRate: { avg: 24.7, good: 30, great: 35 },
  oohCoverage: { none: 0, partial: 1, full: 2 },
  turnover: { avg: 25, good: 20, great: 15 },
  agencySpend: { avg: 10, good: 7, great: 5 },
  earlyLeaver: { avg: 39, good: 28, great: 20 },
  adminHours: { avg: 5.5, good: 3, great: 2 },
  cqcRating: { ri: 0, good: 1, outstanding: 2 },
};

// ─── Component ──────────────────────────────────────────────────────────────
const Benchmark: React.FC = () => {
  const [step, setStep] = useState<Step>('intro');

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

  // ── Rating Logic ──
  const getRate = (val: number, avg: number, good: number, great: number, inverse = false): Rating => {
    if (inverse) {
      if (val <= great) return 'green';
      if (val <= good) return 'amber';
      return 'red';
    }
    if (val >= great) return 'green';
    if (val >= good) return 'amber';
    return 'red';
  };

  const getResponseHours = (v: string): number => {
    const map: Record<string, number> = { 'under5min': 0.08, '5-30min': 0.3, '30-60min': 0.75, '1-4hrs': 2.5, '4-24hrs': 12, 'nextday': 36, 'never': 999 };
    return map[v] ?? 12;
  };

  const getResponseLabel = (v: string): string => {
    const map: Record<string, string> = { 'under5min': 'Under 5 minutes', '5-30min': '5–30 minutes', '30-60min': '30–60 minutes', '1-4hrs': '1–4 hours', '4-24hrs': '4–24 hours', 'nextday': 'Next working day', 'never': 'No consistent process' };
    return map[v] ?? v;
  };

  // ── Generate Results ──
  const generateResults = (): MetricResult[] => {
    const respHours = getResponseHours(responseTime);

    return [
      {
        label: 'Occupancy Rate',
        userValue: `${occupancy}%`,
        benchmark: '86%',
        bestInClass: '92%+',
        rating: getRate(occupancy, 86, 90, 92),
        insight: occupancy < 86
          ? 'Below the national average. Every 1% increase in occupancy adds approximately £676 per week to your revenue. Faster enquiry response is the single most impactful lever for improving this metric.'
          : occupancy < 92
          ? 'At or above average, but there\'s room to grow. Homes operating at 92%+ are typically those that respond to every enquiry within minutes — not hours.'
          : 'Strong occupancy. You\'re operating above the industry benchmark. Maintaining this requires consistent enquiry capture and follow-up, especially outside business hours.',
        source: 'Gov.uk Capacity Tracker, DHSC Monthly Statistics 2025',
      },
      {
        label: 'Average Weekly Fee',
        userValue: `£${weeklyFee.toLocaleString()}`,
        benchmark: '£1,298',
        bestInClass: '£1,400+',
        rating: getRate(weeklyFee, 1298, 1350, 1400),
        insight: weeklyFee < 1298
          ? 'Below the national self-funder average. Homes with higher CQC ratings and professional enquiry handling typically command a 16–17% premium on fees.'
          : weeklyFee < 1400
          ? 'In line with the market. Homes that consistently demonstrate professionalism from first contact can justify premium positioning.'
          : 'Above average — you\'re positioned in the premium segment. Maintaining this requires an enquiry experience that matches the fee expectation.',
        source: 'LaingBuisson 2024; Multiple sector sources 2025',
      },
      {
        label: 'Enquiry Response Time',
        userValue: getResponseLabel(responseTime),
        benchmark: '4+ hours (avg)',
        bestInClass: 'Under 5 minutes',
        rating: respHours <= 0.5 ? 'green' : respHours <= 2 ? 'amber' : 'red',
        insight: respHours > 4
          ? 'This is where most occupancy is lost. Families contact 3.5 homes simultaneously — the first to respond with a warm, knowledgeable conversation wins the resident. 52% of care home calls go completely unanswered.'
          : respHours > 0.5
          ? 'Better than average, but still leaving revenue on the table. 18% of self-funders move in within a week of enquiry. These high-value leads need a response in minutes, not hours.'
          : 'Best-in-class response time. This is the single strongest driver of enquiry-to-admission conversion.',
        source: 'Paperclip care call-answering service; TrustedCare 2024',
      },
      {
        label: 'Enquiry-to-Admission Conversion',
        userValue: `${conversionRate}%`,
        benchmark: '24.7%',
        bestInClass: '35%+',
        rating: getRate(conversionRate, 24.7, 30, 35),
        insight: conversionRate < 24.7
          ? 'Below the sector average of 24.7% across 27,886 enquiries. The most common causes are slow response, lack of qualification, and no structured follow-up. Only 4% of enquiries older than 10 weeks ever convert.'
          : conversionRate < 35
          ? 'At or above average. Homes achieving 35%+ typically qualify every enquiry on first contact — understanding care type, funding, and urgency before booking a tour.'
          : 'Excellent conversion. You\'re outperforming most operators. Structured follow-up sequences will help maintain this.',
        source: 'TrustedCare 2023 Market Review (27,886 records, 34 operators)',
      },
      {
        label: 'Out-of-Hours Coverage',
        userValue: oohCoverage === 'none' ? 'No coverage' : oohCoverage === 'partial' ? 'Partial (answerphone / limited)' : 'Full 24/7 coverage',
        benchmark: 'No coverage (most homes)',
        bestInClass: 'Full 24/7 live response',
        rating: oohCoverage === 'full' ? 'green' : oohCoverage === 'partial' ? 'amber' : 'red',
        insight: oohCoverage === 'none'
          ? '24% of all care enquiries arrive outside business hours. These are often the most urgent — a family in crisis on a Sunday evening. Every one of these currently waits until Monday, by which time a competitor has responded.'
          : oohCoverage === 'partial'
          ? 'Answerphone coverage is better than nothing, but only 20% of callers leave a voicemail. A live or automated response captures significantly more of the 24% of enquiries that arrive out of hours.'
          : 'Full coverage puts you in a small minority of homes. You\'re capturing enquiries that most competitors miss entirely.',
        source: 'TrustedCare 2023 Care Home Market Review',
      },
      {
        label: 'Annual Staff Turnover',
        userValue: `${turnover}%`,
        benchmark: '25%',
        bestInClass: '<18%',
        rating: getRate(turnover, 25, 20, 18, true),
        insight: turnover > 25
          ? 'Above the sector average. Each replacement hire costs £3,600 and takes 76 days. At your rate, this is creating a significant recurring cost and operational drag.'
          : turnover > 18
          ? 'At or below average, but every percentage point reduction saves approximately £3,600 per avoided hire. Faster screening reduces vacancy windows and improves hire quality.'
          : 'Well below sector average. Strong retention reduces agency dependency and improves continuity of care — a key CQC focus area.',
        source: 'CQC State of Care 2024/25; Skills for Care 2024/25',
      },
      {
        label: 'Agency Spend (% of Staffing)',
        userValue: `${agencySpend}%`,
        benchmark: '10%',
        bestInClass: '<5%',
        rating: getRate(agencySpend, 10, 7, 5, true),
        insight: agencySpend > 10
          ? 'Above sector average. Agency staff cost 25–40% more per shift than permanent staff. The fastest way to reduce this is shortening the time between application and first shift — not negotiating agency rates.'
          : agencySpend > 5
          ? 'At or below average. Further reduction comes from faster permanent hiring pipelines that close vacancies before agency cover is needed.'
          : 'Minimal agency reliance. This protects your margins and improves care consistency, which CQC increasingly values in inspections.',
        source: 'Sona.com staffing analysis; CQC State of Care 2024/25',
      },
      {
        label: 'Early Leaver Rate (Within Year 1)',
        userValue: `${earlyLeaver}%`,
        benchmark: '39%',
        bestInClass: '<20%',
        rating: getRate(earlyLeaver, 39, 28, 20, true),
        insight: earlyLeaver > 39
          ? 'Above the national average. Nearly 4 in 10 care workers leave within their first year. Each one triggers a full replacement cycle — £3,600, 76 days, and more agency cover. Better screening for values fit before hiring is the primary lever.'
          : earlyLeaver > 20
          ? 'Below average. Early leavers most commonly cite feeling unsupported and poor onboarding. Structured screening for genuine motivation and instant access to policy guidance on day one both reduce this.'
          : 'Strong first-year retention. This compounds — lower turnover means less recruitment spend, less agency dependency, and better CQC outcomes.',
        source: 'CQC State of Care 2024/25; Skills for Care 2024/25',
      },
      {
        label: 'Manager Admin Hours Per Day',
        userValue: `${adminHours} hours`,
        benchmark: '5–6 hours',
        bestInClass: '<2 hours',
        rating: getRate(adminHours, 5.5, 3, 2, true),
        insight: adminHours >= 5
          ? 'In line with the 20% of managers spending 7–8 hours daily on admin. Enquiry handling, recruitment screening, and staff queries are the three largest time sinks — and the three most automatable.'
          : adminHours >= 3
          ? 'Below the worst of the sector, but still significant. Every hour of admin is an hour not spent on resident care, compliance, or team leadership.'
          : 'Efficient manager operation. Your leadership team is focused on care quality rather than administrative overhead.',
        source: 'Florence app survey, 222 NHS/social care managers, Sep 2023',
      },
      {
        label: 'CQC Rating',
        userValue: cqcRating === 'outstanding' ? 'Outstanding' : cqcRating === 'good' ? 'Good' : 'Requires Improvement',
        benchmark: 'Good',
        bestInClass: 'Outstanding',
        rating: cqcRating === 'outstanding' ? 'green' : cqcRating === 'good' ? 'amber' : 'red',
        insight: cqcRating === 'ri'
          ? 'Requires Improvement ratings correlate with lower occupancy and reduced ability to attract self-funders. Homes with Outstanding ratings command 16–17% higher fees on average.'
          : cqcRating === 'good'
          ? 'Good is the baseline expectation. Moving to Outstanding requires demonstrable evidence of proactive staff engagement, compliance culture, and responsive leadership — areas that systematic infrastructure can support.'
          : 'Outstanding rating puts you in an elite group. This rating supports premium fee positioning and higher occupancy. Maintaining it requires continued evidence of staff knowledge and compliance.',
        source: 'Grant Thornton Care Homes 2025; CQC',
      },
    ];
  };

  // ── Score calculation ──
  const getOverallScore = (results: MetricResult[]): { score: number; greens: number; ambers: number; reds: number } => {
    let greens = 0, ambers = 0, reds = 0;
    results.forEach(r => { if (r.rating === 'green') greens++; else if (r.rating === 'amber') ambers++; else reds++; });
    const score = Math.round((greens * 10 + ambers * 5) / results.length * 10);
    return { score, greens, ambers, reds };
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 80) return 'Market Leader';
    if (score >= 60) return 'Above Average';
    if (score >= 40) return 'Average';
    return 'Below Average';
  };

  // ── GHL Submission ──
  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);

    // Send to GHL webhook — replace URL with your actual GHL webhook
    try {
      await fetch('https://hooks.zapier.com/hooks/catch/YOUR_GHL_WEBHOOK_ID', {
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

  // ── Shared Components ──
  const RatingDot: React.FC<{ rating: Rating; size?: string }> = ({ rating, size = 'w-2 h-2' }) => (
    <div className={`${size} rounded-full ${
      rating === 'green' ? 'bg-emerald-500' : rating === 'amber' ? 'bg-amber-500' : 'bg-red-400'
    }`} />
  );

  const RatingLabel: React.FC<{ rating: Rating }> = ({ rating }) => (
    <span className={`text-[9px] font-bold uppercase tracking-[0.3em] ${
      rating === 'green' ? 'text-emerald-600' : rating === 'amber' ? 'text-amber-600' : 'text-red-400'
    }`}>
      {rating === 'green' ? 'Above Benchmark' : rating === 'amber' ? 'At Benchmark' : 'Below Benchmark'}
    </span>
  );

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
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-900
          [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#FAF9F6]
          [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_#1E1E2A] [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
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

  const NavButton: React.FC<{ onClick: () => void; label: string; primary?: boolean }> = ({ onClick, label, primary = true }) => (
    <button
      onClick={onClick}
      className={`px-10 py-5 text-[13px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 ${
        primary
          ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl'
          : 'text-slate-900 border-b border-slate-900 pb-1 hover:opacity-70'
      }`}
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

  // ── Render Steps ──
  const stepIndex = { intro: -1, occupancy: 0, recruitment: 1, operations: 2, capture: 3, results: 4 };

  const results = generateResults();
  const { score, greens, ambers, reds } = getOverallScore(results);

  return (
    <div className="bg-[#FAF9F6] relative overflow-x-hidden min-h-screen">

      <AnimatePresence mode="wait">

        {/* ── INTRO ── */}
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
                    Benchmark your care home across 10 critical metrics against verified industry data. Takes 2 minutes. Results are immediate and personalised.
                  </p>
                  <NavButton onClick={() => setStep('occupancy')} label="Start Benchmarking" />
                </div>

                <div className="hidden lg:block">
                  <div className="border border-stone-200 bg-white">
                    <div className="bg-slate-900 px-8 py-5 flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">What You'll Receive</span>
                    </div>
                    {[
                      { num: '01', title: 'RAG Performance Rating', desc: 'Red, amber, or green across every metric — instantly see where you stand.' },
                      { num: '02', title: 'Industry Benchmarks', desc: 'Your numbers compared against verified data from CQC, TrustedCare, Skills for Care and Gov.uk.' },
                      { num: '03', title: 'Personalised Insights', desc: 'Specific recommendations based on where your home sits relative to the sector.' },
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

        {/* ── STEP 1: OCCUPANCY ── */}
        {step === 'occupancy' && (
          <motion.div key="occ" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-3xl mx-auto">
              <StepIndicator current={0} total={4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Occupancy & Revenue</span>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter mb-4">Enquiry Performance.</h2>
              <p className="text-slate-500 font-light mb-12 max-w-lg">How effectively your home captures and converts enquiries into residents.</p>

              <div className="bg-white border border-stone-200 px-8 md:px-10">
                <SliderInput label="Current Occupancy Rate" value={occupancy} onChange={setOccupancy} min={60} max={100} unit="%" />
                <SliderInput label="Average Weekly Fee" value={weeklyFee} onChange={setWeeklyFee} min={600} max={2500} step={25} prefix="£" />
                <SelectInput label="Average Enquiry Response Time" value={responseTime} onChange={setResponseTime} options={[
                  { value: 'under5min', label: 'Under 5 minutes' },
                  { value: '5-30min', label: '5–30 minutes' },
                  { value: '30-60min', label: '30–60 minutes' },
                  { value: '1-4hrs', label: '1–4 hours' },
                  { value: '4-24hrs', label: '4–24 hours' },
                  { value: 'nextday', label: 'Next working day' },
                  { value: 'never', label: 'No consistent process' },
                ]} />
                <SliderInput label="Enquiry-to-Admission Conversion Rate" value={conversionRate} onChange={setConversionRate} min={5} max={50} unit="%" />
                <SelectInput label="Out-of-Hours Enquiry Coverage" value={oohCoverage} onChange={setOohCoverage} options={[
                  { value: 'none', label: 'No coverage — enquiries wait until next business day' },
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

        {/* ── STEP 2: RECRUITMENT ── */}
        {step === 'recruitment' && (
          <motion.div key="rec" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-3xl mx-auto">
              <StepIndicator current={1} total={4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Recruitment & Staffing</span>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter mb-4">Workforce Stability.</h2>
              <p className="text-slate-500 font-light mb-12 max-w-lg">How your recruitment pipeline and retention compare to the sector.</p>

              <div className="bg-white border border-stone-200 px-8 md:px-10">
                <SliderInput label="Annual Staff Turnover Rate" value={turnover} onChange={setTurnover} min={5} max={50} unit="%" />
                <SliderInput label="Agency Spend (% of Staffing Budget)" value={agencySpend} onChange={setAgencySpend} min={0} max={25} unit="%" />
                <SliderInput label="Early Leaver Rate (Leave Within Year 1)" value={earlyLeaver} onChange={setEarlyLeaver} min={5} max={60} unit="%" />
              </div>

              <div className="flex gap-6 mt-10 items-center">
                <NavButton onClick={() => setStep('operations')} label="Next — Operations" />
                <button onClick={() => setStep('occupancy')} className="text-sm text-stone-400 hover:text-slate-900 transition-colors font-light">Back</button>
              </div>
            </section>
          </motion.div>
        )}

        {/* ── STEP 3: OPERATIONS ── */}
        {step === 'operations' && (
          <motion.div key="ops" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-3xl mx-auto">
              <StepIndicator current={2} total={4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-4">Operations & Compliance</span>
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter mb-4">Manager Efficiency.</h2>
              <p className="text-slate-500 font-light mb-12 max-w-lg">How much of your manager's time is spent on care vs. administration.</p>

              <div className="bg-white border border-stone-200 px-8 md:px-10">
                <SliderInput label="Manager Admin Hours Per Day" value={adminHours} onChange={setAdminHours} min={1} max={8} step={0.5} unit=" hrs" />
                <SelectInput label="Current CQC Rating" value={cqcRating} onChange={setCqcRating} options={[
                  { value: 'outstanding', label: 'Outstanding' },
                  { value: 'good', label: 'Good' },
                  { value: 'ri', label: 'Requires Improvement' },
                ]} />
              </div>

              <div className="flex gap-6 mt-10 items-center">
                <NavButton onClick={() => setStep('capture')} label="Get Your Results" />
                <button onClick={() => setStep('recruitment')} className="text-sm text-stone-400 hover:text-slate-900 transition-colors font-light">Back</button>
              </div>
            </section>
          </motion.div>
        )}

        {/* ── EMAIL CAPTURE ── */}
        {step === 'capture' && (
          <motion.div key="cap" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-xl mx-auto">
              <StepIndicator current={3} total={4} />
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tighter mb-4">Your report is ready.</h2>
              <p className="text-slate-500 font-light mb-12">Enter your details below to see your personalised benchmark results.</p>

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
                  <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">Email Address</label>
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@carehome.co.uk"
                    className="w-full bg-stone-50 border border-stone-200 px-5 py-4 text-sm text-slate-900 font-light
                      focus:outline-none focus:border-slate-900 transition-colors placeholder:text-stone-300"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">Care Home Name <span className="text-stone-300">(optional)</span></label>
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
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {submitting ? 'Processing...' : 'View My Results'}
                </button>
                <button onClick={() => setStep('operations')} className="text-sm text-stone-400 hover:text-slate-900 transition-colors font-light">Back</button>
              </div>

              <p className="text-[11px] text-stone-400 mt-6 font-light leading-relaxed">
                Your data is private and will not be shared. We'll send you occasional insights on care home performance — unsubscribe any time.
              </p>
            </section>
          </motion.div>
        )}

        {/* ── RESULTS ── */}
        {step === 'results' && (
          <motion.div key="res" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>

            {/* Score Header */}
            <section className="bg-slate-900 py-16 md:py-24 px-6 md:px-8">
              <div className="max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-6">Your Benchmark Report</span>
                  <div className="text-8xl md:text-[10rem] font-serif text-white tracking-tighter leading-none mb-4">{score}</div>
                  <div className="text-[13px] uppercase tracking-[0.3em] font-semibold text-slate-400 mb-2">{getScoreLabel(score)}</div>
                  <div className="text-sm text-slate-500 font-light">out of 100</div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="grid grid-cols-3 gap-0 max-w-md mx-auto border border-slate-800">
                  <div className="text-center py-5 border-r border-slate-800">
                    <div className="text-3xl font-serif text-emerald-400 mb-1">{greens}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Above</div>
                  </div>
                  <div className="text-center py-5 border-r border-slate-800">
                    <div className="text-3xl font-serif text-amber-400 mb-1">{ambers}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">At Avg</div>
                  </div>
                  <div className="text-center py-5">
                    <div className="text-3xl font-serif text-red-400 mb-1">{reds}</div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Below</div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Results Grid */}
            <section className="py-16 md:py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
              <div className="mb-12 md:mb-16">
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter mb-4">Detailed Breakdown.</h2>
                <p className="text-slate-500 font-light max-w-xl">Each metric scored against verified industry data with personalised analysis.</p>
              </div>

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

                      {/* Metric header */}
                      <div className="lg:col-span-4 p-6 md:p-8 bg-white group-hover:bg-stone-50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <RatingDot rating={r.rating} />
                          <RatingLabel rating={r.rating} />
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

                      {/* Insight */}
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
                    ? 'Your home has significant room for improvement across multiple areas. A 30-minute strategy call will show you exactly which metrics to prioritise and how.'
                    : reds > 0
                    ? 'Your home is performing well in some areas but has specific gaps that are costing you revenue. Let\'s focus on the ones with the highest impact.'
                    : 'Strong performance across the board. Let\'s explore what it would take to move from good to exceptional — and what that means in revenue terms.'
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
                  Benchmarks sourced from: Gov.uk Capacity Tracker / DHSC Monthly Statistics (2025); TrustedCare 2023 Care Home Market Review (50,000+ enquiries, 42 operators, 27,886 records); TrustedCare 2024 — How & When Care Seekers Get in Touch; Paperclip care call-answering service; CQC State of Care 2024/25; Skills for Care State of the Adult Social Care Workforce 2024/25; Grant Thornton — Care Homes for the Elderly 2025; Florence app manager survey (222 NHS/social care managers, Sep 2023); Sona.com staffing analysis; LaingBuisson 2024. RAG ratings are calculated relative to published sector averages. Individual results will vary.
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
