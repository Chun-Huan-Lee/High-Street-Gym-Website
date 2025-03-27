import express from "express";


const activityController = express.Router();


activityController.get("/index", (request, response) => {
    response.render("index.ejs");
});
activityController.get("/search_activity", (request, response) => {
    response.render("search_activity.ejs");
});

export default activityController;
