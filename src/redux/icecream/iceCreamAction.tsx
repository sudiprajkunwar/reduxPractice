import { Buy_IceCream } from "./iceCreamtypes";

export const buyIceCream =(number:any)=>{
    return{
        type : Buy_IceCream,
        payload:number
    }
}
