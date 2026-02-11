
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Infrastructure', path: '/infrastructure' },
    { label: 'Performance', path: '/performance' },
    { label: 'The Logic', path: '/how-it-works' },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-xl border-b border-stone-200/50 px-8 py-5"
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-medium tracking-tighter text-slate-900 flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-slate-900 rounded-full" />
          EFFITO
        </Link>
        
        <nav className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[13px] uppercase tracking-widest font-medium transition-colors hover:text-slate-900 ${
                location.pathname === item.path ? 'text-slate-900' : 'text-slate-400'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-slate-900 text-slate-900 px-6 py-2.5 text-[13px] uppercase tracking-widest font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            Consultation
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
