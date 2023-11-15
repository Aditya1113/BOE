import React, { useEffect, useState } from 'react'

const UseWindowWidth = () => {

    const [smallscreen,setSmallScreen] = useState(false)
    
    const checkScreenSize=()=>{
        setSmallScreen(window.innerWidth<600)
    }

    useEffect(()=>{
        checkScreenSize()
        window.addEventListener('resize',checkScreenSize)
    })

    
  return smallscreen
}

export default UseWindowWidth