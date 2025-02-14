"use strict";
const numberOfFilms = +prompt(`How many movies you already watched?`, "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
  alert("Watched a fairly small number of movies");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 20) {
  alert("You're a classic viewer");
} else if (personalMovieDB.count > 20) {
  alert("You're a movie geek");
} else if (personalMovieDB.count === 0) {
  alert(
    "You haven't watched any movies,  you can't use the movie library, come back after you've watched some movies"
  );
} else {
  alert("Error");
  for (let i = 0; i < 1; i++) {
    personalMovieDB.count = +prompt(`How many movies you already watched?`, "");
    if (personalMovieDB.count != NaN && personalMovieDB.count > 0) {
      console.log("it's all good");
    } else {
      alert("You must enter the number, you cannot cancel the question =)");
      i--;
    }
  }
}

for (let i = 0; i < 2; i++) {
  if (personalMovieDB.count === 0) {
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

console.log(personalMovieDB);
