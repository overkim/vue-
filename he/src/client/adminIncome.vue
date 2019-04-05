<template>
  <div id="adminIncome">
    adminIncome
    <div v-for="(item,index) in list">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'adminIncome',
  data(){
  	return {
      list:[]
  	}
  },
  methods:{

  },
  created(){
    let that = this;
  	this.$bus.$on('sendData',function(list){
      that.list = list;
      //当数据发送完成后，立即释放当前接收数据的监听函数
      this.$bus.$off('sendData');
      console.log(that.list,1)
    })
  }
}
</script>

<style>
#adminIncome {
  width:100%;
  height:100%;
  color:#fff;
  background:green;
}
</style>
