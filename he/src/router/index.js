import Vue from 'vue';
import Router from 'vue-router';
import Admin from '../admin';
import Income from '../client/income';
import adminIncome from '../client/adminIncome';
import List from "../components/list";
import All from "../components/all";
Vue.use(Router)
//懒加载路由

const router = new Router({
  mode:'history',//hash
  routes: [
    {
      path: '/',
      name: 'all',
      component: All
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
			meta:{requireAuth:false}
    },
    {
      path: '/income',
      name: 'income',
      component: Income
    },
    {
      path: '/adminIncome',
      name: 'adminIncome',
      component: adminIncome
    },
    {
      path: '/List?id=:bookid',
      name: 'List',
      component: List
    }
  ]
})


// router.replace('/income')
export default router;
