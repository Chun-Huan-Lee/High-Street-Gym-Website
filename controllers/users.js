import bcrypt from "bcryptjs";
import express from "express";

const usersController = express.Router();

usersController.get("/user_login", (request, response) => {
    response.render("user_login.ejs");
});

usersController.get("/user_signin", (request, response) => {
    response.render("user_signin.ejs");
});
usersController.post("/user_login", (request, response) => {
    response.render("user_login.ejs");
});

usersController.post("/user_signin", (request, response) => {
    response.render("user_signin.ejs");
});








export default usersController;
