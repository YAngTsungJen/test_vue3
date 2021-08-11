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
    path: '/useMethods',
    name: 'UseMethods',
    component: () => import('../views/UseMethods.vue')
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
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'productProps/:id',
        component: () => import('../views/ProductProps.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        }
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
  },
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0
      }
    }
    return {}
  }
})

export default router
