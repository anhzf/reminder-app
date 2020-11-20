import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('pages/Home.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      {
        name: 'MyProfile',
        path: 'my-profile',
        component: () => import('pages/Index.vue'),
      },
      {
        name: 'MyTask',
        path: 'my-task',
        component: () => import('pages/MyTask.vue'),
      },
      {
        name: 'Settings',
        path: 'settings',
        component: () => import('pages/Settings.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
