"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt(`How many movies you already watched?`, "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      alert("You must enter the number, you cannot cancel the question =)");
      personalMovieDB.count = prompt(
        `How many movies you already watched?`,
        ""
      );
    }
    console.log("it's all good");
  },
  addFilmToList: function () {
    if (personalMovieDB.count >= 2) {
      personalMovieDB.filmCountCheck(2);
    } else if (personalMovieDB.count < 2 && personalMovieDB.count > 0) {
      personalMovieDB.filmCountCheck(personalMovieDB.count);
    }
  },
  filmCountCheck: function (count) {
    for (let i = 0; i < count; i++) {
      if (count === 0) {
        break;
      }
      const movie = prompt(`One of the last films you watched?`, ""),
        rate = prompt(`How do you rate this film?`, "");
      if (
        movie != null &&
        rate != null &&
        movie != "" &&
        rate != "" &&
        movie.length < 50
      ) {
        personalMovieDB.movies[movie] = rate;
        console.log("done");
      } else {
        alert(
          "Your answer cannot be null or an empty string and must be shorter than 50 characters"
        );
        i--;
      }
    }
  },
  classifyMovieFan: function () {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
      alert("Watched a fairly small number of movies");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 20) {
      alert("You're a classic viewer");
    } else if (personalMovieDB.count > 20) {
      alert("You're a movie geek");
    } else if (personalMovieDB.count == 0) {
      alert(
        "You haven't watched any movies,  you can't use the movie library, come back after you've watched some movies"
      );
    }
  },
  enterFavoriteGenres: function () {
    for (let i = 0; i < 3; i++) {
      const genre = prompt(`What is your number ${i + 1} favorite genre?`);
      personalMovieDB.genres[i] = genre;
    }
  },
  toggleVisibleMyDB() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
};
