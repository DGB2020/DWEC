
//forma rapida
var edificio = {
                edad: "antigua",
                estilo: "clasico",
                habitantes: 50,
}

//forma lenta 
var edificio2 = new Object();
edificio.edad = "moderna";
edificio.estilo = "contemporáneo";
edificio.habitantes = "80";

//con constructor sin clase
function edificio(edad,estilo,habitantes){
    this.edad = edad;
    this.estilo = estilo;
    this.habitantes = habitantes;
}
var edificio3 = new edificio("antigua","rústico",10);

//con constructor dentro de una clase
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

