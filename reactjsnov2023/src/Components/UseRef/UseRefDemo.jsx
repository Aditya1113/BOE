import { scryRenderedComponentsWithType } from "react-dom/test-utils"

// UseRef

// 1) It creates a mutable variable which will not re-render the components

// 2) Used to access a DOM element directly

import React, { useEffect, useRef, useState } from 'react'

const UseRefDemo = () => {

    const [userInput,setUserInput] = useState('')
    const [count,setCount] = useState()

    // const count = useRef(0)

    console.log(count)

    useEffect(()=>{
        setCount(prev=>prev+1)   //updating the state
        // count.current++;
    })
  return (

    <div>
        <input type="text" value={userInput}
        onChange={(e)=>setUserInput(e.target.value)}/>
    <p>The number of times comp rerender : {count}</p>
    </div>

  )
}

export default UseRefDemo


