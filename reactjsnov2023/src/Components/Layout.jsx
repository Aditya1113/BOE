import React from 'react'
import UseWindowWidth from './UseWindowWidth'

const Layout = () => {
    const smallscreen = UseWindowWidth()

  return (
    <div>
        {smallscreen?<h1>Small</h1>:<h1>Large</h1>}
    </div>
  )
}

export default Layout