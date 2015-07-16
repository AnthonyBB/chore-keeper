var assert = require("assert");
var intentFactory = require("../intentFactory.js");

describe('intentFactory', function() {
  describe('exports', function () {
    it('should define allchores', function () {
      assert(typeof(intentFactory["allchores"]) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory.allchores) === "object", "Expecting object type for intent.");
      assert(typeof(intentFactory["allchores"].execute) === "function", "Expecting execute function to be present on intent.");
    });
  });
});
