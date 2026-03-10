
import React from 'react';

const Challenges: React.FC = () => {
  const deepDives = [
    {
      title: "The Friction of Time",
      description: "Families searching for care are often in crisis. They contact multiple homes at once. The home that responds first with clear, compassionate, and structured information wins. A delay of just four hours often means the lead is already gone."
    },
    {
      title: "The Recruitment Trap",
      description: "Good staff are hard to find and even harder to keep. If your response to an applicant takes days, they’ve already accepted an interview elsewhere. A slow recruitment funnel doesn't just cost time; it forces a reliance on agency staff, eroding your margins."
    },
    {
      title: "The Admin Paradox",
      description: "As your home grows, so does the paperwork. Instead of senior staff focusing on care quality and team culture, they are buried in enquiry logs and scheduling calls. Efficiency isn't found in working harder, but in building systems that handle the routine."
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">The Context</span>
          <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 md:mb-10 tracking-tight leading-tight">
            Why most care homes remain reactive.
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-12 md:mb-16 font-light">
            The care sector is unique. It is a high trust, high stakes environment where the quality of your first interaction dictates the quality of the long term relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-stone-200 pt-12 md:pt-16">
          {deepDives.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 md:mb-6">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 p-8 md:p-12 bg-stone-100 rounded-lg text-center border border-stone-200">
          <p className="text-xl md:text-2xl font-medium text-slate-800 italic text-balance">
            "These problems aren’t caused by people — they’re caused by systems."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Challenges;
