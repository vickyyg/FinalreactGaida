import React, { useContext } from 'react'
import { useState } from 'react'
import { db } from '../Servise/Firebase/Config'
import { collection, addDoc } from 'firebase/firestore'
import './Formulario.css' 
import { Link } from 'react-router-dom'
import { CarritoContext } from '../Context/CarritoContext'



const Formulario = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const handleSubmit = (event) => {
    event.preventDefault();

      //Validar que los campos esten completos
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
        setError("Por favor complete todos los campos");
        return;
    }

      //Validamos que los campos del email coincidan
    if (email !== emailConfirmacion) {
        setError("Los campos del email no coinciden");
        return;
    }

      //Creamos el objeto de la orden: 
    const orden = {
        items: carrito.map((producto) => ({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad: producto.cantidad,
        })),
          total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
        nombre,
        apellido,
        telefono,
        email
    };

      //Guardamos la orden en la base de datos: 
    addDoc(collection(db, "Formulario"), orden)
        .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
            })
        .catch((error) => {
            console.error("Error al crear la orden", error);
            setError("Se produjo un error al crear la orden, vuelva más tarde");
        })
    }

    return (
    <div className='containerForm'>
        <h2>Estas a unos pasos de tu compra!</h2>
        <form onSubmit={handleSubmit}>
            {carrito.map((producto) => (
                <div key={producto.item.id}>
                    <p>
                        {producto.item.nombre} x {producto.cantidad}
                    </p>
                    <p>Precio $: {producto.item.precio} </p>
                    <hr />
                </div>
            ))
            }
            <hr />
            <div >
                <label htmlFor="">Nombre</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Email </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Email Confirmación</label>
                <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>
            {error && <p style={{ color: "red" }}> {error} </p>}
            <button className='finalizar' type='submit'>Finalizar Compra</button>
        </form>
        {
            ordenId && (
                <strong>¡Gracias por tu compra! Tu número de orden es {ordenId} </strong>
            )}
            </div>
        )
    }

export default Formulario;



