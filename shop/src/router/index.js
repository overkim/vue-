import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import ('../components/Home.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: ()=>import ('../components/Add.vue'),
      meta:{keepAlive:true}
    },
    {
      path: '/detail:bookid',
      name: 'detail',
      component: ()=>import ('../components/Detail.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: ()=>import ('../components/List.vue')
    },
     {
      path: '/car',
      name: 'car',
      component: ()=>import ('../components/Car.vue')
    }
  ]
})
