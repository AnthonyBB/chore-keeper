var assert = require("assert");
var responseBuilder = require('../../responseBuilder.js');
var choreRepository = require('../../repositories/choreRepository.js');
var intent = require("../../intents/allChores.js");

var getAllSingleChore = function() {
  return [
      {
          name: "breakfast",
          description: "Eat breakfast",
          points: 1
      }];
};

var getAllMultipleChores = function() {
  return [
      {
          name: "breakfast",
          description: "Eat breakfast",
          points: 1
      },
      {
          name: "cleanup",
          description: "cleanup Toys",
          points: 1
      },
      {
          name: "brush teeth",
          description: "Brush Teeth",
          points: 1
      }];
};

var getAllNoChores = function() {
  return [ ];
};

describe('The all chores intent.. ', function() {
  describe('when calling execute with no chores... ', function () {
		it('should return no chores.', function (done) {
      choreRepository.getAll = getAllNoChores;
      intent.inject(responseBuilder, choreRepository);
      var callback = function(sessionAttributes, response) {
        console.log(response);
        if(response.outputSpeech.text === "You have no chores.")
        {
          if(response.reprompt.outputSpeech.text)
          {
            done("No output speech should be returned.  Received '" + response.reprompt.outputSpeech.text + "'");
          }
          else if(!response.shouldEndSession)
          {
            done("session should end.");
          }
          else {
            done();
          }
        }
        else
        {
          done("Expected 'You have no chores.' but received '" + response.outputSpeech.text + "'");
        }
      }

      intent.execute(null, null, callback);
		});
	});
  describe('when calling execute with 1 chore... ', function () {
    it('should return a single chore.', function (done) {
      choreRepository.getAll = getAllSingleChore;
      intent.inject(responseBuilder, choreRepository);
      var callback = function(sessionAttributes, response) {
        console.log(response);
        if(response.outputSpeech.text === "Your only chore is breakfast.")
        {
          if(response.reprompt.outputSpeech.text)
          {
            done("No output speech should be returned.  Received '" + response.reprompt.outputSpeech.text + "'");
          }
          else if(!response.shouldEndSession)
          {
            done("session should end.");
          }
          else {
            done();
          }
        }
        else
        {
          done("Expected 'Your only chore is breakfast.' but received '" + response.outputSpeech.text + "'");
        }
      }

      intent.execute(null, null, callback);
    });
  });
  describe('when calling execute with many chores... ', function () {
    it('should return many chores.', function (done) {      
      choreRepository.getAll = getAllMultipleChores;
      intent.inject(responseBuilder, choreRepository);
      var expected = "Your chores are breakfast, cleanup, and brush teeth.";
      var callback = function(sessionAttributes, response) {
        console.log(response);
        if(response.outputSpeech.text === expected)
        {
          if(response.reprompt.outputSpeech.text)
          {
            done("No output speech should be returned.  Received '" + response.reprompt.outputSpeech.text + "'");
          }
          else if(!response.shouldEndSession)
          {
            done("session should end.");
          }
          else {
            done();
          }
        }
        else
        {
          done("Expected '" + expected + "' but received '" + response.outputSpeech.text + "'");
        }
      }

      intent.execute(null, null, callback);
    });
  });
});