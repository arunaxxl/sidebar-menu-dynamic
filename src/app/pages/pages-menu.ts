import { NbMenuItem } from '@nebular/theme';
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Demo',
    group: true,
  },
  {
    title: 'IT',
    icon: 'layout-outline',
    children:[{
      title: 'Programming',
      icon: 'layout-outline',
      children:[
        {
        title: 'Angular',
        link: '/pages/forms/inputs',
      },
      {
        title: 'React',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Vue',
        link: '/pages/forms/buttons',
      }
    ]
    }
    ]
  }
];
