import React from 'react'
import './CartItem.css'

    const CartItem = ({item, cantidad, onEliminar}) => {
    return (
        <div className='container1'>
            <h4 className='estilo'>{item.nombre}</h4>
        <p className='estilo' >Cantidad: {cantidad}</p>
        <p className='estilo'>Precio: $ {item.precio}</p>
            <button onClick={() => onEliminar(item.id)}>Eliminar</button>
        </div>
        )
    }

export default CartItem