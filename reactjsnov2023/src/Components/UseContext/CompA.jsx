import React, { createContext, useState } from 'react'
import CompB from './CompB'

export const userContext = createContext()

const CompA = () => {
    const [username, setUsername] = useState('Peter Parker')
  return (
    <userContext.Provider value={username}>

            <CompB />

    </userContext.Provider>
   
  )
}

export default CompA