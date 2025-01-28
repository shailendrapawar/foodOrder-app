import {combineReducers} from "redux"
import {createStore} from "redux"
import  {menuReducer} from "../store/reducers/menuReducer"
import {cartReducer} from "./reducers/cartReducer"

const rootReducer=combineReducers({
    menu:menuReducer,
    cart:cartReducer,
 
})

 export const myStore=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSIONS__?.())
 myStore.subscribe(()=>{
    console.log(myStore.getState())
 })
 