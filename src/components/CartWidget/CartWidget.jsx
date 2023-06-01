import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext" 



const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  
  return (
    <Link to='/cart'>
      <img src="./img/carritocompras.png" style={{width: "100px"}} alt=""/>
      {
        totalCantidad
      }


    </Link>
  )
}
/* const CartWidget = () => {
    const {carritoCounter} = useContext(CarritoContext);
    return(
        <div>
            {carritoCounter()}
            <img src="./img/carritocompras.png" style={{width: "100px"}} alt=""/>

            <Link to='/cart'></Link>
        </div>
    )
} */

export default CartWidget