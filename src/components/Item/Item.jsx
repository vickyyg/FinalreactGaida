import './Item.css'
import React from 'react'
import { Link } from 'react-router-dom'


  const Item = ({id, nombre, precio, img}) => {
  
    return (
      <section className=''>
        <div className='cards'>
        <p className='style'> {nombre}</p>
        <p className='style'>Precio : {precio}</p>
        <img  className='imgProducto' src={img} alt={nombre}/>
        
      <Link className='detalles' to={`/item/${id}`} > Ver Detalles </Link>
        </div>
        </section>
    )
  }

export default Item