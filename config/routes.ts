//  user 相关路由
export const userRoutes = [];

//  pages 相关路由
export const pageRoutes = [
  {
    path: '/',
    component: '@/pages/index',
    // Routes: ['src/pages/index'],
  },
];
export default [
  {
    path: '/',
    routes: [...userRoutes, ...pageRoutes],
  },
];
