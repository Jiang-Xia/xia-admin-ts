/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 20:25:53
 * @LastEditTime: 2021-07-28 22:04:05
 * @Description:
 * @FilePath: \xia-admin\src\router\modules\configsts
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Configs = {
  path: '/configs',
  name: 'Configs',
  component: layout,
  redirect: { path: '/configs/index' },
  icon: 'xia xia-setting',
  title: '配置',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/configs/menu.vue'),
      title: '菜单管理',
      meta: {
        activeMenu: '/configs/menu'
      }
    },
    {
      path: 'user',
      props: true,
      hidden: true,
      component: () => import('@/views/configs/user.vue'),
      title: '用户管理',
      meta: {
        activeMenu: '/configs/user'
      }
    }
  ]
}
export default Configs
