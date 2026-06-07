import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    { emoji: '🎨', title: 'تصميم لوحات', desc: 'لوحات فنية احترافية', color: 'from-pink-500 to-rose-500' },
    { emoji: '🏷️', title: 'تصميم لوجو', desc: 'هوية بصرية فريدة', color: 'from-purple-500 to-indigo-500' },
    { emoji: '📱', title: 'سوشيال ميديا', desc: 'تصاميم جذابة للمنصات', color: 'from-blue-500 to-cyan-500' },
    { emoji: '🖨️', title: 'المطبوعات', desc: 'جميع أنواع المطبوعات', color: 'from-green-500 to-emerald-500' },
    { emoji: '🏢', title: 'كلادينج', desc: 'تصاميم واجهات مباني', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="services" className="py-20 bg-dark-400" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">الخدمات</span> التي أقدمها
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 text-center"
            >
              <div className={`text-6xl mb-4 inline-block`}>{service.emoji}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
