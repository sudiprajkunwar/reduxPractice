import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer:any= combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    users: userReducer
})

export default rootReducer;