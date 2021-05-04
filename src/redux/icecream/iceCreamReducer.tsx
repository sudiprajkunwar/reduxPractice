import { Buy_IceCream } from "./iceCreamtypes"

const initialState:any = {
    numOfIceCream:30
}

const iceCreamReducer = (state = initialState, action:any)=>{
    switch(action.type){
        case Buy_IceCream: return{
            ...state,
            numOfIceCream: state.numOfIceCream - action.payload
        }
        default:return state
    }

}
export default iceCreamReducer