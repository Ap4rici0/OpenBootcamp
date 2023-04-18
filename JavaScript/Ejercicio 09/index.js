let fecha = new Date();
console.log(fecha);

let fechaNacimiento = new Date(1989, 7, 4, 02, 30);
console.log(fechaNacimiento);

let fechaModerna = fecha > fechaNacimiento;
console.log(fechaModerna);

let mes = fechaNacimiento.getMonth() + 1;
console.log(mes);

let año = fechaNacimiento.getFullYear();
console.log(año);


