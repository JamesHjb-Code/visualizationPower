import { createRouter, createWebHashHistory } from 'vue-router'
const routes =[
  {
    path: '/login',
    name: "Login",
    component:()=>import('@/views/pages/login/index.vue'),  // 登录
  },
  {
    path:'/',
    name:"main",
    component:()=>import('@/components/layout/Main.vue'), 
  },
  {
    path: '/:pathMatch(.*)*',    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下,在没有找到页面的情况下就触发。
    name: 'NotFound',
    component: ()=>import('@/views/error/404.vue')
  },
]
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes
})
export default router