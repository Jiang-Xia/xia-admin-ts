/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-08-09 17:27:59
 * @LastEditTime: 2021-08-11 15:50:38
 * @Description: 
 * @FilePath: \xia-admin-ts\src\utils\validate.ts
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path:string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str:string) {
  return str.trim().length > 0
}
