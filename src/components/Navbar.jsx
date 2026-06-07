import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          whileHover={{ scale: 1.05 }} 
          className="text-2xl font-bold"
        >
          <span className="gradient-text">Mahmoud</span>
          <span className="text-white"> Hosni</span>
        </motion.a>

        <div className="hidden md:flex space-x-8 space-x-reverse items-center">
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={link.href} 
              className="nav-link text-lg font-medium"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          
          {/* زر تغيير اللغة */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="px-5 py-2 rounded-full glass-effect hover:bg-accent-primary/20 transition-all flex items-center gap-2 font-semibold"
          >
            <span className="text-lg">
              {language === 'ar' ? '🇬🇧 EN' : '🇸🇦 AR'}
            </span>
          </motion.button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect"
        >
          <div className="flex flex-col items-center py-4 space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.key} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="nav-link text-lg"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-6 py-2 rounded-full glass-effect hover:bg-accent-primary/20 transition-all flex items-center gap-2 mt-2"
            >
              <span className="font-semibold">
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
