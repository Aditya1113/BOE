import React, { useEffect, useState } from 'react'

const useEffectDemo = () => {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    // useEffect(()=>{
    //     console.log('inside useEffect')
    //     console.log('Make an Api Call')
    // },[])

    // []=> Run useEffect once

    //conditionally run useEffect
      useEffect(()=>{
        console.log('inside useEffect')
        console.log('Make an Api Call')
    },[count]) //dependency array

    
    const handleClick=()=>{
        setCount(prevCount=>prevCount+1)
    }
  return (
    <div className='container'>
        <h1>
            Count : {count}
        </h1>
        <button onClick={handleClick}>Click</button>
        <input type='text' onChange={(event)=>setName(event.target.value)} className='validate'/>
        <label htmlFor="newTodo">Add Name</label>
    </div>
    

  )
}

export default useEffectDemo