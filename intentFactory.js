require('fs').readdirSync(__dirname + '/intents/').forEach(function(file) {
  if (file.match(/\.js$/) !== null) {
    var name = file.replace('.js', '');
    exports[name] = require('./intents/' + file);
  }
});