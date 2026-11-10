
// Array containing 3 favorite movies
let favoriteMovies = [
    "The Lion King",
    "Avengers: Endgame",
    "Finding Nemo"
];

// Function to add a movie
function addMovie() {
    let movie = document.getElementById("movieInput").value;

    if (movie.trim() !== "") {
        favoriteMovies.push(movie);

        // Get the movie list
        let list = document.getElementById("movieList");

        // Clear the old list
        list.innerHTML = "";

        // Use a for loop to display all movies
        for (let i = 0; i < favoriteMovies.length; i++) {
            let item = document.createElement("li");
            item.textContent = favoriteMovies[i];
            list.appendChild(item);
        }

        // Clear the textbox
        document.getElementById("movieInput").value = "";
    }
}
