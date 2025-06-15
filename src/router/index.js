import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SermonViewVue from '@/views/SermonView.vue'
import ServiceViewVue from '@/views/ServiceView.vue'
import EvangelisationViewVue from '@/views/EvangelisationView.vue'
import DonsViewVue from '@/views/DonsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'auth', requiresAuth: false },
    },
    {
      path: '/enseignements',
      name: 'enseignements',
      component: SermonViewVue,
      meta: { layout: 'auth', requiresAuth: false },
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceViewVue,
      meta: { layout: 'auth', requiresAuth: false },
    },
    {
      path: '/evangelisation',
      name: 'evangelisation',
      component: EvangelisationViewVue,
      meta: { layout: 'auth', requiresAuth: false },
    },
    {
      path: '/donations',
      name: 'donations',
      component: DonsViewVue,
      meta: { layout: 'auth', requiresAuth: false },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/404.vue'),
      meta: { layout: 'auth', requiresAuth: false },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
})

/*router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.meta.requiresAuth;

    if (requiresAuth) {
        const auth = await useAuthStore().isAuthenticated();

        //console.log(auth)

        if (auth) {
            next();
        } else {
            next({ name: 'login', query: { redirect: to.path } }); // Redirige avec la route d'origine
        }
    } else {
        next();
    }
});*/

export default router
