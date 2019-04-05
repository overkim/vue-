
const getters={
//    getter和computed计算返回必须return
   total(state){
       let serly=state.carlist.filter(item=>item.sel===true)
      return serly.reduce((prev,next)=>{        
          return prev + next.count
       },0)
   },
   jia(state){
    let serly=state.carlist.filter(item=>item.sel===true)
    return serly.reduce((prev,next)=>{        
        return prev + next.count*next.price
     },0)
 }
 }
 

export default getters