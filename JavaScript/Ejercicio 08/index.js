let datos = {
    nombre: "Ramón",
    apellido: "Fernandez",
    edad: 33,
    altura: 175,
    desarrollador: true
    }

let edadRamon = datos.edad;
console.log(edadRamon);

let ramonAmigos = [
    {...datos
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

let listaOrdenada = ramonAmigos.sort((a,b) => a.edad - b.edad);
console.log(listaOrdenada);
