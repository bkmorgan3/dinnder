const mongoose = require('mongoose')

const User = require("../models/User")

const userController = {};

userController.createUser = (req, res, next) => {
    console.log(JSON.stringify(req.body));
    console.log('creating user');

    const { username } = req.body
    const { password } = req.body

    User.create({
        username,
        password
    }, (err, user) => {
        if(err) return next(err);
        res.locals.name = username
        console.log('user was created')
        return next();
    });
};


module.exports = userController;
