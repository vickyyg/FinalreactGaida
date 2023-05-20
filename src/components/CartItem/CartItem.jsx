import React from 'react'
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
  return (
    <div className='container1'>
        <h4 className='estilo'>{item.nombre}</h4>
        <p className='estilo' >Cantidad: {cantidad}</p>
        <p  className='estilo'>Precio: $ {item.precio}</p>
    </div>
  )
}

export default CartItem