/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-27 11:08:06
 * @LastEditTime: 2021-07-28 15:59:53
 * @Description: 
 * @FilePath: \xia-admin\src\router\modules\dashboardts
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  component: layout,
  redirect: { path: '/dashboard/index' },
  icon: 'xia xia-home',
  title: '首页',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      name: 'DashboardResultQuery',
      component: () => import('@/views/dashboard/index.vue'),
      title: '首页',
      meta: {
        activeMenu: '/dashboard'
      }
    }
  ]
}
export default Dashboard
