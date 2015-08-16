var assert = require("assert");
var choreRepository;

var chore1 = {
        name: "breakfast",
        description: "Eat breakfast",
        points: 1
    };

// These are only intended to be used to initially test the data repository.  They cannot be continually run.
describe('The chore repository...', function() {  
  before(function() {
    delete require.cache[require.resolve('../../repositories/choreRepository.js')];
    choreRepository = require('../../repositories/choreRepository.js');
  });
  describe('when calling add... ', function () {
		it('should add the chore.', function (done) {
      var callback = function(err, data) {
        if(err)
        {
          done("error: " + err);
        }
        else
        {
          done();
        }
      }
      choreRepository.add(chore1, callback);
		});
	});
  describe('when calling getAll... ', function () {
    it('should return all my chores.', function (done) {
      var callback = function(err, data) {
        if(err)
        {
          done("error: " + err);
        }
        else
        {
          if(data.length > 0)
          {
            done();
          }
          else
          {
            done("No documents found.");
          }
        }
      };
      choreRepository.getAll(callback);
    });
  });
});