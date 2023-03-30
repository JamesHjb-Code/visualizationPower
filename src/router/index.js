import { createRouter, createWebHashHistory } from 'vue-router'

const routes =[
  // {
  //   path: '/login',
  //   name: "Login",
  //   component: Login  // 登录
  // },
]
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes
})
export default router