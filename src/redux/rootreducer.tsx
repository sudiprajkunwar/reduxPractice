import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";


const rootReducer:any= combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

export default rootReducer;