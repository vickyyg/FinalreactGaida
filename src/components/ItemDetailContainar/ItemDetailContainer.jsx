import React,{ useEffect, useState } from "react";
import { obtenerUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../Servise/Firebase/Config";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect( () => {
      
      const nuevoDoc = doc(db, "productos", idItem);
      getDoc(nuevoDoc)
        .then(res => {
          const data = res.data();
          const nuevoProducto = {id: res.id, ...data}
          console.log(nuevoProducto)
          setProducto(nuevoProducto);

        })

        .catch(error => console.log(error))

    }, [idItem])

   /*  useEffect( () => {
        obtenerUnProducto(idItem)
        .then(res => setProducto(res))
    }, [idItem])
 */
  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer