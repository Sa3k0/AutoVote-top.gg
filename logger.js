const colors = require('colors/safe');

var trying = function(msg) {
    console.log(colors.brightYellow('[   Essaie   ]'), colors.yellow(msg));
}

var success = function(msg) {
    console.log(colors.green('[ Reussi ]'), colors.brightGreen(msg));
}

var info = function(msg) {
    console.log(colors.brightBlue('[   INFO  ]'), colors.cyan(msg));
}

var err = function(msg) {
    console.log(colors.red('[  Erreur  ]'), colors.brightRed(msg));
}

module.exports.try = trying;
module.exports.succ = success;
module.exports.info = info;
module.exports.err = err;