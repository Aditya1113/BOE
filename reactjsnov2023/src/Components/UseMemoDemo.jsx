import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {

    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)

    const incrementOne = ()=>{
        setCounter1(prev=>prev+1)
    }

    const incrementTwo = ()=>{
        setCounter2(prev=>prev+1)
    }


    // const isEven = ()=>{
    //     console.warn('isEven called')
    //     let i =0;
    //     while(i<2000000000)i++
    //     return counter1%2===0
    // }

    const isEven = useMemo(()=>{
        console.warn('isEven called')
        let i =0;
        while(i<2000000000)i++
        return counter1%2===0
    },[counter1])

    
  return (
    <div>
        <button onClick={incrementOne}>Counter 1 {counter1}</button>
        {/* <span>{isEven()?'Even':'Odd'}</span> */}
        <span>{isEven?'Even':'Odd'}</span>
        <button onClick={incrementTwo}>Counter 2 {counter2}</button>

    </div>
  )
}

export default UseMemoDemo