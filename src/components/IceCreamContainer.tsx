import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'


const IceCreamContainer = () => {
    const [number, setNumber]:any = useState(1)
    const numOfIceCream = useSelector((state:any) => state.iceCream.numOfIceCream)
    const dispatch:any = useDispatch()
    return (
        <div>
            <h2>Number of IceCreams - {numOfIceCream}</h2>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(buyIceCream(number))}>Buy {number} Cake</button>
        </div>
    )
}

export default React.memo(IceCreamContainer)
 