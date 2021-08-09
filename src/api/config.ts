/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-03-24 09:43:12
 * @LastEditTime: 2021-08-06 14:40:34
 * @Description:
 * @FilePath: \xia-admin\src\api\config.ts
 */
interface config{
  [propName: string]: String;
}
const getConfig = () => {
  const BASECONFIG = {
    smaiuac_service_base_url: 'https://127.0.0.0'
  }
  const config:config = {}
  for (const k in BASECONFIG) {
    config[k] = ''
  }
  return config
}
export default getConfig()
