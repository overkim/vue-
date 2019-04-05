<template>
    <div>   
    <div class="head">
        <router-link to="/" active-class="active" exact><i class="iconfont">&#xe641;</i>首页
        </router-link>
        <router-link to="/list" active-class="active"><i class="iconfont">&#xe65f;</i>列表</router-link>
        <router-link to="/car" active-class="active"><i class="iconfont">&#xe600;</i>购物车</router-link>
        <router-link to="/add" active-class="active"><i class="iconfont">&#xe61e;</i>添加</router-link>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted:function(){
        
    }
}
</script>
<style scoped>
  .head{
      position: fixed;
      z-index: 1000000;
      bottom: -1px;
      width: 100%;
      height: 50px;
      background: #fff;
      display: flex;
      justify-content: space-around;
  }
  .head a{
      display: block;
      width: 25%;
      text-align: center;
      color: rgb(14, 166, 216);
      background: #fff;
      line-height: 24px;
  }
  .head a i{
      display: block;
      font-size: 19px;
  }
  .head .active{
      background: rgb(14, 166, 216);
      color: #fff;
  }
  
 
</style>


