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
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 animate-in fade-in duration-700">
        <div className="mb-8 md:mb-12">
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-indigo-600 mb-4 block">Legal</span>
          <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] md:text-sm text-slate-500">
            <span className="font-semibold text-slate-700">Effito Ltd</span>
            <span>Version 1.0</span>
            <span>Last updated: March 2026</span>
            <span>Covering all three Effito service pillars</span>
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
              <p className="mb-4">Effito Ltd (Company Number 17074094) is a technology infrastructure provider specialising in the care home sector. Our registered office is at 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ.</p>
              <p className="mb-4">Effito builds and operates automation systems on behalf of care home operators across the United Kingdom. Our services are delivered through three integrated pillars:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
                <li><strong>Enquiry Response Engine</strong> — An automated system that responds to family enquiries about care home placements within seconds, qualifies their needs, and books tours via an AI voice agent.</li>
                <li><strong>Staff Screening System</strong> — An automated system that screens job applicants for care home positions via an AI voice agent, analyses their suitability against role criteria, and categorises them for the hiring manager.</li>
                <li><strong>Staff Handbook Assistant</strong> — A messaging-based system that allows care home staff to ask questions about their workplace policies and receive instant answers sourced from their care home's official handbook.</li>
              </ul>
              <p>Effito acts as a data processor on behalf of each care home client (the data controller). In some circumstances, particularly in relation to the operation of AI voice systems and transcript storage infrastructure, Effito may also act as a data controller in its own right.</p>
            </section>

            {/* 2 */}
            <section id="s2" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">2</span>
                <h2 className="text-2xl font-semibold text-slate-900">What Personal Data We Collect</h2>
              </div>
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">2.1 Enquiry Response Engine</h3>
                  <p className="font-semibold text-slate-800 mb-2">Identity and Contact Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Full name of the enquiring family member or representative</li>
                    <li>Mobile telephone number</li>
                    <li>Email address (where provided via directory platforms)</li>
                  </ul>
                  <p className="font-semibold text-slate-800 mb-2">Enquiry and Qualification Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Name of the prospective resident</li>
                    <li>Type of care required (residential, nursing, dementia, respite)</li>
                    <li>Funding type (private, local authority, NHS continuing healthcare)</li>
                    <li>Urgency of placement required</li>
                    <li>Additional information shared voluntarily during the qualification call</li>
                  </ul>
                  <p className="font-semibold text-slate-800 mb-2">Communication Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Full transcripts and recordings of all calls made by the AI voice system</li>
                    <li>Voicemail recordings left by the system when calls go unanswered</li>
                    <li>AI-generated summaries and analysis of call content</li>
                    <li>All outbound and inbound SMS messages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">2.2 Staff Screening System</h3>
                  <p className="font-semibold text-slate-800 mb-2">Candidate Identity and Contact Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Full name of the applicant</li>
                    <li>Telephone number and email address</li>
                  </ul>
                  <p className="font-semibold text-slate-800 mb-2">Screening Call Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Full transcripts and recordings of all screening calls</li>
                    <li>AI-generated analysis of the screening call against role criteria</li>
                    <li>Extracted answers including right to work, availability, transport, and DBS status</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3 */}
            <section id="s3" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">3</span>
                <h2 className="text-2xl font-semibold text-slate-900">Special Category Data</h2>
              </div>
              <p className="mb-4 text-sm">Some data processed constitutes special category data under Article 9 of the UK GDPR, requiring higher protection.</p>
              <div className="space-y-4">
                <p className="text-sm"><strong>3.1 Enquiry Response Engine:</strong> Information about the type of care needed implies or describes the health condition of the prospective resident.</p>
                <p className="text-sm"><strong>3.2 Staff Screening System:</strong> Candidates may voluntarily disclose health conditions or DBS status (Article 10) during screening.</p>
              </div>
            </section>

            {/* 4 */}
            <section id="s4" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">4</span>
                <h2 className="text-2xl font-semibold text-slate-900">How We Collect Data</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Website enquiry forms and directory platforms (e.g. carehomes.co.uk)</li>
                <li>Telephone calls conducted by the AI voice system</li>
                <li>SMS replies and WhatsApp messages from staff</li>
                <li>Job application emails forwarded by the care home</li>
              </ul>
            </section>

            {/* 5 */}
            <section id="s5" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">5</span>
                <h2 className="text-2xl font-semibold text-slate-900">Legal Bases</h2>
              </div>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-slate-900">Processing Activity</th>
                      <th className="px-6 py-4 font-semibold text-slate-900">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { act: "Initiating calls to new enquiries", basis: "Legitimate interest" },
                      { act: "SMS follow-up sequences", basis: "Legitimate interest / Soft opt-in" },
                      { act: "AI processing of call content", basis: "Legitimate interest" },
                      { act: "Staff handbook Q&A processing", basis: "Legitimate interest" },
                      { act: "Processing health data", basis: "Substantial public interest" },
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

            {/* 6 */}
            <section id="s6" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">6</span>
                <h2 className="text-2xl font-semibold text-slate-900">How We Use Data</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>To contact families within 60 seconds of enquiry</li>
                <li>To qualify care needs and book tour appointments</li>
                <li>To screen job applicants and provide hiring managers with summaries</li>
                <li>To answer staff questions using the official handbook</li>
                <li>To detect and escalate potential emergency situations</li>
              </ul>
            </section>

            {/* 7 */}
            <section id="s7" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">7</span>
                <h2 className="text-2xl font-semibold text-slate-900">AI and Automated Processing</h2>
              </div>
              <div className="space-y-4 text-sm">
                <p><strong>7.1 AI Voice Systems:</strong> Callers are informed at the start of every call that they are speaking with an automated system.</p>
                <p><strong>7.2 Automated Routing:</strong> Decisions are based on call outcomes but do not produce legal effects under Article 22 GDPR.</p>
              </div>
            </section>

     {/* 8 */}
