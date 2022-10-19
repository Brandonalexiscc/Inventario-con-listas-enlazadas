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
    cambiarProducto(nuevo, posicion) {
        posicion--;
        let aux = this.inicio;
        let cont = 1;
        if(posicion === 0){
            this.inicio = nuevo;
            nuevo.siguiente = aux;
        } else {
            while(cont < posicion){
                aux = aux.siguiente;
                cont++;
            }
            if (posicion > cont) {
                this.agregarProducto(nuevo);
            } else {
                let aux = this.inicio;
                let cont = 0;
                while (cont < posicion - 1) {
                    aux = aux.siguiente;
                    cont++;
                }
                if (cont === posicion - 1) {
                    let temp = aux.siguiente;
                    aux.siguiente = nuevo;
                    nuevo.siguiente = temp;
                }
            }
        }
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

    listarInverso() {
        let aux = this.inicio;
        let cadena = '';
        while (aux) {
            cadena = `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${aux.nombre}
                    <strong>Codigo</strong>: ${aux.codigo}
                    <strong>Cantidad</strong>: ${aux.cantidad}
                    <strong>Costo</strong>: ${aux.costo}
                </div>
            </div>
            ` + cadena;
            aux = aux.siguiente;
        }
        return cadena;
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