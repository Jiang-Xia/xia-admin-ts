/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-27 11:44:31
 * @LastEditTime: 2021-08-06 14:35:37
 * @Description:
 * @FilePath: \xia-admin\src\api\profilets
 */
import config from '@/api/config'
import $axios from '@/utils/request'

// 获取项目、科室、病种权限信息
export async function editPassword(data) {
  return $axios({
    url: config.smaiuac_service_base_url + '/api/v2/profile/user/modify_password',
    method: 'post',
    data: data
  })
}

