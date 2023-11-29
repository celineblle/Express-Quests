const express = require("express");
const app = express();
const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const usersControllers = require("./controllers/usersControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", usersControllers.getUsers);
app.get("/api/users/:id", usersControllers.getUsersById);
app.post("/api/movies", validateMovie, movieControllers.postMovie);
app.post("/api/users", validateUser, usersControllers.postUser);
app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
app.put("/api/users/:id", validateUser, usersControllers.updateUser);
app.delete("/api/movies/:id", movieControllers.deleteMovie);
app.delete("/api/users/:id", usersControllers.deleteUser);

module.exports = app;
