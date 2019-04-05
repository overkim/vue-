<template>
  <div id="page1">
    page1
    <div>{{ userList.id }}---{{userList.name}}</div>
    <button @click="send">发送数据</button>
  </div>
</template>

<script>
// import bus from '../eventBus';
export default {
  name: 'page1',
  data(){
  	return {
  		userList:{
        id:1,
        name:'刘巍'
      }
  	}
  },
  methods:{
    send(){
      this.$bus.$emit('sendData',this.userList);
    }
  },
  mounted(){
  }
}
</script>

<style>
#page1 {
  width:100%;
  height:60px;
  color:#000;
  background:pink;
}
</style>
