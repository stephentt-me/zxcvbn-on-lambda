'use strict';
var zxcvbn = require("zxcvbn")

module.exports.endpoint = (event, context, callback) => {
    let response
    let request = JSON.parse(event.body) // TODO: Handle wrong format
    let password = request["password"]

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