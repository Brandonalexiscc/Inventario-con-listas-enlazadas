export default class InventarioListaEnlazada{
    constructor(){
        this.inicio = null;
        this.tamaño = 0;
    }

    agregarProducto(nuevo){
        if(this.inicio === null){
            this.inicio = nuevo;
        }else{
            let aux = this.inicio;
            while(aux.siguiente != null){
                aux = aux.siguiente;
            }
            aux.siguiente = nuevo;
        }
    }

    eliminarPorCodigo(codigo){
        let aux = this.inicio;
        
        if(this.inicio.codigo == codigo){
            this.inicio = this.inicio.siguiente;
        }else{
            while(aux.siguiente.codigo!=codigo){
                aux=aux.siguiente;
            }
            if(aux.siguiente.codigo === codigo){
                aux.siguiente = aux.siguiente.siguiente;
            }
        }
    }

    buscarPorCodigo(codigo){
        let aux = this.inicio;
        let cadena = '';
        while(aux){
            if(aux.codigo === codigo){
                cadena += `<div class="card text-center  Tb.4">
                    <div class="card.body">
                        <strong>Producto</strong>: ${aux.nombre};
                        <strong>Codigo</strong>: ${aux.codigo};
                        <strong>Cantidad</strong>: ${aux.cantidad};
                        <strong>Costo</strong>: ${aux.costo}
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
                    <strong>Producto</strong>: ${aux.nombre}
                    <strong>Codigo</strong>: ${aux.codigo}
                    <strong>Cantidad</strong>: ${aux.cantidad}
                    <strong>Costo</strong>: ${aux.costo}
                </div>
            </div>
            `;
            aux = aux.siguiente;
        }
        return cadena;
    }

    listarInventarioInversoListaEnlazada(){
        if(!this.tamaño){
            return null;
        }else{
            let primero = this.inicio;
            let cadena = '';
            while(primero){
                cadena += `<div class="card text-center  Tb.4">
                    <div class="card.body">
                        <strong>Producto</strong>: ${primero.nombre}
                        <strong>Codigo</strong>: ${primero.codigo}
                        <strong>Cantidad</strong>: ${primero.cantidad}
                        <strong>Costo</strong>: ${primero.costo}
                    </div>
                </div>
                `;
                primero = primero.siguiente;
            }
            return cadena;
        }
    }

    insertarProducto(nuevo, posicion){
        let aux = this.inicio;
        let contador = 0;
        if(posicion === 0){
            nuevo.siguiente = this.inicio;
            this.inicio = nuevo;
        }else{
            while(contador < posicion-1){
                aux = aux.siguiente;
                contador++;
            }
            nuevo.siguiente = aux.siguiente;
            aux.siguiente = nuevo;
        }
    }
}