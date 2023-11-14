import React from 'react'

const Card = (props) => {
  return (
    <div>
        <img src={props.imgSrc} alt="" height={400} width={400} />
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>
  )
}

export default Card