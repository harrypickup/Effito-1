
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-stone-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-4">Effito</h2>
            <p className="max-w-sm text-sm leading-relaxed opacity-70">
              Growth infrastructure for modern care homes. We replace operational chaos with structured, repeatable systems that ensure stability and occupancy.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Explore</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link to="/performance" className="hover:text-white transition-colors">Performance</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">Process</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/contact" className="hover:text-white transition-colors">Strategy Call</Link></li>
              <li><span className="block mt-4 text-xs">Based in London, UK.</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center opacity-50 text-xs">
          <p>© {new Date().getFullYear()} Effito Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
