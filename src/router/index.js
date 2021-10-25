import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/Home'),
    children:[
      {
        path: '/',
        component: ()=>import('../views/H1'),
      },
      {
        path: 'h1',
        name: 'H1',
        component: ()=>import('../views/H1'),
      },
      {
        path: 'h2',
        name: 'H2',
        component: ()=>import('../views/H2'),
      },
      {
        path: 'h3',
        name: 'H3',
        component: ()=>import('../views/H3'),
      },
      {
        path:'xiaoxi',
        name:"Xiaoxi",
        component:()=>import('../views/Xiaoxi')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//   console.log(to)
//   console.log(from)
//   console.log(next)
//   next()
// })

export default router
