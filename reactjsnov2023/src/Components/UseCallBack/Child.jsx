import React, { memo } from 'react'

const Child = ({counter2,fun}) => {
    console.log("Child rendered")
  return (
    <div>Child</div>
  )
}

export default memo(Child)