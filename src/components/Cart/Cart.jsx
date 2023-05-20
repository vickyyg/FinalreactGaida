import React,{ useState} from 'react';
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'



const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);


    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);


    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if(totalCantidad === 0) {
        return (
            <>
                <h2 className='estilo'>No hay productos en el carrito </h2>
                <Link className='producto' to='/'> Ir a tienda </Link>

            </>
        )
    }

    return (
        <div className='container' >
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total} </h3>
            <button className='finalizar' onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link className='finalizar2' to='/formulario'> Finalizar Compra </Link>
        </div>
    )
 
}

export default Cart




/* const Cart = () => {
    const {  carrito: currentCart, calcTotal } = useContext(CarritoContext)
    console.log(currentCart)
    const  [carrito, vaciarCarrito] = useState(currentCart);


    let total = calcTotal()


    return (
        <div className='container'>
            {
            carrito.length > 0 &&
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)}
            
            {
                carrito.length > 0 
                ? 
                <>
                    <h3>Total: ${total}</h3>
                    <div>
                    <button className='finalizar1' onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                    </div>
                    <div>
                    <Link className='finalizar'  to='checkout'>Finalizar compra</Link>
                    </div>
                </>
                :
                <h1>Aun no has agregado nada aqui...</h1>
            }
            
        </div>
    )
}

export default Cart */