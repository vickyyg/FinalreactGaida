import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import './Navegador.css'
import { NavLink, Link } from "react-router-dom";



const Navegador = () => {
    const logo = "./public/img/logo";
  return (

    <header>
      <Link to={"/"}>
      <img src="./img/GrowShop.png" style={{width: "170px"}} alt=""/>
      </Link>
      <ul>
        <li>
          <NavLink className={'categos'} to={`/categoria/2`}>Shop</NavLink>
        </li>

        <li>
          <NavLink className={'categos'} to={`/categoria/3`} >Para plantación</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}

export default Navegador