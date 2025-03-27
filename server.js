import express from "express";
import session from "express-session";


const app = express();
const port = 8080;


app.use(
    session({
        secret: "secret phrase",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);


app.set("view engine", "ejs");


app.use(
    express.urlencoded({
        extended: true,
    })
);


app.get("/", (request, response) => {
    response.status(301).redirect("/index");
});


app.use(express.static("static"));


import userController from "./controllers/activities.js";
app.use(userController);
import saleController from "./controllers/blogs.js"
app.use(saleController)
import usersController from "./controllers/users.js";
app.use(usersController);


app.listen(port, () => {
    console.log(`Express server started on http://localhost:${port}`);
});
