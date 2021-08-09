/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-27 10:16:50
 * @LastEditTime: 2021-07-28 22:00:45
 * @Description:
 * @FilePath: \xia-admin\src\router\indexts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '@/router/modules/dashboard'
import Charts from '@/router/modules/charts'
import Icon from '@/router/modules/icon'
import Nav from '@/router/modules/nav'
import Form from '@/router/modules/form'
import Demo from '@/router/modules/demo'
import Tool from '@/router/modules/tool'
import Configs from '@/router/modules/configs'
import Profile from '@/router/modules/profile'
// 固定路由
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index-transfer.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  }
]
// 异步路由根据权限配置
export const asyncRoutes = [
  Dashboard,
  Charts,
  Icon,
  Nav,
  Form,
  Demo,
  Tool,
  Configs,
  Profile,
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]
export function resetRouter() {
  // const newRouter = createRouter()
  // router.matcher = newRouter.matcher
}
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
