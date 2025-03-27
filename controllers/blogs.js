import express from "express";
import validator from "validator";


const blogController = express.Router();


blogController.get("/blogs", (request, response) => {
    response.render("blogs.ejs");
});

export default blogController;