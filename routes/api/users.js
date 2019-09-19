const express = require('express');
const router = express.router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");


const { errors, isValid } = validateRegisterInput(req.body);

if(!isValid){
    return res.status(400).json(errors);
}
User.findOne({username: req.body.username})
    .then(user => {
        if(user){
            return res.status(400).json({username: "Username already exists."});
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });

            // Hash password before saving
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))
                }); //end hash func
            }); //end genSalt func
        }; //end else block
    }); // end then promise user



    // VALIDATE LOGIN REQs
    const { errors, isValid } = validateLoginInput(req.body);

    // check vald'n
    if(!isValid){
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    // find user by UN.
    User.findOne(({ username }).then(user => {
        // check if user exists
        if(!user) {
            return res.status(400).json({usernamenotfound: "Username not found"})
        }
        // check PW
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
                // user is matched
                // create jwt payload
                const payload = {
                    id: user.id,
                    username: user.username
                };
                // Sign the Token
                jwt.sign(
                    payload,
                    keys.SECRET,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res.status(400).json({passwordincorrect: "Incorrect password"});
            }
        });
    }));

    module.exports = router;
