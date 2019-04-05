<template>
<div class="box">
<tou :back="true">详情页</tou>
<ul class="uu">
    <img :src="good.goodimg"/>
    <li>
       价格：{{good.price}}元
     </li>
     <li>
       名称：{{good.goodname}}
     </li>
     <li>
       简介：{{good.info}}
     </li>
   </ul>
</div>
</template>

<script>
import {getOne, update} from "../api/index.js";
import tou from "../base/tou";
    export default {
        name: "detail",
        data(){
          return{
              good:{}
          }
        },
        created(){
          this.getOneBook();
        },
        methods:{
         async getOneBook(){
             let good= await getOne(this.bookid);
             this.good=good;
             Object.keys(good).length>0?void 0:this.$router.push("/list")          
         },
         modify(){
             let data=JSON.stringify(this.good)
      
            this.$router.push("/list")

         }
        },
        computed:{
            bookid(){
                return this.$route.params.bookid
            }
        },
        components:{
            tou
        }
    }
</script>

<style scoped>
.box{
    position: relative;
    top: 40px;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.uu{
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.uu img{
    width: 100%;
    height: auto;
}
</style>
