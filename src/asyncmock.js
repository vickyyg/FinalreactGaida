const productos = [
     {nombre: "Tierra", precio: 700, id: "1", stock: 10, img: "./img/tierra.webp", idCat: 2},
    {nombre: "Paneles", precio: 20000, id: "2", stock: 10, img: "./img/paneles.jpg", idCat: 3},
    {nombre: "Fertilizante", precio: 1000, id: "3", stock: 10, img: "./img/fertilizante.jpg", idCat: 3},
    {nombre: "Indoor", precio: 10000, id: "4", stock: 10, img: "./img/indoor.jpg", idCat: 3},
    {nombre: "Aceite", precio: 1500, id: "5", stock: 10, img: "./img/aceite.jpg", idCat: 2},
    {nombre: "Maceta", precio: 500, id: "6", stock: 10, img: "./img/Maceta.avif", idCat: 2}, 

]

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 2000)
    })
}

export const obtenerUnProducto = () => {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(productos);
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getCategorias = (idCategoria) => {
    return new Promise( resolve =>{
        setTimeout( () =>{
            const productosCategorias = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategorias);
        }, 100)
    } )
}