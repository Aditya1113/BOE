import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Protected = (props) => {


    const {Component} = props

    const navigate = useNavigate()

    useEffect(()=>{
        let login = sessionStorage.getItem("role");
        if(!login){
            navigate('/login')
        }
        else if(login==='guest')
            navigate('/home')
    },[navigate])

  return (
    <Component/>
  )
}

export default Protected