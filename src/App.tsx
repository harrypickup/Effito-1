import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Infrastructure from './pages/Infrastructure';
import Performance from './pages/Performance';
import Logic from './pages/Logic';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import WhoItsFor from './pages/WhoItsFor';
import Blog from './pages/Blog';
import WhyCareHomesLoseResidents from './pages/blog/WhyCareHomesLoseResidents';
import AgencyNursingFees from './pages/blog/AgencyNursingFees';
import CareHomeAutomationGuide from './pages/blog/CareHomeAutomationGuide';
import CQCComplianceAutomation from './pages/blog/CQCComplianceAutomation';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/logic" element={<Logic />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/why-care-homes-lose-residents-slow-enquiry-response" element={<WhyCareHomesLoseResidents />} />
            <Route path="/blog/agency-nursing-costs-how-to-eliminate-them" element={<AgencyNursingFees />} />
            <Route path="/blog/care-home-automation-guide-2025" element={<CareHomeAutomationGuide />} />
            <Route path="/blog/cqc-compliance-automation-staff-policies" element={<CQCComplianceAutomation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
