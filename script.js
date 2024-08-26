"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};


for (let i = 0; i < 2; i++) {
    const nameLastFilm = prompt("Один из последних просмотренных фильмов", "");
    const ratingLastFilm = +prompt("На сколько его оцените", "");

    if (nameLastFilm != null && ratingLastFilm != null && nameLastFilm != "" && ratingLastFilm != "" && nameLastFilm.length < 50 ) {
        personalMovieDB.movies[nameLastFilm] =  ratingLastFilm; //лучше записывать новые св-ва в объект через [], а не через точку, чтобы не было багов
    } else {
        i--;
    }
    }

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы - киноман");
}  else {
   console.log("Произошла ошибка");
}

    
    

console.log(personalMovieDB);
