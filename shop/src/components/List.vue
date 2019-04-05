<template>
   <div>
      <tou :back="true" ref="tou">列表页</tou>
      <ul class="xac" ref="box" @scroll="loadm()">
      <li class="kong"></li>
      <li v-for="good in glist">
      <router-link :key="good.id" :to="{name:'detail',params:{bookid:good.id}}" tag="li">
          <img class="im" :src="good.goodimg"/>
          <div class="right">
         <p class="sp">{{good.goodname}}</p>
         <p class="sp">简介：{{good.info}}</p>
          
          </div>
          </router-link>
          <div class="niu"> <span class="bo" @click="deleteGood(good)">删除</span>
          <span class="bo" @click="add(good)">增加</span></div>
      </li>
          <button @click="loardmore" class="btn">{{moretext}}</button>        
          <div class="kong"></div>
          </ul>
    </div>
</template>

<script>
import tou from "../base/tou";
import {getAll,getPage,deleGood} from "../api";
import * as Types from "../vuex/add.js"
    export default {
        name: "list",
        data(){
        return{
            alllist:[],
            glist:[],
            page:0,
            hashmore:true,
            moretext:"加载更多"
        }
        },
         created(){
           this.getAll();
           this.getp();
        },
        mounted(){
              
         
        },
        methods:{
            add(good){
              this.$store.commit(Types.ADD_CAR,good)         
            },
        async deleteGood(good){
          await deleGood(good.id);
          this.glist=this.glist.filter(item=>item.id!==good.id);
        },
        loadm(){
        let {scrollTop,clientHeight,scrollHeight}=this.$refs.box;
        if(scrollTop+clientHeight+20>scrollHeight){
               this.loardmore();
        }
            },
         loardmore(){
             if(this.hashmore){
                 this.page+=1;
                 this.getp();
             }else{
                 this.moretext="已全部加载完"
             }
         },
         hui:function(){
             this.$router.go(-1)
         },
         async getAll(){
         let alllist=await getAll();
         this.alllist=alllist;
         },
         async getp(){
            
             let {hasmore,glist}=await getPage(this.page);
             this.hashmore=hasmore;
            //  this.goodlist=this.goodlist.concat(goodlist)
             this.glist=[...this.glist,...glist];
             
         }
         
        },
        components:{
            tou
        }
    }
</script>

<style scoped>

.im{
    width: 160px;
    height: 160px;
}
.right{
    float: right;
    width: 48%;
    height: 160px;
    overflow: hidden;
}
.bo{
    position: relative;
    bottom: -9px;
    color: red;
}
.sp{
    padding-bottom: 9px;
}
.swiper-pagination-bullet{
    outline: 0;
    border-radius: 100%;
}
.btn{
    width: 140px;
    color: rgb(250, 249, 249);
    height: 35px;
    padding-bottom: 30px;
    border: 0;
    background: rgb(14, 166, 216);
    display: block;
    margin: 10px auto;
    line-height: 35px;
    outline: none;
    border-radius: 4px;
}
.xac{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: scroll;
}
.niu{
    position: absolute;
    right: 30px;
    margin-top: -47px;
   
}
</style>
