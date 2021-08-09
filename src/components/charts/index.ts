/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-28 22:02:56
 * @LastEditTime: 2021-08-03 17:20:44
 * @Description:
 * @FilePath: \xia-admin\src\components\charts\indexts
 */
import { defineAsyncComponent } from 'vue'
// 异步加载文件内容
function getModules() {
  const components = import.meta.glob('./common/*.vue')
  return components
}
// 同步获取到文件路径和文件名级信息
function getComponents() {
  const components = import.meta.globEager('./common/*.vue')
  return components
}
// 自动注册组件
export const asyncComponent = function(app) {
  const modules = getModules()// 获取到组件模块内容
  const components = getComponents()// 获取到文件组件信息
  // console.log(modules, components)
  Object.keys(modules).forEach((key) => {
    const viewSrc = components[key]
    const file = viewSrc.default
    // 异步组件才用到这个方法
    const AsyncComponent = defineAsyncComponent(modules[key])
    app.component(file.name, AsyncComponent)
    // 不使用用异步直接注册组件也行
    // app.component(file.name, components[key].default)
  })
}
