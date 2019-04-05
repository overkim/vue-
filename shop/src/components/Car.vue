<template>
<div class="car">
      <tou :back="true">购物车</tou>
      <div class="kong"></div>
      <label>
         全选 <input type="checkbox" v-model="checkAllA" id="checkall"/>
      </label>
      <div v-for="item in carlist||list">
          <input id="bu" type="checkbox"  v-model="item.sel"/>
     <img class="im" :src="item.goodimg"/>
          <div class="right" value="dianji">
         <p class="sp">{{item.goodname}}</p>
          <p class="sp">价格：${{item.price}}</p>
         <p class="sp">简介：{{item.info}}</p>
         <p>数量：{{item.count}}</p>
     </div>     
      </div>
      <p><button>+</button>{{total}}<button>-</button></p> 
      <p>价格：{{jia}}元</p> 
      <div style="height:50px" class="kong"></div>
</div>
</template>

<script>
import tou from "../base/tou";
import {mapState,mapGetters,checkAllA} from "vuex";
    export default {
        name: "car",
        data(){
          return{
              list:[],
              checkAllA:true
          }
        },
        created(){
          
        },
        components:{
            tou
        },
        methods:{
         
        },
        computed:{        
              ...mapState(['carlist']),
              ...mapGetters(['total','jia',"checkAllA"]),
              get(){
                  return this.$store.getters.checkAllA
              },
              set(val){
                this.carlist.forEach(item=>item.sel=val)
                this.$store.commit("check",val)
              }
        },
        mounted(){
           
           
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
#bu[type="checkbox"]{
    width: 29px;
    height: 22px;
    -webkit-appearance: none;
    vertical-align:middle;
    margin-top:-110px;
    background:#fff;
    border:#999 solid 1px;
    border-radius: 3px;
}
#bu[type=checkbox]:checked::after{
    content: '选中';
    font-size: 5px
}
</style>
