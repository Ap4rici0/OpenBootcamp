let nombre = "Ramón";
let apellido = "Fernandez";

let estudiante = `${nombre} ${apellido}`;

let nombreMayus = estudiante.toLocaleUpperCase();
console.log(nombreMayus);

let nombreMinus = estudiante.toLocaleLowerCase();
console.log(nombreMinus);

let totalCadena = estudiante.length;
console.log(totalCadena);

let primeraLetra = nombre.slice(0,1);
console.log(primeraLetra);

let ultimaLetra = apellido.slice(8,9);
console.log(ultimaLetra);

let sinEspacios = estudiante.replace(/ /g,"");
console.log(sinEspacios);

let coincide = estudiante.includes("Ramón");
console.log(coincide);
