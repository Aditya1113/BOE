import React from 'react'
import { movieData } from '../MovieInfo'
import Card from './Card'

const MovieComp = () => {
  return (
    <div>
        {
            movieData.map((movie,index)=>(
                <Card key={index} {...movie}/>
            ))
        }
    </div>
  )
}

export default MovieComp