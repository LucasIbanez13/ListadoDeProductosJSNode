const fs = require('fs');

const leerJSON = function(){
    const productos = fs.readFileSync('./productos/productos.json', 'utf-8')
    return productos
} 

const parsearJSON = function(json){
    const jsonParseado = JSON.parse(json)
    return jsonParseado
}
const escribirJSON = function(tareas){
  const tareasString = JSON.stringify(tareas,null,3)
  fs.writeFileSync('./productos/productos.json', tareasString, 'utf-8')
  tareas = parsearJSON(leerJSON())
  return tareas
}

module.exports = module.exports = {
    listarProductos: (productos = parsearJSON(leerJSON())) => {
      for (let i = 0; i < productos.length; i++) {
        console.log(
          `* ${productos[i].categoria} ${productos[i].marca} -> $${
            productos[i].precio
          }`
        );
      }
      return productos;
    },
    guardarProductos : (nuevoProducto) => {
        const productos = parsearJSON(leerJSON())
        productos.push({
            ...nuevoProducto
        })
        return escribirJSON(productos)
    },
 }