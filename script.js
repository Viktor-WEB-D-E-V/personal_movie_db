"use strict";
const numberOfFilms = +prompt(`How many movies you already watched?`, "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; (i = 2); i++) {
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

console.log(personalMovieDB);
