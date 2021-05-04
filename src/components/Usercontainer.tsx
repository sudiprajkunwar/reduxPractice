import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUser } from '../redux'

const Usercontainer = () => {
    const userData = useSelector((state:any) => state.users.users)
    const dispatch = useDispatch()
    const fetchUsers:any = ()=>dispatch(fetchUser())
    
    useEffect(() => {
        fetchUsers()
    },)
    return( userData.loading ?(<h2>loading</h2>):userData.error?(<h2>error</h2>):(
        <div>
           <h1>users</h1> 
           <ul>
               {userData&& userData.map((data:any) =><li key={data.id.toString()}>{data.name}</li>)}
               </ul> 
        </div>
    ))
    
}

export default Usercontainer
