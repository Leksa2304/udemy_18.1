"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
  }
  personalMovieDB.count = numberOfFilms;
}

start();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const nameLastFilm = prompt("Один из последних просмотренных фильмов", "").trim();
    const ratingLastFilm = +prompt("На сколько его оцените", "");

    if (
      nameLastFilm != null &&
      ratingLastFilm != null &&
      nameLastFilm != "" &&
      ratingLastFilm != "" &&
      nameLastFilm.length < 50
    ) {
      personalMovieDB.movies[nameLastFilm] = ratingLastFilm; //лучше записывать новые св-ва в объект через [], а не через точку, чтобы не было багов
    } else {
      i--;
    }
  }
}

rememberMyFilms();

// с помощью цикла while
// let i = 0;

// while (i < 2) {
//   const nameLastFilm = prompt("Один из последних просмотренных фильмов", "");
//   const ratingLastFilm = +prompt("На сколько его оцените", "");
//   if (nameLastFilm != null && ratingLastFilm != null && nameLastFilm != "" && ratingLastFilm != "" && nameLastFilm.length < 50 ) {
//     personalMovieDB.movies[nameLastFilm] =  ratingLastFilm;
//     i++;
//   }
// }

// с помощью цикла while
// let i = 0;
// do {
//     const nameLastFilm = prompt("Один из последних просмотренных фильмов", "");
//     const ratingLastFilm = +prompt("На сколько его оцените", "");

//     if (nameLastFilm != null && ratingLastFilm != null && nameLastFilm != "" && ratingLastFilm != "" && nameLastFilm.length < 50) {
//         personalMovieDB.movies[nameLastFilm] = ratingLastFilm;
//         i++;
//     }
// } while (i < 2);

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы - киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();

console.log(personalMovieDB);


