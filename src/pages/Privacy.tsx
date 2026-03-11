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
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Enquiry Response Engine</strong> — An automated system that responds to family enquiries about care home placements within seconds, qualifies their needs, and books tours via an AI voice agent.</li>
                <li><strong>Staff Screening System</strong> — An automated system that screens job applicants for care home positions via an AI voice agent, analyses their suitability against role criteria, and categorises them for the hiring manager.</li>
                <li><strong>Staff Handbook Assistant</strong> — A messaging-based system that allows care home staff to ask questions about their workplace policies and receive instant answers sourced from their care home's official handbook.</li>
              </ul>
              <p>Effito acts as a data processor on behalf of each care home client (the data controller). In some circumstances, particularly in relation to the operation of AI voice systems and transcript storage infrastructure, Effito may also act as a data controller in its own right. This distinction is established in the Data Processing Agreement (DPA) executed with each care home client before services commence.</p>
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
                    <li>Source of enquiry (website form, care home directory, or other)</li>
                  </ul>
                  <p className="font-semibold text-slate-800 mb-2">Communication Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Full transcripts and recordings of all calls made by the AI voice system</li>
                    <li>Voicemail recordings left by the system when calls go unanswered</li>
                    <li>AI-generated summaries and analysis of call content</li>
                    <li>All outbound and inbound SMS messages</li>
                  </ul>
                  <p className="font-semibold text-slate-800 mb-2">Appointment and Pipeline Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Tour appointment date, time and location</li>
                    <li>Pipeline stage and status</li>
                    <li>Call outcome classification and contact tags</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">2.2 Staff Screening System</h3>
                  <p className="font-semibold text-slate-800 mb-2">Candidate Identity and Contact Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Full name of the applicant</li>
                    <li>Telephone number</li>
                    <li>Email address</li>
                  </ul>
                  <p className="font-semibold text-slate-800 mb-2">Application Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Role applied for</li>
                    <li>Application source (e.g. Indeed, care home website)</li>
                    <li>Cover letter or application notes</li>
                    <li>AI-extracted candidate details from the application</li>
                  </ul>
                  <p className="font-semibold text-slate-800 mb-2">Screening Call Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Full transcripts and recordings of all screening calls</li>
                    <li>AI-generated analysis of the screening call against role criteria</li>
                    <li>Screening category assigned (meets all criteria, meets some criteria, incomplete information)</li>
                    <li>Extracted answers including right to work status, availability, transport, DBS status, and start date</li>
                    <li>Screening summary provided to the hiring manager</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">2.3 Staff Handbook Assistant</h3>
                  <p className="font-semibold text-slate-800 mb-2">Staff Identity Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Staff member's name (as provided via messaging platform)</li>
                    <li>Messaging platform user identifier (e.g. WhatsApp number)</li>
                    <li>Care home staff code used for registration</li>
                    <li>Associated care home identifier</li>
                  </ul>
                  <p className="font-semibold text-slate-800 mb-2">Query and Handbook Data</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>All questions submitted by staff to the handbook assistant</li>
                    <li>All AI-generated responses provided to staff</li>
                    <li>Whether a query was flagged as an emergency</li>
                    <li>Timestamp of each interaction</li>
                    <li>Care home staff handbooks uploaded for processing</li>
                    <li>Vector embeddings generated from handbook content (stored for semantic search)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">2.4 Technical and System Data (All Services)</h3>
                  <ul className="list-disc pl-6 space-y-1 mb-4 text-sm">
                    <li>Contact and record identifiers assigned within CRM and database systems</li>
                    <li>Location identifiers linking records to specific care home sub-accounts</li>
                    <li>Timestamps for all system interactions</li>
                    <li>Call duration and connection status</li>
                    <li>Webhook and API transaction logs</li>
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
              <p className="mb-4">Some data processed through our services constitutes special category data under Article 9 of the UK GDPR, requiring a higher standard of protection and an explicit legal basis for processing.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">3.1 Enquiry Response Engine</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Care type required — information about the type of care needed directly implies or describes the health condition of the prospective resident</li>
                    <li>Urgency of placement — may imply a medical situation, recent health event, or deteriorating condition</li>
                    <li>Existing medical or care needs — information voluntarily shared by the caller during the qualification call</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">3.2 Staff Screening System</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>DBS check status — the context of disclosure may imply information about criminal convictions, which is subject to additional protections under Article 10 of the UK GDPR</li>
                    <li>Health-related information — candidates may voluntarily disclose health conditions during the screening call</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6">The legal basis for processing special category data is substantial public interest under Schedule 1, Part 2 of the Data Protection Act 2018 (health and social care provision) and explicit consent where obtained at the point of enquiry or application.</p>
            </section>

            {/* 4 */}
            <section id="s4" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">4</span>
                <h2 className="text-2xl font-semibold text-slate-900">How We Collect Data</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">4.1 Enquiry Response Engine</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Website enquiry forms submitted directly into the CRM system via secure webhook</li>
                    <li>Care home directory platforms (e.g. carehomes.co.uk) via email notifications forwarded to Effito's processing address</li>
                    <li>Telephone calls conducted by the AI voice system</li>
                    <li>SMS replies from enquiring parties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">4.2 Staff Screening System</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Job application emails forwarded by the care home to Effito's dedicated application processing email address</li>
                    <li>Telephone calls conducted by the AI screening agent</li>
                    <li>AI analysis of screening call transcripts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">4.3 Staff Handbook Assistant</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Staff registration via WhatsApp using a care home-specific staff code</li>
                    <li>Questions submitted by staff via WhatsApp messaging</li>
                    <li>Staff handbooks provided by care home management for ingestion into the knowledge system</li>
                  </ul>
                </div>
              </div>
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
                      { act: "SMS follow-up sequences", basis: "Legitimate interest / Soft opt-in (PECR)" },
                      { act: "Call recording and transcript storage", basis: "Legitimate interest" },
                      { act: "AI processing of call content", basis: "Legitimate interest" },
                      { act: "Processing job applications via email", basis: "Legitimate interest" },
                      { act: "AI screening calls to job applicants", basis: "Legitimate interest" },
                      { act: "AI analysis of screening transcripts", basis: "Legitimate interest" },
                      { act: "Staff handbook Q&A processing", basis: "Legitimate interest" },
                      { act: "Emergency detection and escalation", basis: "Legitimate interest / Vital interest" },
                      { act: "Processing special category health data", basis: "Substantial public interest / Explicit consent" },
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
              <p className="mb-4">Personal data collected through Effito's services is used exclusively for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>To initiate contact with families who have submitted a care home enquiry within 60 seconds of receipt</li>
                <li>To qualify the care needs and circumstances of the prospective resident</li>
                <li>To book tour appointments and confirm them with the enquiring family</li>
                <li>To send follow-up SMS communications as part of the enquiry management process</li>
                <li>To screen job applicants and provide hiring managers with structured candidate summaries</li>
                <li>To answer staff questions about workplace policies using the care home's official handbook</li>
                <li>To detect and escalate potential emergency situations identified during handbook queries</li>
                <li>To store call transcripts and recordings for quality assurance and service delivery</li>
                <li>To provide care home operators with accurate data on enquiry conversion and recruitment activity</li>
              </ul>
            </section>

            {/* 7 */}
            <section id="s7" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">7</span>
                <h2 className="text-2xl font-semibold text-slate-900">AI and Automated Processing</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">7.1 AI Voice Systems</h4>
                  <p className="text-sm">Both the Enquiry Response Engine and the Staff Screening System conduct calls using AI voice agents. Callers are informed at the start of every call that they are speaking with an automated system.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">7.2 Automated Routing Decisions</h4>
                  <p className="text-sm">The system makes automated routing decisions based on call outcomes. These decisions do not produce legal effects and do not significantly affect individuals within the meaning of Article 22 of the UK GDPR.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">7.3 AI-Assisted Email Processing</h4>
                  <p className="text-sm">Enquiries and job applications received via email are processed using AI language model APIs to extract structured data fields.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">7.4 Handbook Semantic Search</h4>
                  <p className="text-sm">The Staff Handbook Assistant uses AI embedding models to convert handbook content into vector representations stored in a dedicated vector database.</p>
                </div>
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
                      <th className="px-6 py-4 font-semibold text-slate-900">Processor</th>
                      <th className="px-6 py-4 font-semibold text-slate-900">Location</th>
                      <th className="px-6 py-4 font-semibold text-slate-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { name: "Go High Level (GHL)", loc: "USA", purp: "CRM, pipeline management, SMS, calendar" },
                      { name: "n8n", loc: "EU / USA", purp: "Workflow orchestration, data routing" },
                      { name: "Retell AI", loc: "USA", purp: "AI voice agent, call handling, transcription" },
                      { name: "Twilio", loc: "USA", purp: "SIP trunking, call routing" },
                      { name: "Supabase", loc: "USA", purp: "Call transcript storage, data persistence" },
                      { name: "Anthropic (Claude API)", loc: "USA", purp: "AI-assisted extraction of data from emails" },
                      { name: "Google (Gmail)", loc: "USA", purp: "Receipt of inbound directory and application emails" },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 font-semibold text-slate-900">{row.name}</td>
                        <td className="px-6 py-4">{row.loc}</td>
                        <td className="px-6 py-4">{row.purp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9 */}
            <section id="s9" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">9</span>
                <h2 className="text-2xl font-semibold text-slate-900">International Transfers</h2>
              </div>
              <p className="mb-4">The majority of third party processors engaged by Effito are headquartered in the United States of America. All transfers of personal data to US-based processors are conducted under one or more of the following transfer mechanisms:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>UK International Data Transfer Agreements (IDTAs) where available</li>
                <li>UK Extension to EU Standard Contractual Clauses where processors have adopted these</li>
                <li>Processor-specific Data Processing Agreements with appropriate safeguards</li>
              </ul>
            </section>

            {/* 10 */}
            <section id="s10" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">10</span>
                <h2 className="text-2xl font-semibold text-slate-900">Data Retention</h2>
              </div>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-slate-900">Data Type</th>
                      <th className="px-6 py-4 font-semibold text-slate-900">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { type: "CRM contact records", period: "24 months" },
                      { type: "Call recordings", period: "12 months" },
                      { type: "Call transcripts", period: "12 months" },
                      { type: "Screening results and analysis", period: "12 months" },
                      { type: "Candidate application data", period: "6 months after position filled" },
                      { type: "SMS message logs", period: "12 months" },
                      { type: "Staff handbook Q&A logs", period: "12 months" },
                      { type: "Staff user registration data", period: "Duration of employment" },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4">{row.type}</td>
                        <td className="px-6 py-4 font-medium text-indigo-600">{row.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 11 */}
            <section id="s11" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">11</span>
                <h2 className="text-2xl font-semibold text-slate-900">Your Rights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Right of Access (Article 15)", desc: "You may request a copy of all personal data held about you across all systems. Effito will respond within one calendar month." },
                  { title: "Right to Rectification (Article 16)", desc: "You may request correction of inaccurate personal data. Transcription errors will be corrected promptly." },
                  { title: "Right to Erasure (Article 17)", desc: "You may request deletion of your personal data from all systems within 30 days of a verified request." },
                  { title: "Right to Restriction (Article 18)", desc: "You may request that processing is restricted pending a dispute about accuracy or lawfulness." },
                  { title: "Right to Object (Article 21)", desc: "Where processing is based on legitimate interest, you may object. Opt out of SMS by replying STOP." },
                  { title: "Automated Decisions (Article 22)", desc: "You may contact Effito to request manual review of any automated classification." },
                ].map((right, idx) => (
                  <div key={idx} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">{right.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{right.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 12 */}
            <section id="s12" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">12</span>
                <h2 className="text-2xl font-semibold text-slate-900">SMS and PECR</h2>
              </div>
              <p className="mb-4">SMS communications are used within the Enquiry Response Engine only. All SMS messages are subject to the Privacy and Electronic Communications Regulations 2003 (PECR).</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Messages are sent to individuals who have submitted an enquiry (soft opt-in)</li>
                <li>Recipients may opt out at any time by replying STOP, UNSUBSCRIBE, CANCEL, END, or QUIT</li>
                <li>Messages are restricted to 8:00am to 9:00pm, seven days a week</li>
              </ul>
            </section>

            {/* 13 */}
            <section id="s13" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">13</span>
                <h2 className="text-2xl font-semibold text-slate-900">Call Recording</h2>
              </div>
              <p className="mb-4">Both the Enquiry Response Engine and the Staff Screening System record all calls. The following applies to both services:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Callers are informed at the start of every call that the call is being recorded</li>
                <li>Call recordings are stored within the AI voice platform and are accessible to Effito and the care home client</li>
                <li>Full text transcripts are generated and stored in Effito's database</li>
                <li>Recordings and transcripts are retained for 12 months and then permanently deleted</li>
              </ul>
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
