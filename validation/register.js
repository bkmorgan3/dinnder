const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    let errors = {};

    // turn empty fields to empty string to use Val funcs
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Check username
    if(Validator.isEmpty(data.username)){
        errors.username = "Username field is required";
    }

    // PW CHEX
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
