const config = require("../config/keys");
const fetch = require("node-fetch");
const apiController = {};


apiController.getBusinessInfo = async function(req, res, next){
    const url = "https://api.yelp.com/v3/businesses/search?location=venice";
    const images = [];
    console.log("inside Middleware")
    // Get Data for App
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
            data.businesses.forEach(biz => {
                console.log("biz", biz.image_url)
                 images.push(biz.image_url)
            })
            console.log("arra",images)
            res.locals.images = images;

        } catch(e) {
            console.log("err", e)
            return e;
        }

    return next();

}


module.exports = apiController;
