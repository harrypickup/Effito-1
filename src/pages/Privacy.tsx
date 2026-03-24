import React from 'react';

const Privacy: React.FC = () => {
  const sections = [
    { id: "s1", title: "1. Who We Are" },
    { id: "s2", title: "2. What Data We Collect" },
    { id: "s3", title: "3. Special Category Data" },
    { id: "s4", title: "4. How We Collect Data" },
    { id: "s5", title: "5. Legal Bases" },
    { id: "s6", title: "6. How We Use Data" },
    { id: "s7", title: "7. AI and Automated Processing" },
    { id: "s8", title: "8. Third Party Processors" },
    { id: "s9", title: "9. International Transfers" },
    { id: "s10", title: "10. Data Retention" },
    { id: "s11", title: "11. Your Rights" },
    { id: "s12", title: "12. SMS and PECR" },
    { id: "s13", title: "13. Call Recording" },
    { id: "s14", title: "14. Data Security" },
    { id: "s15", title: "15. Data Breach Procedure" },
    { id: "s16", title: "16. Children and Vulnerable Persons" },
    { id: "s17", title: "17. Contact and Complaints" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-8 md:mb-12">
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-indigo-600 mb-4 block">Legal</span>
          <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">Effito Ltd Privacy Policy</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] md:text-sm text-slate-500">
            <span className="font-semibold text-slate-700">Effito Ltd</span>
            <span>Version 1.0</span>
            <span>Last updated: March 2026</span>
          </div>
        </div>

        <div className="h-px bg-slate-200 w-full mb-12 md:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-6">Contents</p>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left text-[11px] text-slate-500 hover:text-indigo-600 hover:translate-x-1 transition-all py-1.5 border-l-2 border-transparent hover:border-indigo-600 pl-4"
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="lg:col-span-9 space-y-16 md:space-y-20 text-slate-600 leading-relaxed font-light">
            {/* 1 */}
            <section id="s1" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">1</span>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Who We Are</h2>
              </div>
              <p className="mb-4">Effito Ltd (Company Number 17074094) is a technology infrastructure provider specialising in the care home sector. Registered office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
                <li><strong>Enquiry Response Engine</strong> — Automated family enquiry response and qualification.</li>
                <li><strong>Staff Screening System</strong> — Automated AI voice applicant screening.</li>
                <li><strong>Staff Handbook Assistant</strong> — Messaging-based policy guidance for staff.</li>
              </ul>
            </section>

            {/* 2 */}
            <section id="s2" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">2</span>
                <h2 className="text-2xl font-semibold text-slate-900">What Personal Data We Collect</h2>
              </div>
              <p className="text-sm">We collect Identity and Contact Data, Communication Data (transcripts/recordings), and Technical logs to provide our automation services.</p>
            </section>

            {/* 5 - Table Section */}
            <section id="s5" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">5</span>
                <h2 className="text-2xl font-semibold text-slate-900">Legal Bases</h2>
              </div>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { act: "Outbound Qualification Calls", basis: "Legitimate interest" },
                      { act: "Call recording/transcription", basis: "Legitimate interest" },
                      { act: "AI screening analysis", basis: "Legitimate interest" },
                      { act: "Special category data", basis: "Public interest / Consent" },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4">{row.act}</td>
                        <td className="px-6 py-4 text-indigo-600 font-medium">{row.basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 11 - Rights Section */}
            <section id="s11" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">11</span>
                <h2 className="text-2xl font-semibold text-slate-900">Your Rights</h2>
              </div>
              <div className="space-y-4">
                {[
                  { r: "Right of Access", d: "Obtain a copy of transcripts." },
                  { r: "Right to Erasure", d: "Request deletion of your data." },
                  { r: "Right to Object", d: "Opt-out of automated sequences." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="font-semibold text-slate-900 text-sm min-w-[140px]">{item.r}</div>
                    <div className="text-sm text-slate-500">{item.d}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 17 - Contact */}
            <section id="s17" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">17</span>
                <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
              </div>
              <div className="p-8 bg-indigo-600 text-white rounded-2xl">
                <p className="text-lg font-medium mb-1">ops@effito.com</p>
                <p className="opacity-80 text-sm">71-75 Shelton Street, London, WC2H 9JQ</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
