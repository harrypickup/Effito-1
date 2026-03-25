
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Infrastructure', path: '/infrastructure' },
    { label: 'Performance', path: '/performance' },
    { label: 'Challenges', path: '/challenges' },
    { label: 'The Logic', path: '/logic' },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-stone-200/50 px-6 md:px-8 py-4 md:py-5"
    >
           <Link to="/" className="text-xl md:text-2xl font-serif italic tracking-tighter text-slate-900 flex items-center gap-2">
          <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-slate-900 rounded-full" />
          Effito
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900 p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#FAF9F6] border-t border-stone-200/50 overflow-hidden"
          >
            <div className="flex flex-col space-y-8 p-8 pt-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-2xl uppercase tracking-[0.2em] font-light transition-colors ${
                    location.pathname === item.path ? 'text-slate-900' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-8 border-t border-stone-200">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-slate-900 text-white text-center px-6 py-5 text-[11px] uppercase tracking-[0.3em] font-bold shadow-xl"
                >
                  Book Strategy Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
