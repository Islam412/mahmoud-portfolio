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
    { id: 'social', name: language === 'ar' ? 'سوشيال ميديا' : 'Social Media', nameEn: 'Social Media' },
    { id: 'prints', name: language === 'ar' ? 'مطبوعات' : 'Prints', nameEn: 'Prints' },
    { id: 'cladding', name: language === 'ar' ? 'كلادينج' : 'Cladding', nameEn: 'Cladding' },
  ];

  // ==============================================
  // أعمال محمود حسني - (تم حفظ بياناتك كما هي)
  // ==============================================
  const portfolioItems = [
    // ========== اللوجوهات (Logos) ==========
    {
      id: 1,
      category: 'logos',
      title_ar: 'لوجو شركة ابتكار',
      title_en: 'Ebtekar Company Logo',
      description_ar: 'لوجو عصري لشركة تكنولوجيا',
      description_en: 'Modern logo for a technology company',
      image: '/images/portfolio/logos/1.jpg',
    },
    {
      id: 2,
      category: 'logos',
      title_ar: 'لوجو مطعم الأندلس',
      title_en: 'Andalus Restaurant Logo',
      description_ar: 'لوجو راقي لمطعم فاخر',
      description_en: 'Elegant logo for a luxury restaurant',
      image: '/images/portfolio/logos/2.jpg',
    },
    {
      id: 3,
      category: 'logos',
      title_ar: 'لوجو شركة المقاولات المتحدة',
      title_en: 'United Contracting Company Logo',
      description_ar: 'لوجو قوي يعبر عن الثقة والقوة',
      description_en: 'Strong logo expressing trust and power',
      image: '/images/portfolio/logos/3.jpg',
    },
    {
      id: 4,
      category: 'logos',
      title_ar: 'لوجو علامة تجارية',
      title_en: 'Brand Identity Logo',
      description_ar: 'هوية بصرية متكاملة للعلامة التجارية',
      description_en: 'Complete visual identity for the brand',
      image: '/images/portfolio/logos/4.jpg',
    },
    {
      id: 5,
      category: 'logos',
      title_ar: 'لوجو مقهى',
      title_en: 'Coffee Shop Logo',
      description_ar: 'لوجو دافئ يعبر عن أجواء المقهى',
      description_en: 'Warm logo reflecting coffee shop atmosphere',
      image: '/images/portfolio/logos/5.jpg',
    },
    {
      id: 6,
      category: 'logos',
      title_ar: 'لوجو متجر إلكتروني',
      title_en: 'E-commerce Store Logo',
      description_ar: 'لوجو عصري لمتجر إلكتروني',
      description_en: 'Modern logo for an e-commerce store',
      image: '/images/portfolio/logos/6.jpg',
    },
    {
      id: 7,
      category: 'logos',
      title_ar: 'لوجو متجر إلكتروني',
      title_en: 'E-commerce Store Logo',
      description_ar: 'لوجو عصري لمتجر إلكتروني',
      description_en: 'Modern logo for an e-commerce store',
      image: '/images/portfolio/logos/7.jpg',
    },
    {
      id: 8,
      category: 'logos',
      title_ar: 'لوجو متجر إلكتروني',
      title_en: 'E-commerce Store Logo',
      description_ar: 'لوجو عصري لمتجر إلكتروني',
      description_en: 'Modern logo for an e-commerce store',
      image: '/images/portfolio/logos/8.jpg',
    },
    {
      id: 9,
      category: 'logos',
      title_ar: 'لوجو متجر إلكتروني',
      title_en: 'E-commerce Store Logo',
      description_ar: 'لوجو عصري لمتجر إلكتروني',
      description_en: 'Modern logo for an e-commerce store',
      image: '/images/portfolio/logos/9.jpg',
    },
    {
      id: 10,
      category: 'logos',
      title_ar: 'لوجو متجر إلكتروني',
      title_en: 'E-commerce Store Logo',
      description_ar: 'لوجو عصري لمتجر إلكتروني',
      description_en: 'Modern logo for an e-commerce store',
      image: '/images/portfolio/logos/10.jpg',
    },
    {
      id: 11,
      category: 'logos',
      title_ar: 'لوجو متجر إلكتروني',
      title_en: 'E-commerce Store Logo',
      description_ar: 'لوجو عصري لمتجر إلكتروني',
      description_en: 'Modern logo for an e-commerce store',
      image: '/images/portfolio/logos/11.jpg',
    },
    {
      id: 12,
      category: 'logos',
      title_ar: 'لوجو متجر إلكتروني',
      title_en: 'E-commerce Store Logo',
      description_ar: 'لوجو عصري لمتجر إلكتروني',
      description_en: 'Modern logo for an e-commerce store',
      image: '/images/portfolio/logos/12.jpg',
    },

    // ========== سوشيال ميديا (Social Media) ==========
    {
      id: 13,
      category: 'social',
      title_ar: 'بوست انستجرام تخفيضات',
      title_en: 'Instagram Sale Post',
      description_ar: 'تصميم إعلاني لتخفيضات العيد',
      description_en: 'Promotional design for Eid sales',
      image: '/images/portfolio/social/1.jpg',
    },
    {
      id: 14,
      category: 'social',
      title_ar: 'بوست فيسبوك عرض خاص',
      title_en: 'Facebook Special Offer',
      description_ar: 'تصميم مميز للعروض الخاصة',
      description_en: 'Distinctive design for special offers',
      image: '/images/portfolio/social/2.jpg',
    },
    {
      id: 15,
      category: 'social',
      title_ar: 'ستوري انستجرام تفاعلي',
      title_en: 'Interactive Instagram Story',
      description_ar: 'تصميم جذاب للستوري',
      description_en: 'Attractive story design',
      image: '/images/portfolio/social/3.jpg',
    },
    {
      id: 16,
      category: 'social',
      title_ar: 'غلاف فيسبوك',
      title_en: 'Facebook Cover',
      description_ar: 'غلاف احترافي لصفحة فيسبوك',
      description_en: 'Professional Facebook page cover',
      image: '/images/portfolio/social/4.jpg',
    },
    {
      id: 17,
      category: 'social',
      title_ar: 'بوست انستجرام منتج جديد',
      title_en: 'Instagram New Product Post',
      description_ar: 'ترويج لمنتج جديد بطريقة مبتكرة',
      description_en: 'Promoting a new product in an innovative way',
      image: '/images/portfolio/social/5.jpg',
    },
    {
      id: 18,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/6.jpg',
    },
    {
      id: 19,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/7.jpg',
    },
    {
      id: 20,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/8.jpg',
    },
    {
      id: 21,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/9.jpg',
    },
    {
      id: 22,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/10.jpg',
    },
    {
      id: 23,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/11.jpg',
    },
    {
      id: 24,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/12.jpg',
    },
    {
      id: 25,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/13.jpg',
    },
    {
      id: 26,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/14.jpg',
    },
    {
      id: 27,
      category: 'social',
      title_ar: 'بوست لينكد إن',
      title_en: 'LinkedIn Post',
      description_ar: 'تصميم احترافي لمنصة لينكد إن',
      description_en: 'Professional design for LinkedIn platform',
      image: '/images/portfolio/social/15.jpg',
    },

    // ========== مطبوعات (Prints) ==========
    {
      id: 28,
      category: 'prints',
      title_ar: 'بروشور شركة ثلاثي الأبعاد',
      title_en: '3D Company Brochure',
      description_ar: 'بروشور دعائي ثلاثي الأبعاد',
      description_en: '3D promotional brochure',
      image: '/images/portfolio/prints/1.jpg',
    },
    {
      id: 29,
      category: 'prints',
      title_ar: 'بطاقة شخصية فاخرة',
      title_en: 'Luxury Business Card',
      description_ar: 'بطاقة أعمال بتصميم عصري',
      description_en: 'Modern business card design',
      image: '/images/portfolio/prints/2.jpg',
    },
    {
      id: 30,
      category: 'prints',
      title_ar: 'كتيب تعريفي للشركة',
      title_en: 'Company Profile Booklet',
      description_ar: 'كتيب يعرف بخدمات الشركة',
      description_en: 'Booklet introducing company services',
      image: '/images/portfolio/prints/3.jpg',
    },
    {
      id: 31,
      category: 'prints',
      title_ar: 'ملصق دعائي',
      title_en: 'Promotional Poster',
      description_ar: 'ملصق إعلاني بحجم كبير',
      description_en: 'Large format promotional poster',
      image: '/images/portfolio/prints/4.jpg',
    },
    {
      id: 32,
      category: 'prints',
      title_ar: 'غلاف مجلة',
      title_en: 'Magazine Cover',
      description_ar: 'تصميم غلاف مجلة احترافي',
      description_en: 'Professional magazine cover design',
      image: '/images/portfolio/prints/5.jpg',
    },
    {
      id: 33,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/6.jpg',
    },
    {
      id: 34,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/7.jpg',
    },
    {
      id: 35,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/8.jpg',
    },
    {
      id: 36,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/9.jpg',
    },
    {
      id: 37,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/10.jpg',
    },
    {
      id: 38,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/11.jpg',
    },
    {
      id: 39,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/12.jpg',
    },
    {
      id: 40,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/13.jpg',
    },
    {
      id: 41,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/14.jpg',
    },
    {
      id: 42,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/15.jpg',
    },
    {
      id: 43,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/16.jpg',
    },
    {
      id: 44,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/17.jpg',
    },
    {
      id: 45,
      category: 'prints',
      title_ar: 'ورقية رسمية',
      title_en: 'Official Letterhead',
      description_ar: 'تصميم ورقية رسمية للشركات',
      description_en: 'Official letterhead design for companies',
      image: '/images/portfolio/prints/18.jpg',
    },

    // ========== كلادينج (Cladding) ==========
    {
      id: 46,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/1.jpg',
    },
    {
      id: 47,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/2.jpg',
    },
    {
      id: 48,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/3.jpg',
    },
    {
      id: 49,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/4.jpg',
    },
    {
      id: 50,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/5.jpg',
    },
    {
      id: 51,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/6.jpg',
    },
    {
      id: 52,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/7.jpg',
    },
    {
      id: 53,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/8.jpg',
    },
    {
      id: 54,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/9.jpg',
    },
    {
      id: 55,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/10.jpg',
    },
    {
      id: 56,
      category: 'cladding',
      title_ar: 'واجهة مبنى تجاري حديث',
      title_en: 'Modern Commercial Building Facade',
      description_ar: 'تصميم كلادينج حديث لمبنى تجاري',
      description_en: 'Modern cladding design for a commercial building',
      image: '/images/portfolio/cladding/11.jpg',
    },
  ];

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
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/600x400/16213e/e94560/png?text=صورة+قريبا';
                      }}
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

        {/* عرض الصور بتكبير (Lightbox) - الصورة بتظهر بشكل مكبر عند الضغط عليها */}
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