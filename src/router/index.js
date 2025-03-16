import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
