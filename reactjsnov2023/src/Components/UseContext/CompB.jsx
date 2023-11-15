import React, { useContext } from 'react'
import { userContext } from './CompA'
import CompC from './CompC'

const CompB = () => {

    const username = useContext(userContext)
  return (
    <>
    <h1>From comp B : {username}</h1>
     <CompC/>
    </>
 
  )
}

export default CompB