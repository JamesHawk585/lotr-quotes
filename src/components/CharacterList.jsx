import React from 'react'
import { characters } from '../db'
import Character from './Character'

const CharacterList = ({ characters }) => {
    const characterList = characters.map(character => 
    <Character key={crypto.randomUUID()} character={character}/>)
  return (
    <div className="characters-flex">
        {characterList}
    </div>
  )
}

export default CharacterList