import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)


    const incrementOne = useCallback(()=>{
        setCounter1(prev=>prev+1)
    },[counter2])


    //beacause fun(incrementOne) is created everytime the component loads into memory 
    // and with each render this fun is not the same to the previous one as even though fun name and body is 
    // same but wheenever it is created again it will point to different memory loactions



  return (
    <div>
        Parent Comp Count Value = {counter1}
        <Child counterTwo={counter2} fun={incrementOne}/>
        {/*referential equality in react*/}
        <button onClick={incrementOne}>Add</button>
    </div>
  )
}

export default Parent