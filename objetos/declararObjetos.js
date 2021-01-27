
//forma rapida
var edificio = {
                edad: "antigua",
                estilo: "clasico",
                habitantes: 50,
};

//forma lenta 
var edificio2 = new Object();
edificio.edad = "moderna";
edificio.estilo = "contemporáneo";
edificio.habitantes = "80";

//con constructor sin clase
function Edificio(edad,estilo,habitantes){
    this.edad = edad;
    this.estilo = estilo;
    this.habitantes = habitantes;
}
var edificio3 = new Edificio("antigua","rústico",10);

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
var cochenuevo = new Coche("opel","azul",0,false);
//con constructor vacio

class Moto {

}
var moto1 = new Moto("negro",1000);



for (const key in edificio3) {
    if (edificio3.hasOwnProperty(key)) {
   console.log(edificio3[key]);
 
    }
}


for (const key in cochenuevo) {
    if (cochenuevo.hasOwnProperty(key)) {
   console.log(cochenuevo[key]);
 
    }
}

for (const key in moto1) {
    if (moto1.hasOwnProperty(key)) {
   console.log(moto1[key]);
 
    }
}

