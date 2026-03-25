import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Effito</title>
        <meta name="description" content="View Effito's terms of service governing the use of our care home automation and growth infrastructure platform." />
      </Helmet>

      <div className="bg-[#FAF9F6] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 animate-in fade-in duration-700">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-indigo-600 mb-4 block">Legal</span>
            <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">Terms of Service</h1>
            <p className="text-sm md:text-base text-slate-500 font-light">
              <span className="font-semibold text-slate-700">Last updated: March 2026</span> &nbsp;·&nbsp;
              These terms govern your use of the Effito website.
            </p>
          </div>

          <div className="h-px bg-slate-200 w-full mb-12 md:mb-16" />

          {/* Content */}
          <div className="space-y-12 md:space-y-16 text-slate-600 leading-relaxed font-light">
            {/* 1 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">01</span>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Who We Are</h2>
              </div>
              <p className="mb-4">
                This website is operated by <strong className="text-slate-900 font-semibold">Effito Ltd</strong>, a company registered in England and Wales.
                Our website address is <Link to="/" className="text-indigo-600 hover:text-indigo-700 transition-colors underline underline-offset-4">effito.com</Link>. If you have any questions
                about these terms you can reach us at <a href="mailto:contact@effito.com" className="text-indigo-600 hover:text-indigo-700 transition-colors underline underline-offset-4">contact@effito.com</a>.
              </p>
              <p>
                By accessing or using this website you agree to be bound by these terms. If you do not agree,
                please do not use the site.
              </p>
            </section>

            {/* 2 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">02</span>
                <h2 className="text-2xl font-semibold text-slate-900">What This Website Is For</h2>
              </div>
              <p className="mb-4">
                This website provides information about Effito Ltd and the services we offer to care home
                operators. Visitors can learn about our products, book a discovery call, and get in touch
                with our team.
              </p>
              <p>
                Nothing on this website constitutes professional, legal, financial, or regulatory advice.
                All content is provided for information purposes only.
              </p>
            </section>

            {/* 3 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">03</span>
                <h2 className="text-2xl font-semibold text-slate-900">Acceptable Use</h2>
              </div>
              <p className="mb-4">You may use this website for lawful purposes only. You must not:</p>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
                <li>Use the site in any way that violates applicable local, national, or international law or regulation</li>
                <li>Attempt to gain unauthorised access to any part of the website or its underlying systems</li>
                <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
                <li>Knowingly introduce viruses, trojans, or other malicious or harmful material</li>
                <li>Reproduce, duplicate, copy, or resell any part of the website without our express written consent</li>
                <li>Use automated tools to scrape, crawl, or extract data from this website</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">04</span>
                <h2 className="text-2xl font-semibold text-slate-900">Intellectual Property</h2>
              </div>
              <p className="mb-4">
                All content on this website — including text, graphics, logos, design, and code — is the
                property of Effito Ltd or its licensors and is protected by applicable intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, or create derivative works from any content on this site
                without our prior written permission.
              </p>
            </section>

            {/* 5 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">05</span>
                <h2 className="text-2xl font-semibold text-slate-900">Disclaimer</h2>
              </div>
              <p className="mb-4">
                This website and its content are provided on an "as is" basis. Effito Ltd makes no warranties,
                express or implied, regarding the accuracy, completeness, or fitness for purpose of any
                information on this site.
              </p>
              <p>
                We reserve the right to update, change, or remove any content at any time without notice.
              </p>
            </section>

            {/* 6 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">06</span>
                <h2 className="text-2xl font-semibold text-slate-900">Limitation of Liability</h2>
              </div>
              <p className="mb-4">
                To the fullest extent permitted by law, Effito Ltd shall not be liable for any indirect,
                incidental, or consequential loss or damage arising from your use of, or inability to use,
                this website or any content on it.
              </p>
              <p>
                Nothing in these terms excludes or limits our liability for death or personal injury caused
                by our negligence, fraud, or any other liability that cannot be excluded under English law.
              </p>
            </section>

            {/* 7 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">07</span>
                <h2 className="text-2xl font-semibold text-slate-900">Third Party Links</h2>
              </div>
              <p>
                This website may contain links to third party websites. These links are provided for your
                convenience only. Effito Ltd has no control over the content of those sites and accepts no
                responsibility for them or for any loss or damage that may arise from your use of them.
              </p>
            </section>

            {/* 8 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">08</span>
                <h2 className="text-2xl font-semibold text-slate-900">Booking a Call</h2>
              </div>
              <p className="mb-4">
                When you book a discovery call through this website, you are agreeing to be contacted by
                Effito Ltd and, where applicable, by our AI-assisted communications system. By submitting
                your contact details you confirm that you are authorised to do so and that the information
                you provide is accurate.
              </p>
              <p>
                For full details of how we handle your personal data, please see our <Link to="/privacy" className="text-indigo-600 hover:text-indigo-700 transition-colors underline underline-offset-4">Privacy Policy</Link>.
              </p>
            </section>

            {/* 9 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">09</span>
                <h2 className="text-2xl font-semibold text-slate-900">Changes to These Terms</h2>
              </div>
              <p>
                We may update these terms from time to time. The date at the top of this page will always
                reflect when the terms were last revised. Your continued use of the website after any changes
                constitutes your acceptance of the updated terms.
              </p>
            </section>

            {/* 10 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">10</span>
                <h2 className="text-2xl font-semibold text-slate-900">Governing Law</h2>
              </div>
              <p>
                These terms are governed by and construed in accordance with the laws of England and Wales.
                Any disputes arising in connection with these terms shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>

            {/* 11 */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg">11</span>
                <h2 className="text-2xl font-semibold text-slate-900">Contact Us</h2>
              </div>
              <p>
                If you have any questions about these terms, please contact us at <a href="mailto:contact@effito.com" className="text-indigo-600 hover:text-indigo-700 transition-colors underline underline-offset-4">contact@effito.com</a> or write to us at
                Effito Ltd, England.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
