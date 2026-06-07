import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // تصنيفات الأعمال
  const categories = [
    { id: 'all', name: language === 'ar' ? 'الكل' : 'All', nameEn: 'All' },
    { id: 'logos', name: language === 'ar' ? 'لوجوهات' : 'Logos', nameEn: 'Logos' },
    { id: 'artboards', name: language === 'ar' ? 'لوحات فنية' : 'Art Boards', nameEn: 'Art Boards' },
    { id: 'social', name: language === 'ar' ? 'سوشيال ميديا' : 'Social Media', nameEn: 'Social Media' },
    { id: 'prints', name: language === 'ar' ? 'مطبوعات' : 'Prints', nameEn: 'Prints' },
    { id: 'cladding', name: language === 'ar' ? 'كلادينج' : 'Cladding', nameEn: 'Cladding' },
  ];

  // إنشاء 60 صورة تجريبية (استبدلها بصورك الحقيقية)
  const generatePortfolioItems = () => {
    const items = [];
    const categories_list = ['logos', 'artboards', 'social', 'prints', 'cladding'];
    const titles_ar = {
      logos: 'لوجو احترافي',
      artboards: 'لوحة فنية',
      social: 'تصميم سوشيال ميديا',
      prints: 'مطبوعات دعائية',
      cladding: 'واجهة كلادينج'
    };
    const titles_en = {
      logos: 'Professional Logo',
      artboards: 'Art Board',
      social: 'Social Media Design',
      prints: 'Print Design',
      cladding: 'Cladding Design'
    };

    for (let i = 1; i <= 60; i++) {
      const category = categories_list[i % categories_list.length];
      const num = String(i).padStart(2, '0');
      items.push({
        id: i,
        category: category,
        title_ar: `${titles_ar[category]} ${num}`,
        title_en: `${titles_en[category]} ${num}`,
        description_ar: `تصميم ${titles_ar[category]} رقم ${i} - إبداع واحترافية`,
        description_en: `${titles_en[category]} ${num} - Creative and Professional`,
        image: `https://picsum.photos/id/${100 + i}/600/400`,
        // للصور الحقيقية، استخدم هذا المسار:
        // image: `/images/portfolio/${category}/${i}.jpg`
      });
    }
    return items;
  };

  const portfolioItems = generatePortfolioItems();
  
  // تصفية العناصر حسب التصنيف
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
  
  // حساب عدد الصفحات
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  // إعادة تعيين الصفحة عند تغيير التصنيف
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // محاكاة تحميل الصور
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeCategory, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-dark-200" ref={ref}>
      <div className="container mx-auto px-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('portfolio.title')}</span> {t('portfolio.titleHighlight')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('portfolio.subtitle')} - {filteredItems.length} {language === 'ar' ? 'عمل' : 'works'}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* فلتر التصنيفات */}
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
            </button>
          ))}
        </motion.div>

        {/* شبكة المعرض مع تحميل متدرج */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-effect rounded-2xl overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-dark-300"></div>
                <div className="p-4">
                  <div className="h-6 bg-dark-300 rounded mb-2"></div>
                  <div className="h-4 bg-dark-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((item, index) => (
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
                      alt={language === 'ar' ? item.title_ar : item.title_en}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-dark-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white">
                          {language === 'ar' ? item.title_ar : item.title_en}
                        </h3>
                        <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                          {language === 'ar' ? item.description_ar : item.description_en}
                        </p>
                        <p className="text-accent-primary text-xs mt-2">
                          {categories.find(c => c.id === item.category)?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* أزرار الترقيم (Pagination) */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-12">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full transition-all ${
                    currentPage === 1
                      ? 'bg-dark-300 text-gray-500 cursor-not-allowed'
                      : 'glass-effect text-white hover:bg-accent-primary/20'
                  }`}
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPage(pageNum);
                          window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });
                        }}
                        className={`w-10 h-10 rounded-full transition-all ${
                          currentPage === pageNum
                            ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white'
                            : 'glass-effect text-gray-400 hover:text-white'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full transition-all ${
                    currentPage === totalPages
                      ? 'bg-dark-300 text-gray-500 cursor-not-allowed'
                      : 'glass-effect text-white hover:bg-accent-primary/20'
                  }`}
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}

        {/* عرض الصور بتكبير (Lightbox) */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={language === 'ar' ? selectedImage.title_ar : selectedImage.title_en}
                className="w-full rounded-2xl max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 rounded-full p-2 hover:bg-accent-primary transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-lg rounded-xl p-4">
                <h3 className="text-xl font-bold text-white">
                  {language === 'ar' ? selectedImage.title_ar : selectedImage.title_en}
                </h3>
                <p className="text-gray-300">
                  {language === 'ar' ? selectedImage.description_ar : selectedImage.description_en}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
