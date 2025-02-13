"use strict";
const numberOfFilms = +prompt(`How many movies you already watched?`, "");

const a = prompt(`One of the last films you watched?`, ""),
  b = prompt(`How do you rate this film?`, ""),
  c = prompt(`One of the last films you watched?`, ""),
  d = prompt(`How do you rate this film?`, "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
