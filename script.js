"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");

    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
    }
    },

  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const nameLastFilm = prompt("Один из последних просмотренных фильмов", "" ).trim();
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
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы - киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },

  showMyDB: function() {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function() {
    // for (let i = 1; i <= 3; i++) {
    //   let genre =  prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
    //   personalMovieDB.genres[i - 1] = genre;
    //   if (
    //   genre == null || genre == ""
    //   ) {
    //     i--;
    //   }
      
    // }
    // personalMovieDB.genres.forEach((el, index) => {
    //   console.log(`Любимый жанр ${index + 1} - это ${el}`);
    // });
    for (let i = 1; i < 2; i++) {
        let genres =  prompt(`Введите три ваши любимые жанра через запятую`);
        if ( genres === "" || genres == null) {
              i--;
            } else {
            genres = genres.toLowerCase();
            personalMovieDB.genres = genres.split(",");
            personalMovieDB.genres.sort();
}
    }
personalMovieDB.genres.forEach((el, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${el}`);
    });
  }
}

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


console.log(personalMovieDB);
