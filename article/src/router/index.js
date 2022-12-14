import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from './pathArr'

import Login from '@/components/user/MyLogin.vue'
import MyHome from '@/components/user/MyHome.vue'

import Myusers from '@/menus/Myusers.vue'
import Myrights from '@/menus/Myrights.vue'
import Mygoods from '@/menus/Mygoods.vue'
import Myorder from '@/menus/Myorder.vue'
import Mysettings from '@/menus/Mysettings.vue'

import MyuserDetail from '@/components/user/MyuserDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: MyHome,
      redirect: '/home/users',
      children: [
        { path: 'users', component: Myusers },
        { path: 'userDetail/:id', component: MyuserDetail },
        { path: 'rights', component: Myrights },
        { path: 'goods', component: Mygoods },
        { path: 'order', component: Myorder },
        { path: 'settings', component: Mysettings }
      ]
    }
  ]
})

// eslint-disable-next-line space-before-function-paren
router.beforeEach(function (to, from, next) {
  if (pathArr.indexOf(to.path) !== -1) {
    const tokin = localStorage.getItem('tokin')
    if (tokin) {
      // eslint-disable-next-line no-undef
      next()
    } else {
      // eslint-disable-next-line no-undef
      next('/login')
    }
  } else {
    // eslint-disable-next-line no-undef
    next()
  }
})

export default router
