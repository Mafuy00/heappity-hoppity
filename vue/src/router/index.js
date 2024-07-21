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
import mainPage from '../views/MainPage.vue'
import addRecord from '../views/addRecord.vue'
import navBar from '../views/NavBar.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import mainForecasting from '../views/MainForecasting.vue'
import forecast1 from '../views/forecast1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/nav',
      component: navBar, 
      children: [
        {
          path: '/mainPage',
          component: mainPage
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
          path: '/mainForecasting',
          component: mainForecasting,
          children: [
            {
              path: "/mainForecasting/forecast1",
              component: forecast1
            },
            {
              path: "/mainForecasting/forecast2",
              component: forecast1
            },
            {
              path: "/mainForecasting/forecast3",
              component: forecast1
            }
          ]
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
              ]}
          ]
        }
      ]
    },
    {
      path: '/accounts/addRecord',
      component: addRecord
    },
    {
      path: '/account/add',
    },    
  ]
})

export default router
