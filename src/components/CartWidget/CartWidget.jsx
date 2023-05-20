import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext" 


const CartWidget = () => {
    const {carritoCounter} = useContext(CarritoContext);
    return(
        <div>
            {carritoCounter()}
            <img src="./img/carritocompras.png" style={{width: "100px"}} alt=""/>

            <Link to='/cart'></Link>
        </div>
    )
}

export default CartWidget