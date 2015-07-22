var assert = require("assert");
var intentFactory = require("../intentFactory.js");

describe('intentFactory', function() {
  describe('exports allChores', function () {
		it('should define allchores', function () {
			assert(typeof(intentFactory["allChores"]) === "object", "Expecting object type for intent.");
			assert(typeof(intentFactory.allChores) === "object", "Expecting object type for intent.");
			assert(typeof(intentFactory["allChores"].execute) === "function", "Expecting execute function to be present on intent.");
		});
	});
  describe('exports remainingChores', function () {
    it('should define remainingChores', function () {
      assert(typeof(intentFactory["remainingChores"]) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory.remainingChores) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory["remainingChores"].execute) === "function", "Expecting execute function to be present on intent.");
    });
  });
  describe('exports iHaveCompletedChore', function () {
    it('should define iHaveCompletedChore', function () {
      assert(typeof(intentFactory["iHaveCompletedChore"]) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory.iHaveCompletedChore) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory["iHaveCompletedChore"].execute) === "function", "Expecting execute function to be present on intent.");
    });
  });
  describe('exports haveICompletedChore', function () {
    it('should define haveICompletedChore', function () {
      assert(typeof(intentFactory["haveICompletedChore"]) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory.haveICompletedChore) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory["haveICompletedChore"].execute) === "function", "Expecting execute function to be present on intent.");
    });
  });
  describe('exports whatChoresHaveICompleted', function () {
    it('should define whatChoresHaveICompleted', function () {
      assert(typeof(intentFactory["whatChoresHaveICompleted"]) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory.whatChoresHaveICompleted) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory["whatChoresHaveICompleted"].execute) === "function", "Expecting execute function to be present on intent.");
    });
  });
  describe('exports howManyPoints', function () {
    it('should define howManyPoints', function () {
      assert(typeof(intentFactory["howManyPoints"]) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory.howManyPoints) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory["howManyPoints"].execute) === "function", "Expecting execute function to be present on intent.");
    });
  });
  describe('exports howManyPointsIsChore', function () {
    it('should define howManyPointsIsChore', function () {
      assert(typeof(intentFactory["howManyPointsIsChore"]) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory.howManyPointsIsChore) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory["howManyPointsIsChore"].execute) === "function", "Expecting execute function to be present on intent.");
    });
  });
  describe('exports listRewards', function () {
    it('should define listRewards', function () {
      assert(typeof(intentFactory["listRewards"]) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory.listRewards) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory["listRewards"].execute) === "function", "Expecting execute function to be present on intent.");
    });
  });
});