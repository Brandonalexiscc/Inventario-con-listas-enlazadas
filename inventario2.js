class Nodo{
    constructor(dato, siguiente){
        this.dato = dato;
        this.siguiente = siguiente;
    }
}

export default class InventarioListaEnlazada{
    constructor(){
        this.inicio = null;
        this.tamaño = 0;
    }

    agregarProducto(nombre, codigo, cantidad, costo){
        let nuevo = new Nodo({codigo, nombre, cantidad, costo}, null);
        if(this.inicio === null){
            this.inicio = nuevo;
        }else{
            let aux = this.inicio;
            while(aux.siguiente){
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
        }
        this.tamaño++;
    }

    mostrarProducto(){
        let cadena = '';
        let aux = this.inicio;
        while(aux){
            cadena += `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${aux.dato.nombre};
                    <strong>Codigo</strong>: ${aux.dato.codigo};
                    <strong>Cantidad</strong>: ${aux.dato.cantidad};
                    <strong>Costo</strong>: ${aux.dato.costo}
                </div>
            </div>
            `;
            aux = aux.siguiente;
        }
        return cadena;
    }

    eliminarPorCodigo(codigo){
        let aux = this.inicio;
        let anterior = null;
        let producto = "";
        while(aux){
            if(aux.dato.codigo === codigo){
                if(!anterior){
                    this.inicio = aux.siguiente;
                }else{
                    anterior.siguiente = aux.siguiente;
                }
                this.tamaño--;
                producto = `El elemento con código ${codigo} ha sido eliminado`;
            }
            anterior = aux;
            aux = aux.siguiente;
        }
        return producto;
    }

    buscarPorCodigo(codigo){
        let aux = this.inicio;
        let cadena = '';
        while(aux){
            if(aux.dato.codigo === codigo){
                cadena += `<div class="card text-center  Tb.4">
                    <div class="card.body">
                        <strong>Producto</strong>: ${aux.dato.nombre};
                        <strong>Codigo</strong>: ${aux.dato.codigo};
                        <strong>Cantidad</strong>: ${aux.dato.cantidad};
                        <strong>Costo</strong>: ${aux.dato.costo}
                    </div>
                </div>
                `;
            }
            aux = aux.siguiente;
        }
        return cadena;
    }

    listarInventario(){
        let aux = this.inicio;
        let cadena = '';
        while(aux){
            cadena += `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${aux.dato.nombre};
                    <strong>Codigo</strong>: ${aux.dato.codigo};
                    <strong>Cantidad</strong>: ${aux.dato.cantidad};
                    <strong>Costo</strong>: ${aux.dato.costo}
                </div>
            </div>
            `;
            aux = aux.siguiente;
        }
        return cadena;
    }

    listarInventarioInverso(){
        let aux = this.inicio;
        let cadena = '';
        while(aux){
            cadena += `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${aux.dato.nombre};
                    <strong>Codigo</strong>: ${aux.dato.codigo};
                    <strong>Cantidad</strong>: ${aux.dato.cantidad};
                    <strong>Costo</strong>: ${aux.dato.costo}
                </div>
            </div>
            `;
            aux = aux.siguiente;
        }
        return cadena;
    }

    insertarProducto(nombre, codigo, cantidad, costo, posicion){
        let nuevo = new Nodo({codigo, nombre, cantidad, costo}, null);
        if(posicion === 0){
            nuevo.siguiente = this.inicio;
            this.inicio = nuevo;
        }else{
            let aux = this.inicio;
            let anterior = null;
            for(let i = 0; i < posicion; i++){
                anterior = aux;
                aux = aux.siguiente;
            }
            nuevo.siguiente = aux;
            anterior.siguiente = nuevo;
        }
        this.tamaño++;
    }
}

let inventario = new InventarioListaEnlazada();
console.log(inventario);
inventario.agregarProducto('Coca Cola', 123, 10, 1.50);
inventario.agregarProducto('Pepsi', 456, 20, 1.50);
inventario.agregarProducto('Fanta', 789, 30, 1.50);
console.log(inventario.mostrarProducto());
console.log('*************************************');
inventario.eliminarPorCodigo(123);
console.log(inventario.mostrarProducto());