/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-27 09:55:23
 * @LastEditTime: 2021-08-03 15:56:32
 * @Description:
 * @FilePath: \xia-admin\src\maints
 */
import { createApp } from 'vue'
import router from './router'
import store from './store'
import '@/styles/base.scss'
import './permission'
import '@/mock/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import '@/styles/element-variables.scss'
// import 'element-plus/packages/theme-chalk/src/index.scss'
import '@/assets/font/xia-icon/iconfont.css'

const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')

/* 自定义指令 */
import directives from '@/directives'
app.use(directives)
/*
  全局组件注册
*/
import SvgIcon from '@/components/SvgIcon/index.vue'
// 自动注册图表组件
import { asyncComponent } from '@/components/charts/index'
asyncComponent(app)
import BreadCrumb from '@/components/breadcrumb/index.vue'
app.component('SvgIcon', SvgIcon)
app.component('BreadCrumb', BreadCrumb)

/* 第三方库 */
import * as echarts from 'echarts'
/* echart 加载主题 https://echarts.apache.org/zh/theme-builder.html */
import echartsTheme from '@/utils/echartsTheme.json'
echarts.registerTheme('walden', echartsTheme)
/*
  常用方法挂载
*/
import { getToken } from '@/utils/cookie'
import axios from '@/utils/request'
import { getCode, getOpenType } from '@/utils/common'
const globalProperties = app.config.globalProperties
globalProperties.$getCode = getCode
globalProperties.$getOpenType = getOpenType
globalProperties.devtools = false
globalProperties.$getToken = getToken
globalProperties.$axios = axios
globalProperties.$echarts = echarts
export default app
