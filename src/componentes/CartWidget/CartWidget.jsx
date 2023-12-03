import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imagenCarrito = "https://iconape.com/wp-content/png_logo_vector/shopping-cart.png"
  return (
    <div>
        <img className ='imagenCarrito' src={imagenCarrito} alt='imagen de un carrito de compras'/>
        <strong> 6 </strong>
    </div>
  )
}

export default CartWidget