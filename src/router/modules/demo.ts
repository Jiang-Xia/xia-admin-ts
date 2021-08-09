/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 20:25:53
 * @LastEditTime: 2021-07-29 09:47:32
 * @Description:
 * @FilePath: \xia-admin\src\router\modules\demots
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Demo = {
  path: '/demo',
  name: 'Demo',
  component: layout,
  redirect: { path: '/demo/index' },
  icon: 'xia xia-demo',
  title: '测试',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'theme',
      component: () => import('@/views/demo/theme/index.vue'),
      title: '换肤',
      meta: {
        activeMenu: '/demo/theme'
      }
    },
    {
      path: 'index',
      component: () => import('@/views/demo/index.vue'),
      title: 'demo',
      meta: {
        activeMenu: '/demo/index'
      }
    },
    {
      path: 'step',
      component: () => import('@/views/demo/step/index.vue'),
      title: '步骤',
      meta: {
        activeMenu: '/demo/step'
      }
    }
  ]
}
export default Demo
