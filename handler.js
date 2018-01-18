'use strict';
var zxcvbn = require("zxcvbn")

module.exports.endpoint = (event, context, callback) => {
    let response
    let password = JSON.parse(event.body)["password"]

    if (password) {
        let resultCheck = zxcvbn(password).score
        response = {
            statusCode: 200,
            body: JSON.stringify({
                score: resultCheck,
            }),
        }   
    } else {
        response = { statusCode: 404 } // Debatable but IMO this suit   
    }

    callback(null, response)
}