const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const nameLastFilm1 = prompt("Один из последних просмотренных фильмов", "");
const ratingLastFilm1 = +prompt("На сколько его оцените", "");

const nameLastFilm2 = prompt("Один из последних просмотренных фильмов", "");
const ratingLastFilm2 = +prompt("На сколько его оцените", "");


personalMovieDB.movies[nameLastFilm1] =  ratingLastFilm1; //лучше записывать новые св-ва в объект через [], а не через точку, чтобы не было багов
personalMovieDB.movies[nameLastFilm2] = ratingLastFilm2;


console.log(personalMovieDB);
