
import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL="http://localhost:5000"

axios.interceptors.response.use(function (res) {
    //请求过来的数据拦截改造res.data
    return res.data;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  })


export let getSlider=()=>{
	
	return axios.get("/slider")
}

export let getHot=()=>{
	
	return axios.get("/hot")
}

export let getAll=()=>{
	
	return axios.get("/alllist")
}

export let getOne=(id)=>{
	
	return axios.get(`/alllist?id=${id}`)
}
export let getPage=(page)=>{
	
	return axios.get(`/page?page=${page}`)
}
export let addGoodM=(data)=>{
	
	return axios.post('/add',data)
}
export let deleGood =(id)=>{
  return axios.delete(`/delegood?id=${id}`)
}
export let update=(id,data)=>{
  return axios.post(`/update?id=${id}`,data)
}

