import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'الصفحة الرئيسية',
    icon: 'shopping-cart-outline',
    link: '/pages/homepage/start',
    home: true,
  },
  
  {
    title: 'قوائم',
    group: true,
  },
  {
    title: 'توصيف المقرر الدراسي',
    icon: 'layout-outline',
    link: '/pages/courses'
    
  },
  {
    title: 'المحتوى التعليمي للبيئة ',
    icon: 'browser-outline',
    link: '/pages/educationalunit',
  },
  {
    title: 'ادارة المناقشات',
    icon: 'message-circle-outline',
    link: '/pages/discussions',
    
  },
  {
    title: 'المكتبة',
    icon: 'edit-2-outline',
    link: '/pages/library'
  
  },
  {
    title: 'التبليغات',
    icon: 'keypad-outline',
    link: '/pages/homepage/start',
    
  },
 

 
  {
    title: 'التقييمات',
    icon: 'map-outline',
    link: '/pages/CourseEvaluation',

  },
  
 

  {
    title: ' الإختبارات والتكليفات ',
    icon: 'browser-outline',
    link: '/pages/exam',
  },
  {
    title: ' الواجبات ',
    icon: 'pie-chart-outline',
    link: '/pages/homeworks',
  },
  {
    title: ' الإعلانات',
    icon: 'grid-outline',
    link: '/pages/advertising',

  },
  {
    title: 'الدعم والتوجيه',
    icon: 'grid-outline',
    link: '/pages/tools',

    
  },
 
];
