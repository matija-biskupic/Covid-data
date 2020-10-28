/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
// import store from '../store'
export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: false
    },
    redirect: {
      path: '/'
    }
  },
  {
    path: '/',
    meta: {
      name: 'World View',
      requiresAuth: false
    },
    component: () => import(`@/views/DashboardView.vue`),
    children: [
      {
        path: '',
        name: 'World',
        component: () => import(`@/components/DashViews/Dashboard.vue`)
      },
      {
        path: '/country',
        name: 'Country',
        component: () => import(`@/components/DashViews/Country.vue`)
      }
    ]
  }
]
