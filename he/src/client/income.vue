<template>
  <div id="income">
    income组件
    <div v-for="(item,index) in list">{{item}}</div>
    <router-link to="/adminIncome">去income</router-link>
		
  </div>
</template>

<script>
export default {
  name: 'income',
  data(){
  	return {
      list:['zimo','haomei','xuxiaodiao'],
			val:"",
			vall:""
  	}
  },
  methods:{

	
  },
  beforeDestroy(){
  	this.$bus.$emit('sendData',this.list)
  }
}
</script>

<style>
#income {
  width:100%;
  height:100%;
  color:#000;
  background:pink;
}
</style>
