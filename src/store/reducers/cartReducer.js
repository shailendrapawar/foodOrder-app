


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

            const index=state.findIndex((item)=>item.id===action.payload.id)
            

            if(index<0){
                
                return [...state,{...action.payload}]
            }else{
                
                const updatedCart=[...state];
                updatedCart[index].quantity+=1;
                return updatedCart
            }
            
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
                    return {...item,quantity:item.quantity+1}
                }
                return item
            })
        }


        case "cart/decreaseQty":{
            return state.map((item)=>{
                if(item.id===action.payload.id){
                    return {...item,quantity:item.quantity-1}
                }
                return item
            }).filter((item)=>item.quantity>0)
        }

        case "cart/removeAll":{
            return []
        }


        default : return state

    }
}