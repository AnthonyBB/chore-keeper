exports.getAll = function() {
    return choreRepository.getAll();
}

var choreRepository = (function () {
    "use strict";
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

    that.getAll = function () {
        return chores;
    };

    return that;
})();