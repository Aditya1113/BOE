import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Personal = () => {
  const [personal,setPersonal] = useState()
  const location = useLocation()

  useEffect(()=>{
      setPersonal(location.state?.personal)
  })
return (
 <div className="container">
   <ul className="collection">
        <li class="collection-item avatar">
          <span class="title">{personal?.phone}</span>
          <p>
            {personal?.website} <br />
          </p>
        </li>
      </ul>
 </div>
)
}

export default Personal