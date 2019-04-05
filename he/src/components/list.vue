<template>
<div class="box">
<ul class="uu">
    <li>
       名称：{{good.userName}}
     </li>
     <li>
       简介：{{good.age}}
     </li>
   </ul>
</div>
</template>

<script>
import {getOne} from "../assets/index.js";
    export default {
        name: "detail",
        data(){
          return{
              good:{}
          }
        },
        created(){
          this.getOneBook();
          this.modify();
        },
        methods:{
         async getOneBook(){
             let good= await getOne(this.bookid);
             this.good=good;
             console.log(good)        
         },
         modify(){
             let data=JSON.stringify(this.good)
         }
        },
        computed:{
            bookid(){
                return this.$route.params.bookid
            }
        },
        components:{
           
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
</style>
