let uno = 1;

let datos = {
    nombre: "Ramón",
    apellido: "Fernandez",
    edad: 33,
    altura: 175,
    desarrollador: true
    }

let edadRamon = "edad";
console.log(datos[edadRamon]);

let ramonAmigos = [
    {
        nombre: "Ramón",
        apellido: "Fernandez",
        edad: 33,
        altura: 175,
        desarrollador: true
    },
    {
        nombre: "Anton",
        apellido: "Garcia",
        edad: 34,
        altura: 175,
        desarrollador: true,
    },
    {
        nombre: "Marcos",
        apellido: "Perez",
        edad: 30,
        altura: 176,
        desarrollador: false,
}]

ramonAmigos.sort((a,b) => a.edad - b.edad);
console.log(ramonAmigos)


