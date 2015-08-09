var response = require('../responseBuilder.js');
var choreRepository = require('../repositories/choreRepository.js');

exports.execute = function(intent, session, callback) {
    var sessionAttributes = {};
    var repromptText = null;
    var shouldEndSession = true;
    var cardTitle = "No Card";
    // I could work with the result html/json here.  I could also just return it
    console.log("allChores:execute: (" + intent + ", " + session + ", " + callback + ")");
    console.log("choreRepository", choreRepository);
    var chores = choreRepository.getAll();

    console.log("chores", chores);
    var choreArray = [];
     for(var i=0;i<chores.length;i++){
        choreArray.push(chores[i].name);
    }

    if(choreArray.length === 0)
    {
        speechOutput = "You have no chores.";
    }

    speechOutput = getChoreResponse(choreArray);
    callback(sessionAttributes,
        response.buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

exports.inject = function(resp, choreRepo)
{
    response = resp;
    choreRepo = choreRepo;
}

function getChoreResponse(choreArray)
{
    if(choreArray.length === 1)
    {
        return "Your only chore is " + choreArray[0] + ".";
    }

    if(choreArray.length > 1)
    {
        var allButLast = choreArray.splice(0, choreArray.length - 1);
        var last = choreArray[choreArray.length - 1];

        return "Your chores are " + allButLast.join(", ") + ", and " + last + ".";
    }

    return "You have no chores.";
}