import React, { useState, useEffect } from 'react';
import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { CircleLoader } from 'react-spinners';
import './Cart.css';

const Cart = () => {
  const { carrito, vaciarCarrito, eliminarProducto } = useContext(CarritoContext);
  const [isLoading, setIsLoading] = useState(true);

  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

  const handleEliminarProducto = (id) => {
    eliminarProducto(id);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return (
      <div className='container'>
        <div className="spinner-container">
          <CircleLoader color="#3a752f" size={25} />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (totalCantidad === 0) {
    return (
      <>
        <h2 className='estilo'>No hay productos en el carrito</h2>
        <Link className='producto' to='/'>Seguir comprando</Link>
      </>
    );
  }

  return (
    <div className='container'>
      {carrito.map(producto => (
         <CartItem key={producto.id} {...producto} id={producto.id} onEliminar={handleEliminarProducto} />
      ))}
      <h3>Total: ${total}</h3>
      <button className='finalizar' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
      <Link className='finalizar2' to='/formulario'>Finalizar Compra</Link>
      <Link className='producto' to='/'>Seguir comprando</Link>
    </div>
  );
};

export default Cart;




// import React,{ useState} from 'react';
// import { CarritoContext } from "../../Context/CarritoContext"
// import { useContext } from "react"
// import { Link } from "react-router-dom"
// import CartItem from "../CartItem/CartItem"
// import { PacmanLoader } from 'react-spinners';
// import './Cart.css'


// const Cart = () => {
//     const { carrito, vaciarCarrito, eliminarProducto } = useContext(CarritoContext);
  
//     const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
//     const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);
  
//     const handleEliminarProducto = (id) => {
//       eliminarProducto(id);
//     };
  
//     if (totalCantidad === 0) {
//       return (
//         <>
//           <h2 className='estilo'>No hay productos en el carrito </h2>
//           <Link className='producto' to='/'>Seguir comprando</Link>
//         </>
//       );
//     }
  
//     return (
//       <div className='conta/* iner'>
//         {carrito.map(producto => (
//           <CartItem key={producto.id} {...producto} id={producto.id} onEliminar={handleEliminarProducto} />
//         ))}
//         <h3>Total: ${total}</h3>
//         <button className='finalizar' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
//         <Link className='finalizar2' to='/formulario'>Finalizar Compra</Link>
//         <Link className='producto' to='/'>Seguir comprando</Link>
//       </div>
//     );
//   };
  

//   export default Cart */


/* const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);


    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);


    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if(totalCantidad === 0) {
        return (
            <>
                <h2 className='estilo'>No hay productos en el carrito </h2>
                <Link className='producto' to='/'> Seguir comprando </Link>

            </>
        )
    }

    return (
        <div className='container' >
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total} </h3>
            <button className='finalizar' onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link className='finalizar2' to='/formulario'> Finalizar Compra </Link>
            <Link className='producto' to='/'> Seguir comprando</Link>
        </div>
    )
 
}



export default Cart




 */