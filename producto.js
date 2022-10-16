export default class Productos{
    constructor(nombre,  codigo, cantidad, costo){
        this.nombre = nombre;
        this.codigo = codigo;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    getNombre(){
        return this.nombre;
    }

    getCodigo(){
        return this.codigo;
    }

    getCantidad(){
        return this.cantidad;
    }

    getCosto(){
        return this.costo;
    }
}

 