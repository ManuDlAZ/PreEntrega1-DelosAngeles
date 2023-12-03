import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting={"Welcome, Adventurer, to Dragon's Hoard Emporium – where realms of imagination and Dungeons & Dragons converge! Unearth a trove of magical treasures, from spellbinding dice sets to epic apparel and artifacts. Embark on a shopping quest and gear up for your next campaign. May your rolls be crits, and your adventures legendary! Start your journey now, and may the dice be ever in your favor!"}/>
    </div>
  )
}

export default App