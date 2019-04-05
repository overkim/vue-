<template>
<div class="da">
<div ref="mu" class="mu"   v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="white"></div>
  <tou>首页</tou>
   <swiper :swiperSlides="res"/>
   <div class="dak">
   <ul class="kuang" v-for="item in hotlist">
     <img :src="item.goodimg"/>
     <li>
       名称：{{item.goodname}}
     </li>
     <li>
       简介：{{item.info}}
     </li>
     <li>
       价格：{{item.price}}元
     </li>
   </ul>
   </div>
   <div class="clear"></div>
</div>
</template>

<script>
import swiper from "../base/swiper";
import { getSlider, getHot } from "../api";
import tou from "../base/tou";
export default {
  name: "home",
  data() {
    return {
      res: [],
      hotlist: [],
      loading2: true
    };
  },

  created() {
    this.getBanner();
    this.getHot();
    
  },
  methods: {
    async getBanner() {
      let sliders = await getSlider();
      this.res = sliders;
    },
    async getHot() {
      let hotlist = await getHot();
      this.hotlist = hotlist;
    }
    
  },
  components: {
    swiper,
    tou
  },
  mounted(){
    setTimeout(() => {
          this.loading2=false;

          this.$refs.mu.style.display="none";
     }, 2000);
    
  }
};
</script>
<style scoped>
* {
  list-style: none;
}
.kuang {
  float: left;
  width: 50%;
  position: relative;
  z-index: 10;
  overflow: hidden;
}
.kuang li {
  font-size: 14px;
}
.kuang img {
  width: 220px;
  height: 220px;
}
.dak {
  width: 98%;
  height: 100%;
  float: left;
  margin: 0 auto;
  padding-bottom: 58px;
}
.clear {
  clear: both;
}
.mu{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
}
</style>
