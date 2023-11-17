import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './CakeAction'

const TestContainer = () => {


    const result = useSelector((state)=>state)

    const dispatch = useDispatch()

  return (
    <div className='container'>
    <h4>Test Component</h4>
    <hr />
    <h3 className='blue-text text-darken-3'>Number of Cakes : {result.numberOfCakes} </h3>
    <button onClick = {()=>dispatch(buyCake())} className="waves-effect waves-light btn-purple">Buy Cake</button>
</div>
  )
}

export default TestContainer