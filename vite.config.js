import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    // 当使用文件系统路径的别名时，请始终使用绝对路径 
    alias:{
      "~":path.resolve(__dirname,"src")
    }
  },
  // 为开发服务器配置自定义代理规则
  server:{
    hmr:true, //  开启热更新
    host: '127.0.0.1',//ip地址
    port: 3008, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3006',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [vue(),
    vueSetupExtend(), // vue3 setup风格下无法添加name问题
  ],
})
