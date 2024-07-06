import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScamNews from '../views/ScamNews.vue'
import Accounts from '../views/MainAccounts.vue'
import settings from '../views/MainSettings.vue'
import profile from '../views/Profile.vue'
import theme from '../views/Theme.vue'
import screenReader from '../views/ScreenReader.vue'
import account1 from '../views/account1.vue'
import account2 from '../views/account2.vue'
import account3 from '../views/account3.vue'
import daily from '../views/dashboardDaily.vue'
import weekly from '../views/dashboardWeekly.vue'
import monthly from '../views/dashboardMonthly.vue'

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
      name: 'accounts',
      component: Accounts,
      children: [
        {
          path: 'account1',
          component: account1,
          children: [
            {
              path: 'daily',
              component: daily
            },
            {
              path: 'weekly',
              component: weekly
            },
            {
              path: 'monthly',
              component: monthly
            }
            
          ]
        },
        {
          path: 'account2',
          component: account2,
          children: [
            {
              path: 'daily',
              component: daily
            },
            {
              path: 'weekly',
              component: weekly
            },
            {
              path: 'monthly',
              component: monthly
            }
            
          ]
        },{
          path: 'account3',
          component: account3,
          children: [
            {
              path: 'daily',
              component: daily
            },
            {
              path: 'weekly',
              component: weekly
            },
            {
              path: 'monthly',
              component: monthly
            }
            
          ]
        }]
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