<section id="s8" className="scroll-mt-32">
  <div className="flex items-center gap-4 mb-6">
    <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">8</span>
    <h2 className="text-2xl font-semibold text-slate-900">Third Party Processors</h2>
  </div>
  <div className="overflow-x-auto border border-slate-200 rounded-xl">
    <table className="w-full text-left text-xs">
      <thead className="bg-slate-50 border-b border-slate-200">
        <tr>
          <th className="px-6 py-4 font-semibold text-slate-900">Processor Type</th>
          <th className="px-6 py-4 font-semibold text-slate-900">Purpose</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200">
        {[
          { name: "CRM & Automation Platform", purp: "Contact management, pipeline tracking, and workflow automation" },
          { name: "AI Voice Infrastructure", purp: "Automated voice agent calls, call recording, and transcription" },
          { name: "Telephony Provider", purp: "Call routing and phone number provisioning" },
          { name: "Data Storage Provider", purp: "Secure structured data and transcript storage" },
        ].map((row, i) => (
          <tr key={i}>
            <td className="px-6 py-4 font-semibold text-slate-900">{row.name}</td>
            <td className="px-6 py-4">{row.purp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

            {/* 9 - 13: International, Retention, Rights, SMS, Call Recording (Simplified for length) */}
            <section id="s10" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">10</span>
                <h2 className="text-2xl font-semibold text-slate-900">Data Retention</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-lg"><strong>CRM Records:</strong> 24 months</div>
                <div className="p-4 bg-slate-50 rounded-lg"><strong>Call Recordings:</strong> 12 months</div>
                <div className="p-4 bg-slate-50 rounded-lg"><strong>SMS Logs:</strong> 12 months</div>
                <div className="p-4 bg-slate-50 rounded-lg"><strong>Candidate Data:</strong> 6 months</div>
              </div>
            </section>

            {/* 14 */}
            <section id="s14" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">14</span>
                <h2 className="text-2xl font-semibold text-slate-900">Data Security</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">14.1 Access Controls</h4>
                  <p className="text-sm">CRM access is restricted to authorised Effito staff and the care home's own users. Each care home operates within a separate sub-account.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">14.2 Data in Transit</h4>
                  <p className="text-sm">All data transmitted between platforms is encrypted using TLS 1.2 or higher. All webhook payloads and API calls are transmitted over HTTPS.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">14.3 Data at Rest</h4>
                  <p className="text-sm">All database platforms encrypt data at rest using AES-256 encryption or equivalent.</p>
                </div>
              </div>
            </section>

            {/* 15 */}
            <section id="s15" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">15</span>
                <h2 className="text-2xl font-semibold text-slate-900">Data Breach Procedure</h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Upon detection of a potential breach, Effito will assess the nature and consequences</li>
                <li>Effito will notify the affected care home client without undue delay</li>
                <li>Where the care home determines a breach is notifiable, the ICO must be notified within 72 hours</li>
              </ul>
            </section>

            {/* 16 */}
            <section id="s16" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">16</span>
                <h2 className="text-2xl font-semibold text-slate-900">Children and Vulnerable Persons</h2>
              </div>
              <p className="text-sm">Care home enquiries frequently concern vulnerable adults. The Enquiry Response Engine and Staff Screening System are not designed to collect data from individuals under 18. The Staff Handbook Assistant is intended for use by employed care home staff who are 18 or over.</p>
            </section>

            {/* 17 */}
            <section id="s17" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">17</span>
                <h2 className="text-2xl font-semibold text-slate-900">Contact and Complaints</h2>
              </div>
              <div className="p-8 bg-indigo-600 text-white rounded-2xl shadow-xl">
                <h4 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4">Effito Ltd — Data Protection</h4>
                <p className="text-lg font-medium mb-1">ops@effito.com</p>
                <p className="opacity-80 text-sm mb-6">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
                <div className="h-px bg-white/20 w-full mb-6" />
                <p className="text-xs opacity-70 leading-relaxed mb-4">
                  Data subjects wishing to exercise their rights should contact the care home directly in the first instance. The care home is the data controller.
                </p>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest mb-2">Information Commissioner's Office (ICO)</h5>
                  <p className="text-xs opacity-90">Website: ico.org.uk</p>
                  <p className="text-xs opacity-90">Phone: 0303 123 1113</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
