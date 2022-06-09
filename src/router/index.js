import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'

import provedor from '@/provedor'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/novoUsuario',
    name: 'novo.usuario',
    component: () => import(/* webpackChuckName: registrar */ '../views/NovoUsuario.vue'),
    meta: {
      public: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      public: true,
    }
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((routeTO, routeFrom, next) => {
  if(!routeTO.meta.public && !provedor.state.token) {
    return next({ path : '/login' })
  }
  next()
})

export default router
