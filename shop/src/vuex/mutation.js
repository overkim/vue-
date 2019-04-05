import Vue from 'vue'
import * as Types from './add.js'
const mutations ={
  [Types.ADD_CAR](state,good){
  	let product = state.carlist.find(item=>item.id===good.id);
     Vue.set(good,'sel',true)
  	if(product){
  	  product.count +=1;
        //手动更新数组
  	  state.carlist = [...state.carlist];
       
    }else{
  		good.count=1;
  		state.carlist = [...state.carlist,good]
  	}
	},
	check(state,val){
		state.carlist.forEach(item=>item.sel=val)
	}
	}

export default mutations