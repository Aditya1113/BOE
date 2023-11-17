import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './CakeAction'

const CakeContainer = () => {


    const result = useSelector((state)=>state)

    const dispatch = useDispatch()

  return (
    <div className='container'>
        <h4>Cake Component</h4>
        <hr />
        <h3 className='blue-text text-darken-3'>Number of Cakes : {result.numberOfCakes} </h3>
        <button onClick = {()=>dispatch(buyCake())} className="waves-effect waves-light btn-purple">Buy Cake</button>
    </div>
  )
}

// useSelector (): used to get the state value from redux store

export default CakeContainer