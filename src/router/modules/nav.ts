/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 20:25:53
 * @LastEditTime: 2021-07-28 21:52:31
 * @Description:
 * @FilePath: \xia-admin\src\router\modules\navts
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Nav = {
  path: '/nav',
  name: 'Nav',
  component: layout,
  redirect: { path: '/nav/index' },
  icon: 'xia xia-nav',
  title: '导航',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/nav/index.vue'),
      title: '我的导航',
      meta: {
        activeMenu: '/nav'
      }
    }
  ]
}
export default Nav
