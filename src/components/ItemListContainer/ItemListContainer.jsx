import React from "react"
import { useEffect, useState } from "react"
import { obtenerProductos, getCategorias } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../../Servise/Firebase/Config" 

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();
    
    useEffect( () =>{
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)): collection(db, "productos");

        getDocs(misProductos)
        .then(res => {
            console.log(res)
            const nuevosProductos = res.docs.map( doc => {
              
                const data = doc.data()
                console.log(data)
                return {id:doc.id, ...data}
            })
      
            setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
    }, [idCategoria])

  /*    useEffect(() => {

        const funcionProductos = idCategoria ? getCategorias : obtenerProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        .catch(error => console.log(error))
     }, [idCategoria])
 */

    return(
        <>
            <h2 style={{ textAlign: "center"}}>{greeting}</h2>
            <ItemList productos = {productos}/>
        </>
    )
}

export default ItemListContainer