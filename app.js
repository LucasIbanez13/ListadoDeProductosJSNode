const fs = require('fs');
const database = require('./productos')
const argv = require('process').argv;
const accion = argv[2];
const marca = argv[3];
const categoria = argv[4];
const precio = argv[5]; 

switch (accion) { 
    case "listar":
        console.log(`**************** LISTA DE PRODUCTOS ***************`)
        database.listarProductos()
        break; 
    case "agregar":
        console.log(`**************** PRODUCTO AGREGADO ***************`)
        if([marca,categoria,precio].includes(undefined)){
            console.log("Se precisa la marca, categoria y el precio")
        }else{
            const nuevoProducto = {
                marca,
                categoria,
                precio : +precio,
                stock : true
            }
            let productos = database.guardarProductos(nuevoProducto)
            database.listarProductos(nuevoProducto)
            console.log(nuevoProducto)
        }
        break;
        case undefined:
        console.log("Debes indicar una accion")
        break;    
    default:
        console.log("Accion incorrecta");
        break; 
}