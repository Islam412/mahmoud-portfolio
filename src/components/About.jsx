import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPaintBrush, FaTag, FaInstagram, FaPrint, FaBuilding } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    { icon: FaPaintBrush, title: 'تصميم لوحات', color: '#e94560' },
    { icon: FaTag, title: 'تصميم لوجو', color: '#533483' },
    { icon: FaInstagram, title: 'سوشيال ميديا', color: '#e4405f' },
    { icon: FaPrint, title: 'مطبوعات', color: '#10b981' },
    { icon: FaBuilding, title: 'وجهات كلادينج', color: '#f59e0b' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-200" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            من <span className="gradient-text">هو</span> محمود حسني؟
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img src="https://placehold.co/400x400/16213e/e94560/png?text=Mahmoud+Hosni+1" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-2xl mt-8">
                <img src="https://placehold.co/400x400/16213e/533483/png?text=Mahmoud+Hosni+2" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-2xl col-span-2">
                <img src="https://placehold.co/800x300/16213e/e94560/png?text=Mahmoud+Hosni+at+Work" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right"
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">مصمم جرافيك محترف</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              أنا محمود حسني، مصمم جرافيك بشغف كبير للإبداع والتميز. أؤمن بأن التصميم الجيد 
              ليس مجرد شكل جميل، بل هو رسالة تنقل فكرتك للعالم بأفضل صورة.
            </p>
            <p className="text-gray-400 mb-6">
              أقدم تصاميم فريدة تجمع بين الجمال والوظيفة، وأحرص على فهم احتياجات عملائي 
              لتقديم أفضل الحلول الإبداعية في:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-xl p-3 text-center group cursor-pointer"
                >
                  <service.icon 
                    className="w-8 h-8 mx-auto mb-2 transition-all group-hover:scale-110" 
                    style={{ color: service.color }}
                  />
                  <p className="text-white text-sm font-semibold">{service.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
