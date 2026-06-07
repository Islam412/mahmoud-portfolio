import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', nameEn: 'Home', href: '#home' },
    { name: 'الخدمات', nameEn: 'Services', href: '#services' },
    { name: 'أعمالي', nameEn: 'Portfolio', href: '#portfolio' },
    { name: 'عني', nameEn: 'About', href: '#about' },
    { name: 'اتصل بي', nameEn: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
          <span className="gradient-text">محمود</span>
          <span className="text-white"> حسني</span>
        </motion.div>

        <div className="hidden md:flex space-x-8 space-x-reverse">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link group">
              <span className="block text-sm">{link.name}</span>
              <span className="block text-xs text-gray-500 group-hover:text-accent-primary">
                {link.nameEn}
              </span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect"
        >
          <div className="flex flex-col items-center py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="nav-link text-lg">
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
