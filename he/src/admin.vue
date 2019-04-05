<template>
  <div id="admin">
    父级：紫漠大仙
    <Loop :list="list" @send="change"></Loop>
    <div>{{ message }}--{{ userName }}</div>
    <Page1></Page1>
    <Page2></Page2>
    <router-link to="/income">去income</router-link>
    <form>
      <input v-model="userList.id" placeholder="请输入ID" />
      <input v-model="userList.userName" placeholder="请输入用户名" />
      <input v-model="userList.age" placeholder="请输入年龄" />
      <button type='button' @click="addData">提交数据</button>
    </form>
  </div>
</template>

<script>
import Loop from './client/loop';
import Page1 from './client/page1';
import Page2 from './client/page2';
import {getHot,addGoodM} from "./assets/index.js"
export default {
  name: 'admin',
  data(){
    return {
      list:[1,2,3,5,4,8],
      message:'',
      userName:'',
      // post要提交的数据
      userList:{
        id:0,
        userName:'',
        age:0
      }
    }
  },
  created(){
     this.gethot();
  },
  methods:{
  async  gethot(){
     let hot=await getHot();
      console.log(hot)
    },
    //axios  post提交
    addData(){
      const params = {
        id:this.userList.id,
        userName:this.userList.userName,
        age:this.userList.age
        }
      
      addGoodM(params);
    },
    // 父组件向子组件传值
    change(msg,userName){
      this.message = msg;
      this.userName = userName;
    }
  },
  mounted(){
  },
   components:{
    Loop,
    Page1,
    Page2
  }
}
</script>

<style>
#admin {
  width:100%;
  height:100%;
  background:#ccc;
}
</style>
