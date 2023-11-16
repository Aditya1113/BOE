import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Company = () => {
  const [company,setCompany] = useState()
  const location = useLocation()

  useEffect(()=>{
      setCompany(location.state?.company)
  })
return (
 <div className="container">
   <ul className="collection">
        <li class="collection-item avatar">
          <span class="title">{company?.name}</span>
          <p>
            {company?.catchPhrase} <br />
            {company?.bs}
          </p>
        </li>
      </ul>
 </div>
)
}

export default Company