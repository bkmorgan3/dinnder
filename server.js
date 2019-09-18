const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const axios = require("axios");
const config = require("./config/keys");


const PORT = 3000;
//  Setup App Middleware, DBs, etc.


// Get initial data call to Yelp API
const url = "https://api.yelp.com/v3/businesses/search?location=losangeles"

// const getData = async url => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log("s",json);
//   } catch (error) {
//     console.log("e",error);
//   }
// };

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
        console.log(data)
        return data;
    } catch(e) {
        return e;
    }
}

getData(url);



app.get("/", (req, res) => {
    res.send("hello")
});



app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server is listening on port ${PORT}`)
})
