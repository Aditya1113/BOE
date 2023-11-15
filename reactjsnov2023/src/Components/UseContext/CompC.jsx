import React, { useContext } from 'react'
import { userContext } from './CompA'

const CompC = () => {

const username = useContext(userContext)

  return (
    <div>
        <h2>CompC : username = {username}</h2>
        </div>
  )
}

export default CompC