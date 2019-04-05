<template>
 <div class="con">
    <swiper v-if="swiperSlides.length>1" :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src="slide"/></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
 </div>
</template>

<script>
  export default {
    name: 'carrousel',
    props:["swiperSlides"],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
           direction: 'horizontal',
    loop: true,
    effect : 'fade',
    simulateTouch : false,
    autoplayDisableOnInteraction : false,
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },
    fadeEffect: {
    crossFade: true,
  },
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    lazy: {
    loadPrevNext: true,
  }
        },
       
      }
    },
    mounted() {
     
    }
  }
</script>
<style  scoped>
 .swiper-container {
    width: 100%;
    overflow: hidden;
}
.swiper-slide img{
  width: 100%;
  height: 178px;
}
.swiper-slide{
overflow: hidden;
}
.con{
  margin-top: 40px;
  overflow: auto;
}
</style>
