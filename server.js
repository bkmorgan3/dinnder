const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport")

const apiController = require('./controllers/apiController');
const config = require("./config/keys");
const userController = require("./controllers/userController");
const db = require("./config/keys").MONGO_DB;

const app = express();
const PORT = 3000;
//  Setup App Middleware, DBs, etc.

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

require("./config/passport")(passport)
app.use(passport.initialize());

app.use("/build", express.static(path.resolve(__dirname, "./build")))

app.get("/api",apiController.getBusinessInfo, (req, res) => {
    res.json(res.locals.images);
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
});

app.post("/api/signup", userController.createUser, (req, res) => {
    res.json(res.locals.name)
})

app.use("/api/users", User)


app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server is listening on port ${PORT}`)
})
