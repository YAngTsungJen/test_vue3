import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/cart',
    name: '購物車',
    component: () => import('../views/Cart.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../components/componentA.vue')
      },
      {
        path: 'b',
        component: () => import('../components/componentB.vue')
      },
      {
        path: 'products/:id',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'multi',
        component: () => import('../components/Multi.vue'),
        children: [
          {
            path: 'a2b',
            components: {
              left: () => import('../components/componentA.vue'),
              right: () => import('../components/componentB.vue')
            }
          },
          {
            path: 'c2b',
            components: {
              left: () => import('../components/componentC.vue'),
              right: () => import('../components/componentB.vue')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
