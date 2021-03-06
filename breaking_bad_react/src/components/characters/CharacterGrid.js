import React from 'react'
import Spinner from '../ui/Spinner.js'
import CharacterItem from './CharacterItem.js'

const CharacterGrid = ({items , isLoading}) => {
    return isLoading ? ( <Spinner />) :
     (
         <section className="cards">
             {items.map(item => (
                 <CharacterItem key ={item.char_id} item={item} />
             ))}

         </section>
     )
}

export default CharacterGrid
