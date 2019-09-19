const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require("path");
const fetch = require("node-fetch");


const config = require("./config/keys");
const app = express();
const PORT = 3000;
//  Setup App Middleware, DBs, etc.
mongoose.connect(config.MONGO_DB)


app.use("/build", express.static(path.resolve(__dirname, "./build")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
});
// Get initial data call to Yelp API
const url = "https://api.yelp.com/v3/businesses/search?location=venice"

// Get Data for App
const getData = async () => {
    // const location = url;
    const settings = {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + config.API_KEY
        }
    }
    try {
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        console.log(data.businesses[0].image_url)
        return data;
    } catch(e) {
        return e;
    }
}

getData(url);






app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server is listening on port ${PORT}`)
})
