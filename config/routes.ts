//  user 相关路由
export const userRoutes = [];

//  pages 相关路由
export const pageRoutes = [
  {
    path: '/home',
    component: '@/pages/home/index',
    routes: [
      {
        path: '/home/feed',
        name: 'home-feed',
        component: '@/pages/home/feed/index',
      },
      {
        path: '/home/settings',
        name: 'home-settings',
        component: '@/pages/home/settings/index',
      },
    ],
    // Routes: ['src/pages/index'],
  },
];
export default [
  {
    path: '/',
    routes: [...userRoutes, ...pageRoutes],
  },
];
