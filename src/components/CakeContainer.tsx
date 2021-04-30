import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
const CakeContainer = (props:any) => {
    return (
        <div>
             <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return{
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)

