import Productos from "./producto.js";
import InventarioListaEnlazada from "./inventario2.js";

const inventario = new InventarioListaEnlazada();

document.getElementById('agregar').addEventListener('click', () =>{
    const nombre = document.getElementById('nombre').value;
    const codigo = document.getElementById('codigo').value;
    const cantidad = document.getElementById('cantidad').value;
    const costo = document.getElementById('costo').value;

    const producto = new Productos(nombre, codigo, cantidad, costo);
    inventario.agregarProducto(producto);
    let elemento = inventario.listarInventario();

    let listaProducto = document.getElementById('producto-list');
    listaProducto.innerHTML = elemento;
});


document.getElementById('insertarPosicion').addEventListener('click', () =>{
    const nombre = document.getElementById('nombre').value;
    const codigo = document.getElementById('codigo').value;
    const cantidad = document.getElementById('cantidad').value;
    const costo = document.getElementById('costo').value;
    let posicion = document.getElementById('posicion').value;
    let producto = new Productos(nombre, codigo, cantidad, costo);

    inventario.insertarProducto(producto, posicion);
    let elemento = inventario.listarInventario();

    let listaProducto = document.getElementById('producto-list');
    listaProducto.innerHTML = elemento;
});

document.getElementById('eliminar').addEventListener('click', () => {
    const codigoEliminar = document.getElementById('codigoEliminar').value;
        
    inventario.eliminarPorCodigo(codigoEliminar);

    let elemento = inventario.listarInventario();
    let listaProducto = document.getElementById('producto-list');
    listaProducto.innerHTML = elemento;
    console.log(inventario.inicio);
});

document.getElementById('buscar-Codigo').addEventListener('click', () =>{
    const buscarPorCodigo = document.getElementById('buscarCodigo').value;

    let elemento = inventario.buscarPorCodigo(buscarPorCodigo);
    if (elemento != "") {
        let listaProducto = document.getElementById('producto-list');
        listaProducto.innerHTML = `<h4>Producto Encontrado:</h4><br>${elemento}`;
    }
    else
        alert('Producto No Encontrado');
});

document.getElementById('lista').addEventListener('click', () =>{
    inventario.listarInventario();

    let elemento = inventario.listarInventario();
    let listaProducto = document.getElementById('producto-list');
    listaProducto.innerHTML = elemento;
})

document.getElementById('inverso').addEventListener('click', () =>{
    inventario.listarInventarioInversoListaEnlazada();

    let elemento = inventario.listarInventarioInversoListaEnlazada();
    let listaProducto = document.getElementById('producto-list');
    listaProducto.innerHTML = elemento;
});