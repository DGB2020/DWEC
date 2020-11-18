class Coche {
    constructor(nombre,color,km,arrancado){
        this.nombre = nombre;
        this.color = color;
        this.km = km;
        this.arrancado = arrancado;
    }
    arrancar(){
        this.arrancado = true;
    }
}