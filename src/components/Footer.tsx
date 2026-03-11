
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-stone-300 py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div className="col-span-1 sm:col-span-2">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Effito</h2>
            <p className="max-w-sm text-sm leading-relaxed opacity-70 font-light">
              Growth infrastructure for modern care homes. We replace operational chaos with structured, repeatable systems that ensure stability and occupancy.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-widest">Explore</h3>
            <ul className="space-y-2 text-sm opacity-70 font-light">
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link to="/performance" className="hover:text-white transition-colors">Performance</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">Process</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-widest">Connect</h3>
            <ul className="space-y-2 text-sm opacity-70 font-light">
              <li><Link to="/contact" className="hover:text-white transition-colors">Strategy Call</Link></li>
              <li><a href="tel:01615244023" className="hover:text-white transition-colors">0161 524 4023</a></li>
               <li><a href="email: harry@effito.com" className="hover:text-white transition-colors">harry@effito.com</a></li>
              <li><span className="block mt-4 text-[10px] uppercase tracking-widest opacity-50">Based in London, UK.</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center opacity-50 text-[10px] uppercase tracking-widest gap-6 md:gap-0">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left">
            <p>© {new Date().getFullYear()} Effito Limited.</p>
            <p>Company No. 17074094</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
