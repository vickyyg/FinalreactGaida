import React, { useState, useEffect } from 'react';
import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { CircleLoader } from 'react-spinners';
import './Cart.css';

const Cart = () => {
  const { carrito, total, totalCantidad, vaciarCarrito, deleteProduct} = useContext(CarritoContext);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Simulamos un tiempo de carga de 2 segundos
    setTimeout(() => {
      setLoading(false); // Ocultar el spinner
    }, 2000);
  }, []);

  if (totalCantidad() === 0 && !loading) {
    return (
      <>
        <h2 className='estilo'>No hay productos en el carrito</h2>
        <Link className='producto' to='/'>Seguir comprando</Link>
        
        <h3>Total: ${total()}</h3>
      </>
    );
  }

  return (
    <div className='container'>
      {loading ? (
        <div className="spinner-container">
          <CircleLoader color="rgb(60, 117, 60)" loading={true} size={50} />
          <p>Cargando...</p>
        </div>
      ) : (
        <>
          {carrito.map((producto) => (
            <CartItem key={producto.item.id} {...producto} onEliminar={deleteProduct} />
          ))}
          <button className='finalizar' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
          <Link className='finalizar2' to='/formulario'>Finalizar Compra</Link>
          <Link className='producto' to='/'>Seguir comprando</Link>
        </>
      )}
    </div>
  );
}

export default Cart;





