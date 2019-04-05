<template>
  <div>
     <tou :back="true">添加</tou>
<div class="kong"></div>
      <br />
    <div>
    <label for="name">名称：<input type="text" id="name" v-model="good.goodname" /></label>
    <label for="price">价格：<input type="text" id="price" v-model="good.price" /></label>
    <label for="info">简介：<input type="text" id="info" v-model="good.info" /></label>
    <label for="goodimg">图片：<input type="text" id="goodimg" v-model="good.goodimg" /></label>
    </div>
    <div class="ai">
      <button class="btn" @click="add">确认添加</button>
    </div>
  </div>
</template>

<script>
import tou from "../base/tou";
import {addGoodM} from "../api";
    export default {
        name: "add",
        data(){
            return{
                 good:{
                   goodname:11
                  }
            }
        },
        computed:{
          
        },
        components:{
            tou
        },
        methods:{
         hui:function(){
             this.$router.go(-1)
         },
         add(){
           let data =JSON.stringify(this.good)
           addGoodM(data)
         },

         
        }
    }
</script>

<style scoped>
#add{
  position: fixed;
}
label{
  float: left;width: 99%;
  margin-top: 20px;display: block;
  font-size: 20px;
  
}
input{
  width: 100%;height: 30px;border: 1px solid rgb(14, 166, 216);
  outline: none;margin-top: 10px;
}
.btn{
  position: absolute;
  width: 100px;height: 40px;background: rgb(14, 166, 216);
  outline: none;border: 0;color: #fff;font-size: 18px;
  display: block;text-align: center;line-height: 40px;
  left: 50%;top: 50%;
  transform: translate(-50%,0);

}
.ai button{
    position: relative;
    top: 20px;
}
</style>
