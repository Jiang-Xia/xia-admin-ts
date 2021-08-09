/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-07-27 09:55:23
 * @LastEditTime: 2021-08-06 14:53:30
 * @Description:
 * @FilePath: \xia-admin\vite.config.ts
 */
import { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const root = process.cwd()
  const { VITE_BASE_URL } = loadEnv(mode, root)
  // console.log('command', command)
  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src')
        }
      ]
    },
    plugins: [
      vue(),
      /* 这个使用方法和设置scss全局变量冲突，模块导入冲突 */
      styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`
            },
            resolveComponent: (name) => {
              return `element-plus/lib/${name}`
            }
          }]
      }),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      })
    ],
    css: {
      preprocessorOptions: {
        // 天坑！！！element-plus scss文件变量命名有旧版本启用的，和设置全局scss变量有冲突
        scss: {
          additionalData: '@import "@/styles/scss/_mixins";'
        }
      }
    },
    server: {
      // open:true,
      disableHostCheck: true,
      port: 5008
      /* 使用代理 */
      // proxy: {
      //   '/proxy-api': { // 代理标识
      //     /* 目标代理服务器地址 */
      //     target: 'https://fundsuggest.eastmoney.com',
      //     /* 允许跨域 */
      //     changeOrigin: true,
      //     pathRewrite: {
      //       // 标识替换
      //       // 原请求地址为 /proxy-api/getData 将'/proxy-api'替换''时，
      //       // 代理后的请求地址为： http://xxx.xxx.xxx/getData
      //       // 若替换为'/other',
      //       // 则代理后的请求地址为 http://xxx.xxx.xxx/other/getData
      //       '^/proxy-api': ''
      //     }
      //   }
      // }
    }
  }
}
