import React, { useContext } from 'react'
import { AgeContext, nameContext, userContext } from './CompA'

const CompC = () => {

const {username,age} = useContext(userContext)


  return (
    <div>
        <h2>CompC : username = {username}</h2>
        <h2>CompC : age = {age}</h2>
        </div>
  )
}

export default CompC