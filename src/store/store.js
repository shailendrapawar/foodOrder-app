import {combineReducers, createStore} from "redux"
import  menuReducer from "./reducers/menuReducer"
import cartReducer from "./reducers/cartReducer"

const rootReducer=combineReducers({
    menu:menuReducer,
    cart:cartReducer,
    // wishlist:[]
})

 export const store=combineReducers(rootReducer,window.__REDUX_DEVTOOLS_EXTENSIONS__?.())
 