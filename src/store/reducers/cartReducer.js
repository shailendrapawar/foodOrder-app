


export function cart_add(payload){
    return {type:"cart/add",payload:payload}
}
export function cart_remove(payload){
    return {type:"cart/remove",payload:payload}
}
export function cart_increaseQty(payload){
    return {type:"cart/increaseQty",payload:payload}
}

export function cart_decreaseQty(payload){
    return {type:"cart/decreaseQty",payload:payload}
}


export  function cartReducer(state=[],action){
    switch(action.type){
        case "cart/add":{

            return [...state,{...action.payload,qty:1}]
        }
        case "cart/remove":{
            return state.filter((item)=>{
                if(item.id!=action.payload.id){
                    return item
                }
            })
        }

        case "cart/increaseQty":{
            return state.map((item)=>{
                if(item.id===action.payload.id){
                    return {...item,qty:item.qty+1}
                }
                return item
            })
        }


        case "cart/decreaseQty":{
            return state.map((item)=>{
                if(item.id===action.payload.id){
                    return {...item,qty:item.qty-1}
                }
                return item
            }).filter((item)=>item.qty>0)
        }


        default : return state

    }
}