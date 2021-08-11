/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-08-09 17:27:59
 * @LastEditTime: 2021-08-11 15:51:59
 * @Description: 
 * @FilePath: \xia-admin-ts\src\utils\storage.ts
 */
const SALT = ''

const storage = {
  local: {
    get(key:string) {
      const strValue = localStorage.getItem(SALT + key)
      if (strValue && strValue !== 'undefined') {
        return JSON.parse(strValue)
      } else {
        return null
      }
    },
    set(key:string, jsonValue:any) {
      const strValue = JSON.stringify(jsonValue)
      localStorage.setItem(SALT + key, strValue)
    },
    remove(key:string) {
      localStorage.removeItem(SALT + key)
    },
    removeAll() {
      localStorage.clear()
    }
  },
  session: {
    get(key:string) {
      const strValue = sessionStorage.getItem(SALT + key)
      if (strValue && strValue !== 'undefined') {
        return JSON.parse(strValue)
      } else {
        return null
      }
    },
    set(key:string, jsonValue:any) {
      const strValue = JSON.stringify(jsonValue)
      sessionStorage.setItem(SALT + key, strValue)
    },
    remove(key:string) {
      sessionStorage.removeItem(SALT + key)
    },
    removeAll() {
      sessionStorage.clear()
    }
  }
}

export default storage
