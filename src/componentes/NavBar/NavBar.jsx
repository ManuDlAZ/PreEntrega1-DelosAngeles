import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Dragon's Hoard Emporium</h1>
        <nav>
            <ul>
                <li>Manuals</li>
                <li>Dices</li>
                <li>Adventures</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar