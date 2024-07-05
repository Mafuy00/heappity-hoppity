import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScamNews from '../views/ScamNews.vue'
import Accounts from '../views/Accounts.vue'
import settings from '../views/MainSettings.vue'
import profile from '../views/Profile.vue'
import theme from '../views/Theme.vue'
import screenReader from '../views/ScreenReader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/scamNews',
      name: 'Scam News',
      component: ScamNews
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings,
      children: [
      {
        path: 'profile',
        component: profile
      },
      {
        path: 'theme',
        component: theme
      },{
        path: 'screenReader',
        component: screenReader
      }]
    }
  ]
})

export default router
