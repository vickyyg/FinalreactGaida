import React from 'react';
import { useState, createContext } from "react";

    export const CarritoContext = createContext({carrito:[]});

    export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);


    const agregarProducto = (item, cantidad) => {
        console.log(yaEstaEnCarrito(item.id))
        if(!yaEstaEnCarrito(item.id)) {
            
            setCarrito(prev => [...prev, {item, cantidad}]);
        } else {

            setCarrito(carrito => {
                return carrito.map(element => {
                    if(element.item.id === item.id){
                        element.cantidad += cantidad
                    }
                    return element
                })
            }) 
        }
    }
    const calcTotal = ( ) => {
        let total = 0
        carrito.forEach(
            element => total += element.cantidad * element.item.precio
            )
        return total
    }


    const deleteProduct = (id) => {
        const productoEliminado = carrito.filter((prod) => prod.item.id !== id);
        setCarrito(productoEliminado);
    }
    

    const totalCantidad = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
    } 
    const total = () => {
        return carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }



    const yaEstaEnCarrito = (id) => {
        return carrito.some((prod) => prod.item.id === id);
    };
    const carritoCounter = () => carrito.length
    
    

    return (
        <CarritoContext.Provider value={{carrito, agregarProducto,totalCantidad,total, deleteProduct, vaciarCarrito, calcTotal, carritoCounter}} >
            {children}
        </CarritoContext.Provider>
    )


}

export default CarritoProvider;