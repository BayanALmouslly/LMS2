import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'الصفحة الرئيسية',
    icon: 'shopping-cart-outline',
    link: '/pages/homepage',
    home: true,
  },
  
  {
    title: 'قوائم',
    group: true,
  },
  {
    title: 'توصيفات المقرر',
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
    link: '/pages/coursePolicy'
  
  },
  {
    title: 'التبليغات',
    icon: 'keypad-outline',
    link: '/pages/advertising',
    
  },
 

 
  {
    title: 'التقييمات',
    icon: 'map-outline',
    link: '/pages/CourseEvaluation',

  },
  
  {
    title: 'الدعم والتوجيه',
    icon: 'text-outline',
    link: '/pages/CourseMessage',

    
  },
  {
    title: 'الإختبارات والتكليفات',
    icon: 'grid-outline',
    link: '/pages/tools',

  },
 
  
];
