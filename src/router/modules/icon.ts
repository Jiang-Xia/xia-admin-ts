/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 20:25:53
 * @LastEditTime: 2021-07-28 22:03:54
 * @Description:
 * @FilePath: \xia-admin\src\router\modules\iconts
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Icon = {
  path: '/icon',
  name: 'Icon',
  component: layout,
  redirect: { path: '/icon/index' },
  icon: 'xia xia-smile',
  title: '图标',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/icon/index.vue'),
      title: 'custom',
      meta: {
        activeMenu: '/icon/index'
      }
    },
    {
      path: 'svg',
      component: () => import('@/views/icon/svg.vue'),
      title: 'SVG',
      meta: {
        activeMenu: '/icon/svg'
      }
    },
    {
      path: 'fa',
      component: () => import('@/views/icon/fa.vue'),
      title: 'Font Awesome',
      meta: {
        activeMenu: '/icon/fa'
      }
    }
  ]
}
export default Icon
