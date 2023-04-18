let compra = ["Tomate", "Garbanzos", "Pastel"];
let listaPeliculas = [
    {nombre: "Pulp fiction", director: "Tarantino", año: 1998},
    {nombre: "Pelicula inventada", director: "A saber", año: 2011},
    {nombre: "Pelicula inventada 2", director: "Ni idea", año: 2015}
];

console.log(compra);

compra.splice(0,0,"Aceite de girasol");

console.log(compra);

compra.splice(0,1);

console.log(compra);

console.log(listaPeliculas);

let nuevaLista = listaPeliculas.filter(o => o.año > 2010);
console.log(nuevaLista);

let listaDirectores = listaPeliculas.map(directores => {
    return directores.director;
});

console.log(listaDirectores);

let listaTitulos = listaPeliculas.map(titulos => {
    return titulos.nombre;
});

console.log(listaTitulos);

let titulosDirectores = listaDirectores.concat(listaTitulos);
console.log(titulosDirectores);

let directoresTitulos = [...listaDirectores, ...listaTitulos];
console.log(directoresTitulos);
