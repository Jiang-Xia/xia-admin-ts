/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 20:25:53
 * @LastEditTime: 2021-07-29 09:47:49
 * @Description:
 * @FilePath: \xia-admin\src\router\modules\formts
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Form = {
  path: '/form',
  name: 'Form',
  component: layout,
  redirect: { path: '/form/index' },
  icon: 'xia xia-form',
  title: '表单',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/form/drag-control/index.vue'),
      title: '表单生成器',
      meta: {
        activeMenu: '/form/index'
      }
    },
    {
      path: 'question',
      component: () => import('@/views/form/question-type/index.vue'),
      title: '题型生成器',
      meta: {
        activeMenu: '/form/question'
      }
    }
  ]
}
export default Form
