import React from 'react'
import QuoteList from './QuoteList'

const Character = ({character}) => {
    const {name, race, weapon, status, image, quotes} = character
  return (
    <div className="character">
        <img src={image} alt={`Character porttrait of ${name}`} />
        <h2>{name}</h2>
        <p>{race}</p>
        <p>{status}</p>
        <p>{weapon}</p>
        <QuoteList quotes={quotes}/>
    </div>
  )
}

export default Character