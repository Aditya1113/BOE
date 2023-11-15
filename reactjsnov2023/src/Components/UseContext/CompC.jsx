import React, { useContext } from 'react'
import { AgeContext, nameContext } from './CompA'

const CompC = () => {

const username = useContext(nameContext)
const age = useContext(AgeContext)

  return (
    <div>
        <h2>CompC : username = {username}</h2>
        <h2>CompC : age = {age}</h2>
        </div>
  )
}

export default CompC