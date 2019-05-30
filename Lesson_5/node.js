
var print = require("./addon.js");

var print2 = require("./addon.js");

var user = function(print, print2){
    this.print = print;
    this.print2 = print2;
};

module.exports = user;