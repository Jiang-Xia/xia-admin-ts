/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 20:25:53
 * @LastEditTime: 2021-07-28 21:57:23
 * @Description:
 * @FilePath: \xia-admin\src\router\modules\profilets
 */
import layout from '@/layout/index.vue'
// activeMenu 用来高亮导航的参数
const Profile = {
  path: '/profile',
  name: 'Profile',
  component: layout,
  redirect: { path: '/profile/index' },
  icon: 'xia xia-profile ',
  title: '个人中心',
  meta: {
    roles: [1, 2]
  },
  children: [
    {
      path: 'index',
      props: true,
      component: () => import('@/views/profile/index.vue'),
      title: '个人中心',
      meta: {
        activeMenu: '/profile'
      }
    }
  ]
}
export default Profile
