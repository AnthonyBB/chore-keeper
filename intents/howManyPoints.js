var response = require('../responseBuilder.js');

exports.execute = function(intent, session, callback) {
    var sessionAttributes = {};
    var repromptText = "";
    var shouldEndSession = true;

    speechOutput = "The How Many Points Tasks intent has been executed.";

    callback(sessionAttributes,
             response.buildSpeechletResponse(intent.name, speechOutput, repromptText, shouldEndSession));
}