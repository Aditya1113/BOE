import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Address = () => {

    const [address,setAddress] = useState()
    const location = useLocation()

    useEffect(()=>{
        setAddress(location.state?.address)
    })
  return (
   <div className="container">
     <ul className="collection">
          <li class="collection-item avatar">
            <span class="title">{address?.city}</span>
            <p>
              {address?.zipcode} <br />
              {address?.street}
            </p>
          </li>
        </ul>
   </div>
  )
}

export default Address