import React, { createContext, useState } from 'react'
import CompB from './CompB'

export const nameContext = createContext('')
export const AgeContext = createContext(0)

const CompA = () => {
    

  
  return (
    <nameContext.Provider value="Mike">
         <AgeContext.Provider value={23}>

           { <CompB/>}
           </AgeContext.Provider>

    </nameContext.Provider>
   
  )
}

export default CompA