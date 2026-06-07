import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { XMarkIcon, LinkIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'الكل', nameEn: 'All' },
    { id: 'logos', name: 'لوجوهات', nameEn: 'Logos' },
    { id: 'artboards', name: 'لوحات', nameEn: 'Art Boards' },
    { id: 'social', name: 'سوشيال ميديا', nameEn: 'Social Media' },
    { id: 'prints', name: 'مطبوعات', nameEn: 'Prints' },
    { id: 'cladding', name: 'كلادينج', nameEn: 'Cladding' },
  ];

  // جميع أعمال محمود حسني
  const portfolioItems = [
    // لوجوهات
    {
      id: 1,
      category: 'logos',
      title: 'لوجو شركة ابتكار للتكنولوجيا',
      description: 'لوجو عصري يعبر عن الابتكار والتطور',
      image: 'https://placehold.co/600x400/16213e/e94560/png?text=Logo+1',
    },
    {
      id: 2,
      category: 'logos',
      title: 'لوجو مطعم الأندلس',
      description: 'تصميم لوجو راقي لمطعم فاخر',
      image: 'https://placehold.co/600x400/16213e/533483/png?text=Logo+2',
    },
    {
      id: 3,
      category: 'logos',
      title: 'لوجو شركة المقاولات المتحدة',
      description: 'لوجو قوي يعبر عن القوة والثقة',
      image: 'https://placehold.co/600x400/16213e/e94560/png?text=Logo+3',
    },
    // لوحات فنية
    {
      id: 4,
      category: 'artboards',
      title: 'لوحة فنية تجريدية - طبيعة',
      description: 'لوحة معبرة عن جمال الطبيعة',
      image: 'https://placehold.co/600x400/16213e/533483/png?text=Art+Board+1',
    },
    {
      id: 5,
      category: 'artboards',
      title: 'لوحة تصميم داخلي - غرفة معيشة',
      description: 'تصميم داخلي عصري ومريح',
      image: 'https://placehold.co/600x400/16213e/e94560/png?text=Art+Board+2',
    },
    {
      id: 6,
      category: 'artboards',
      title: 'لوحة إعلانية - منتج جديد',
      description: 'تصميم إعلاني جذاب للمنتجات',
      image: 'https://placehold.co/600x400/16213e/533483/png?text=Art+Board+3',
    },
    // سوشيال ميديا
    {
      id: 7,
      category: 'social',
      title: 'بوست فيسبوك - تخفيضات',
      description: 'تصميم إعلاني لتخفيضات العيد',
      image: 'https://placehold.co/600x400/16213e/e94560/png?text=Social+1',
    },
    {
      id: 8,
      category: 'social',
      title: 'ستوري انستجرام - منتج جديد',
      description: 'ستوري تفاعلي جذاب',
      image: 'https://placehold.co/600x400/16213e/533483/png?text=Social+2',
    },
    {
      id: 9,
      category: 'social',
      title: 'بوست انستجرام - عرض خاص',
      description: 'تصميم مميز للعروض الخاصة',
      image: 'https://placehold.co/600x400/16213e/e94560/png?text=Social+3',
    },
    // مطبوعات
    {
      id: 10,
      category: 'prints',
      title: 'بروشور شركة - 3 أضعاف',
      description: 'بروشور دعائي احترافي',
      image: 'https://placehold.co/600x400/16213e/533483/png?text=Print+1',
    },
    {
      id: 11,
      category: 'prints',
      title: 'بطاقة شخصية - VIP',
      description: 'بطاقة أعمال فاخرة',
      image: 'https://placehold.co/600x400/16213e/e94560/png?text=Print+2',
    },
    {
      id: 12,
      category: 'prints',
      title: 'كتيب تعريفي - شركة',
      description: 'كتيب شركة بتصميم عصري',
      image: 'https://placehold.co/600x400/16213e/533483/png?text=Print+3',
    },
    // كلادينج
    {
      id: 13,
      category: 'cladding',
      title: 'واجهة مبنى تجاري',
      description: 'تصميم كلادينج حديث لمبنى تجاري',
      image: 'https://placehold.co/600x400/16213e/e94560/png?text=Cladding+1',
    },
    {
      id: 14,
      category: 'cladding',
      title: 'واجهة فيلا سكنية',
      description: 'تصميم كلادينج فاخر لفيلا',
      image: 'https://placehold.co/600x400/16213e/533483/png?text=Cladding+2',
    },
    {
      id: 15,
      category: 'cladding',
      title: 'واجهة مبنى إداري',
      description: 'تصميم عصري للمباني الإدارية',
      image: 'https://placehold.co/600x400/16213e/e94560/png?text=Cladding+3',
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-dark-200" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">أعمالي</span> المميزة
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            مجموعة من أحدث تصاميمي التي تعكس شغفي بالإبداع والتميز
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg'
                  : 'glass-effect text-gray-400 hover:text-white'
              }`}
            >
              {category.name}
              <span className="text-xs block">{category.nameEn}</span>
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-2xl glass-effect">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                    <p className="text-accent-primary text-xs mt-2">
                      {categories.find(c => c.id === item.category)?.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 rounded-full p-2 hover:bg-accent-primary transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-lg rounded-xl p-4">
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
