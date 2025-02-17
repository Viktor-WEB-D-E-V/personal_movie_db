#  Personal Movie Database

A simple **console-based movie tracking app** that allows users to log the movies they've watched, rate them, and track their favorite genres.

##  Features

 **Movie Count Input** – Asks the user how many movies they've watched.\
 **Add Movies** – Stores the last movies watched and their ratings.\
 **User Classification** – Categorizes users based on the number of movies watched.\
 **Favorite Genres** – Lets users input their top 3 favorite genres.\
 **Privacy Toggle** – Allows users to make their movie list private or public.\
 **Show Database** – Displays the user's movie database if it's not private.

##  How It Works

1. **Start the App:** The app asks how many movies you've watched.
2. **Log Movies:** It prompts you to enter up to 2 of your recently watched movies and their ratings.
3. **User Level Classification:** The app tells you if you’re a casual viewer, classic viewer, or movie geek.
4. **Favorite Genres:** You input your top 3 favorite movie genres.
5. **Toggle Privacy:** You can switch your movie list between private and public.
6. **View Database:** If your database is public, you can view it in the console.

##  Usage

Run the script in a **JavaScript console** (e.g., browser DevTools or Node.js).

```javascript
personalMovieDB.start(); // Start movie tracking  
personalMovieDB.addFilmToList(); // Add movies to the list  
personalMovieDB.classifyMovieFan(); // Get user movie classification  
personalMovieDB.enterFavoriteGenres(); // Enter favorite genres  
personalMovieDB.toggleVisibleMyDB(); // Toggle privacy mode  
personalMovieDB.showMyDB(personalMovieDB.privat); // Show database (if public)  
```

##  Future Improvements

- Add **local storage** to save user data.
- Implement a **GUI (Graphical User Interface)** for better interaction.

---

Enjoy tracking your movies! 

