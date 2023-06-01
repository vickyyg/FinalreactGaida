import React from 'react';
import { useState, createContext } from "react";


export const CarritoContext = createContext({carrito:[]});



export const CarritoProvider = ({children}) => {
    

    const [carrito, setCarrito] = useState([]);

 
    console.log(carrito);

  

    const agregarProducto = (item, cantidad) => {
        console.log(yaEstaEnCarrito(item.id))
        if(!yaEstaEnCarrito(item.id)) {
            
            setCarrito(prev => [...prev, {item, cantidad}]);
          
        } else {
            console.log("Producto ya agregado")
           /*  setCarrito(carrito => {
                return carrito.map(element => {
                    if(element.item.id === item.id){
                        element.cantidad += cantidad
                    }
                    return element
                })
            }) */
        }
    }
    const calcTotal = ( ) => {
        let total = 0
        carrito.forEach(
            element => total += element.cantidad * element.item.precio
            )
        return total
    }
 

    const eliminarProducto = (id)  => {
        const setCarrito = carrito.filter( prod => prod.item.id !== id);
    
    }

   

    const vaciarCarrito = () => {
        setCarrito([]);
    }



    const yaEstaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id);
    }
    const carritoCounter = () => carrito.length
    
    

    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito, calcTotal, carritoCounter}} >
            {children}
        </CarritoContext.Provider>
    )


}

export default CarritoProvider;