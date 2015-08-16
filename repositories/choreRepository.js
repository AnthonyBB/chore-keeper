exports.getAll = function(next) {
    console.log("next", next);
    return choreRepository.getAll(next);
}
exports.add = function(chore, next) {
    console.log("chore", chore);
    console.log("next", next);
    return choreRepository.add(chore, next);
}
var choreRepository = (function () {
    "use strict";
    var mongodb = require("mongodb");
    var mongoUrl = "mongodb://admin:admin@ds033153.mongolab.com:33153/chore-keeper";
    var database = null;

    var that = {};
    var chores = [
    {
        name: "breakfast",
        description: "Eat breakfast",
        points: 1
    },
    {
        name: "brushTeeth",
        description: "Brush your teeth",
        points: 1
    },
    {
        name: "getDressed",
        description: "Get dressed",
        points: 1
    },
    {
        name: "playMorning",
        description: "Have some fun!",
        points: 1
    },
    {
        name: "school",
        descripion: "Go to school",
        points: 1
    },
    {
        name: "lunch",
        description: "Eat lunch",
        points: 1
    },
    {
        name: "nap",
        description: "Take a nap",
        points: 1
    },
    {
        name: "playAfternoon",
        description: "Have some fun!",
        points: 1
    },
    {
        name: "dinner",
        description: "Eat dinner",
        points: 1
    },
    {
        name: "homework",
        description: "",
        points: 1
    },
    {
        name: "shower",
        description: "",
        points: 1
    },
    {
        name: "brushTeethNight",
        description: "Brush your teeth.",
        points: 1
    },
    {
        name: "pajamas",
        description: "Put on your pajamas",
        points: 1
    },
    {
        name: "playNight",
        description: "Have some fun!",
        points: 1
    },
    {
        name: "cleanup",
        description: "Cleanup your toys.",
        points: 1
    },
    {
        name: "bedtime",
        description: "Get a good night's rest.",
        points: 1
    }];

    var getDb = function(next) {
            if(!database)
            {
                mongodb.MongoClient.connect(mongoUrl, function(err, db)
                {
                    if(err)
                    {
                        next(err, null);
                    }
                    else
                    {
                        database = db;
                        next(null, database);
                    }
                });
            }
            else
            {
                next(null, database);
            }
    };

    that.getAll = function (next) {
        getDb(function( err, db) {
            if(err)
            {
                console.log("Failed to initialize database: " + err);
                next(err, null);
            }
            else
            {
                var chores = db.collection("chores").find().toArray(function(err, results) {
                    if(err)
                    {
                        console.log("Failed to retrieve data: " + err);
                        next(err, null);
                    }
                    else
                    {
                    console.log("results", results);
                    next(null, results);
                    }
                });
            }
        });
    };

    that.add = function(chore, next) {
        getDb(function(err, db) {
            if(err)
            {
                console.log("Failed to initialize database: " + err);
                next(err, null);
            }
            else
            {
                db.collection("chores").insert(chore, function(err) {
                    if(err)
                    {
                        console.log("Failed to insert chore: " + err);
                        next(err, null);
                    }
                    next(null, null);
                });
            }
        });
    }
    return that;
})();