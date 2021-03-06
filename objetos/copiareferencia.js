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

//creamos un nuevo objeto
var coche1 = new Coche("Renault", "amarillo",  0, false);

//copia de referencia//
var copiacoche1referencia= coche1;

//copia a traves del constructor
var copiacoche1constructor = new Coche(coche1.modelo, coche1.color, coche1.kms, coche1.arrancado)


//copia del objeto recorriendo propiedades
var copiacoche1forin = new Coche();
for (var propiedad in coche1){
    copiacoche1forin[propiedad] = coche1[propiedad];
}

//copia objetct assign
var copiacoche1objetassign = Object.assign(new Coche(), coche1);

console.log("arrancamos coche 1 despues de hacer todas las copias");
coche1.arrancar();
console.log("coche 1");
console.dir(coche1);
console.log("copia de ref:")
console.dir(copiacoche1referencia);
console.log("copia constructor");
console.dir(copiacoche1constructor);
console.log("copia forin");
console.dir(copiacoche1forin);
console.log("copia object assign");
console.dir(copiacoche1objetassign)