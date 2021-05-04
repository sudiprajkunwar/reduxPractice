import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'


const ItemContainer = (ownProps:any) => {
    const [number, setNumber]:any = useState(1)
    const dispatch:any = useDispatch()
    const item = useSelector((state:any) => {
        const itemState= ownProps.cake ?state.cake.numOfCakes:state.iceCream.numOfIceCream
        return itemState;
    })
    
    const dispatchfunction =(ownProps:any)=> {
      return  ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream(number))
    }
    return (
        <div>
            <h2>Item -{item} </h2>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={dispatchfunction(ownProps)}>Buy {number} Item</button>
        </div>
    
    )
}

export default React.memo(ItemContainer)
 