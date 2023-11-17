import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake, buyCandle } from './CakeAction'

const CakeContainer = () => {


    const [qty,setQty] = useState()
    const result = useSelector((state)=>state)

    const dispatch = useDispatch()

  return (
    <div className='container'>
        <h4>Cake Shop</h4>
        <h3 className='blue-text text-darken-3'>Number of Cakes : {result.cake.numberOfCakes} </h3>
        <div className="row">
            <div className="input-field col s12">
                <input type="number" id='qty' className='validate' onChange={(event)=>setQty(event.target.value)}/>
                <label htmlFor='qty'>Enter Quantity</label>
            </div>
        </div>

    <button onClick = {()=>dispatch(buyCake(qty))} className="wave-effect wave-light btn-purple">Buy Cake</button>
    
    {/* BUY_CANDLE */}
    <h3 className='teal-text'>
        Number Of Candles : {result.cake.numberOfCandles}
    </h3>

    <button onClick = {()=>dispatch(buyCandle())} className="wave-effect wave-light btn-purple">Buy Candle</button>

    </div>
  )
}

// useSelector (): used to get the state value from redux store

export default CakeContainer