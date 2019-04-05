<template>
<div>
  <div class="bili">
    {{msg}}
  <i class="iconfont" @click="goHistory" v-if="back">&#xeedd;</i>
  <slot></slot>
  </div>
</div>
</template>

<script>
  export default {
    name: 'home',
    data(){
     return{
         bili:"哔哩哔哩 (゜-゜)つロ 干杯",
         msg:""
     }
    },
   props:{
       back:{
        type:Boolean,
        default:false
       }
    },
  methods:{
    goHistory(){
      this.$router.go(-1)
    }
  }
  }
</script>
<style scoped>
 .bili{
  width: 100%;
  height: 40px;
  background: rgb(14, 166, 216);
  color: #fff;
  text-align: center;
  line-height: 40px;
  position: fixed;
  top: 0;
  z-index: 100;
}
.iconfont{
    position: absolute;
    z-index: 100;
    color: #fff;
    font-size: 18px;
    left:12px;
    
}
 
</style>
