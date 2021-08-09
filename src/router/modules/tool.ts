/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 20:25:53
 * @LastEditTime: 2021-08-06 14:46:24
 * @Description:
 * @FilePath: \xia-admin\src\router\modules\tool.ts
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Tool = {
  path: '/tools',
  name: 'Tools',
  component: layout,
  redirect: { path: '/tools/index' },
  icon: 'xia xia-tool',
  title: '工具',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/tools/my.vue'),
      title: '我的工具',
      meta: {
        activeMenu: '/tools'
      }
    }
  ]
}
export default Tool
