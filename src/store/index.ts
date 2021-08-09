/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-27 10:25:07
 * @LastEditTime: 2021-08-09 16:53:21
 * @Description: 
 * @FilePath: \xia-admin\src\store\index.ts
 */
import { createStore } from 'vuex'
import getters from './getters'
// const modulesFiles = require.context('./modules', true, /\.js$/) // 将modules文件夹下方的所有文件全部获取，无需一个一个注入
// const modules = {}
// modulesFiles.keys().forEach(modulePath => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1') // 将指定文件下的文件名去除后缀
//   const value = modulesFiles(modulePath) // 获取到文件中的内容
//   modules[moduleName] = value.default // 将需要的所有文件放入modules这个空对象中，引入这一个即可
//   return modules
// })
import demo from './modules/demo'
import permission from './modules/permission'
import settings from './modules/settings'
import user from './modules/user'

export default createStore({
  modules:{
    demo,
    permission,
    settings,
    user,
  },
  state: {
  },
  getters,
  mutations: {

  },
  actions: {

  }
})
