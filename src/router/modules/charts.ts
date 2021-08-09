/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 20:25:53
 * @LastEditTime: 2021-07-28 21:48:48
 * @Description:
 * @FilePath: \xia-admin\src\router\modules\chartsts
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Charts = {
  path: '/charts',
  name: 'Charts',
  component: layout,
  redirect: { path: '/charts/index' },
  icon: 'xia xia-areachart',
  title: '图表',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      props: true,
      component: () => import('@/views/charts/index.vue'),
      title: '图表总览',
      meta: {
        activeMenu: '/charts/index'
      }
    },
    {
      path: 'graph',
      props: true,
      component: () => import('@/views/charts/graph.vue'),
      title: '图表库',
      meta: {
        activeMenu: '/charts/graph'
      }
    }
  ]
}
export default Charts
