import React, { useEffect, useRef } from 'react'

const UseRefDemo2 = () => {

    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    })

    const changeBorder=()=>{
        inputRef.current.style.backgroundColor = 'red'
    }
  return (
    <div className='container'>
        <input type="text" 
        ref={inputRef}
        />
        <button onClick={changeBorder}>submit</button>
    </div>
  )
}

export default UseRefDemo2