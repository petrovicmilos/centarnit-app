import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index.js';

import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/kursevi',
    name: 'kursevi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "kursevi" */ '../views/Kursevi.vue')
  },
  {
    path: '/vesti',
    name: 'vesti',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "vesti" */ '../views/Vesti.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "kontakt" */ '../views/Kontakt.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {requiresUnauth: true}
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {requiresUnauth: true}
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: function (to) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({ el: to.hash, top: 140, behavior: 'smooth' })
        } else {
          resolve({ top: 0, behavior: 'smooth' })
        }
        
      }, 300)
    })
  }
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters['users/isAuthenticated']) {
    next('/login');
  } else if (to.meta.requiresUnauth && store.getters['users/isAuthenticated']) {
    next('/admin');
  } else {
    next();
  }
});

export default router
