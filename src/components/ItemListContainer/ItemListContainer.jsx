import React from "react"
import { useEffect, useState } from "react"
import { obtenerProductos, getCategorias } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query } from "firebase/firestore"
import { CircleLoader } from 'react-spinners';
import { db } from "../../Servise/Firebase/Config" ;
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controlar la visibilidad del spinner

    const {idCategoria} = useParams();
    
    useEffect( () =>{
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)): collection(db, "productos");

        setLoading(true); // Mostrar el spinner de carga

        setTimeout(() => {
            getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map( doc => {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })

                setProductos(nuevosProductos);
                setLoading(false); // Ocultar el spinner de carga
            })
            .catch(error => {
                console.log(error);
                setLoading(false); // Ocultar el spinner de carga en caso de error
            });
        }, 2000); // Esperar 2 segundos antes de realizar la consulta
    }, [idCategoria])

    return(
        <>
            {loading ? (
                <div className="spinner-container">
                    <CircleLoader color="rgb(60, 117, 60)" loading={true} size={50} />
                    <p>Cargando...</p>
                </div>
            ) : (
                <>
                    <h2 style={{ textAlign: "center"}}>{greeting}</h2>
                    <ItemList productos={productos} />
                </>
            )}
        </>
    )
}

export default ItemListContainer;
