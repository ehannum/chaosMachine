var fs = require('fs');

// synchronous code is okay/preferred here, this only runs once on server startup

module.exports = {}

var folders = fs.readdirSync(__dirname + '/../public/sounds');

var readFolder = function (folder, name) {
  module.exports[name] = [];

  var files = fs.readdirSync(folder);
  for (var j = 0; j < files.length; j++) {
    if (fs.statSync(folder + '/' + files[j]).isFile()) {
      module.exports[name].push(files[j]);
    }
  }
};

for (var i = 0; i < folders.length; i++) {
  if (fs.statSync(__dirname + '/../public/sounds/' + folders[i]).isDirectory()) {
    readFolder(__dirname + '/../public/sounds/' + folders[i], folders[i]);
  }
}
