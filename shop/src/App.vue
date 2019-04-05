<template>
  <div id="app">
    <div class="view">
      <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    </div>
     <vheader/>
  </div>
</template>

<script>
import axios from "axios";
import vheader from "./base/Vheader";
export default {
  name: 'App',
  data(){
    return{
       
    }
  },
  components:{
    vheader
  }
}
</script>

<style>
.view{
  margin: 0 auto;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
.kong{
    width: 100%;
    height: 45px;;
}
</style>
