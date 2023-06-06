import './ItemCount.css';
import React, { useState } from 'react'

    const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        < >
            <div className='item-count-container '>
                <button className='shadow' onClick={restar}> - </button>
            <p> {contador} </p>
                <button className='shadow' onClick={sumar}> + </button>
                <button className='shadow' onClick={() => funcionAgregar(contador)} >Agregar al Carrito</button>
            </div>
        </>
    )
}


export default ItemCount