<template>
   <div>
      <div>
       <router-link to="/admin">跳到老何</router-link>      
    </div> 
      <div v-for="good in alllist">
      <router-link :key="good.id" :to="{name:'List',params:{bookid:good.id}}" tag="li" class="tab">
         <p class="sp">姓名：{{good.userName}}</p>
         <p class="sp">简介：{{good.age}}</p>         
       </router-link>
      </div>
      <router-view/>
    </div>
</template>

<script>
import {getAll} from "../assets/index.js";
    export default {
        name: "list",
        data(){
        return{
            alllist:[]
        }
        },
         created(){
           this.getall()
        },
        mounted(){
              
         
        },
        methods:{
          async getall(){
            let alllist=await getAll();
            this.alllist=alllist;
            console.log(this.alllist)
         }
        },
        components:{
            
        }
    }
</script>

<style scoped>
.tab{
    border: 1px solid blue;
    margin-top: 5px;
}
</style>
