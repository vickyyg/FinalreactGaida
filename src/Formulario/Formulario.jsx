import React, { useContext } from 'react'
import { useState } from 'react'
import { db } from '../Servise/Firebase/Config'
import { collection, addDoc } from 'firebase/firestore'
import './Formulario.css' 
import { Link } from 'react-router-dom'
import { CarritoContext } from '../Context/CarritoContext'



 const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false)
    const {vaciarCarrito} = useContext(CarritoContext)
    const handleSubmit = (e) =>{
      e.preventDefault()
      setIsConfirmed(true)
      vaciarCarrito()
    }

  return (
    <div className='form-container'>

    {
      isConfirmed ? <h2>Gracias por comprar en Green GrowShop!</h2>
      :
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Nombre</label>
        <input type='text' value={nombre} onChange={(event) => setNombre (event.target.value)} required/>

        <label htmlFor=''>Apellido</label>
        <input type='text' value={apellido} onChange={(event) => setApellido (event.target.value) } required/>

        <label htmlFor=''> Telefono </label>
        <input type='text' value={telefono} onChange={(event) => setTelefono (event.target.value)} required />
        <input type="submit" value="Confirmar" />
    </form>}
    </div>
  )
}

export default Formulario