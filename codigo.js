const compras = ['Spaguetti', 'Carne', 'Huevos', 'Cereales', 'Leche', 'Tomates'];

compras.push('Aceite de Girasol');
console.log(compras);

compras.pop();
console.log(compras);

const peliculas = [
{titulo:'La Isla Siniestra', director:'Martin Scorsese', fecha:'18 de febrero de 2010' },
{titulo:'El Origen', director:'Christopher Nolan', fecha:'26 de julio de 2010'},
{titulo:'Sin novedad en el frente', director:'Edward Berger', fecha:'29 de septiembre de 2022'}
];

const filmsRecientes = peliculas.filter(film =>{
    let data = film.fecha.slice(-4);
    let year = parseInt(data, 10);
    if(year >= 2010){
        return film;
    }
});    

const dir = peliculas.map(film =>  film.director);

const nameFilm = peliculas.map(film => film.titulo);

const newList = dir.concat(nameFilm);
const newList2 = [...dir, ...nameFilm];

console.log(dir);
console.log(nameFilm);
console.log(newList);
console.log(newList2);