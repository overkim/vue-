import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import  mutations from "./mutation.js"
import logger from "vuex/dist/logger"
import getters from "./getter.js"

let state={
  carlist:[]
};
export default new Vuex.Store({
    state,
    mutations,
    plugins:[logger()],
    getters
})