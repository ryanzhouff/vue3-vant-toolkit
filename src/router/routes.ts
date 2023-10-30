import { type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: 'home', // 默认子路由
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: '首页',
          keepAlive: true
        }
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/Settings/index.vue'),
        meta: {
          title: '设置',
          keepAlive: true
        }
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/UserProfile/index.vue'),
        meta: {
          title: '关于我',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '登录',
      keepAlive: false
    }
  }
];

export default routes;
