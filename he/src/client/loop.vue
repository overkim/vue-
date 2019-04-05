<template>
  <div id="loop">
    子集：轮播组件
    <span v-for="(item,index) in list">
    	{{ item }}
    </span>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'loop',
  props:['list'],
  data(){
  	return {
  		msg:'紫漠上神',
  		userName:'剑哥哥'
  	}
  },
  mounted(){
  	this.$emit('send',this.msg,this.userName)
  }
}
</script>

<style>
#loop {
  width:100%;
  height:60px;
  color:#fff;
  background:green;
}
</style>
