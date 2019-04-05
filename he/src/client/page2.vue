<template>
  <div id="page2">
    page2
    <div>{{ userList.id }}--{{ userList.name }}</div>
  </div>
</template>

<script>
// import bus from '../eventBus';
export default {
  name: 'page2',
  data(){
  	return {
  		userList:{}
  	}
  },
  methods:{

  },
  mounted(){
  	let that = this;
    this.$bus.$on('sendData',function(userList){
      that.userList = userList;
      console.log(userList)
    })
  }
}
</script>

<style>
#page2 {
  width:100%;
  height:60px;
  color:#fff;
  background:red;
}
</style>
