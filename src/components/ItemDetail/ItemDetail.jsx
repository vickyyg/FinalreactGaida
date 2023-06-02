import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import React,{ useState } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const contadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);


    const item = {id: id, nombre, precio};
    agregarProducto( item, cantidad);
  }


  return (
    <div className='contenedorItem'>
        <h2> {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <p>{descripcion}</p>
        <img style={{height: "250px", width: "200px"}} src= {img} alt= {nombre}/>
        
        {
          agregarCantidad > 0 ? (<Link  className='terminarCompra' to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={contadorCantidad}/>)
        } 
       <Link className='producto' to='/'> Ir a tienda</Link>
    </div>
  )
      }
      
export default ItemDetail;