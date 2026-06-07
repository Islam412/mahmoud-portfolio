import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t, language } = useLanguage();

  const portfolioItems = [
    { id: 1, title: language === 'ar' ? 'لوجو 1' : 'Logo 1', image: 'https://placehold.co/600x400/16213e/e94560/png?text=Logo+1' },
    { id: 2, title: language === 'ar' ? 'لوجو 2' : 'Logo 2', image: 'https://placehold.co/600x400/16213e/533483/png?text=Logo+2' },
    { id: 3, title: language === 'ar' ? 'لوجو 3' : 'Logo 3', image: 'https://placehold.co/600x400/16213e/e94560/png?text=Logo+3' },
    { id: 4, title: language === 'ar' ? 'لوحة فنية 1' : 'Art Board 1', image: 'https://placehold.co/600x400/16213e/533483/png?text=Art+Board+1' },
    { id: 5, title: language === 'ar' ? 'لوحة فنية 2' : 'Art Board 2', image: 'https://placehold.co/600x400/16213e/e94560/png?text=Art+Board+2' },
    { id: 6, title: language === 'ar' ? 'لوحة فنية 3' : 'Art Board 3', image: 'https://placehold.co/600x400/16213e/533483/png?text=Art+Board+3' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-200" ref={ref}>
      <div className="container mx-auto px-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('portfolio.title')}</span> {t('portfolio.titleHighlight')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('portfolio.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
