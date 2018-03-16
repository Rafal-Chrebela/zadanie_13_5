var os = require("os");
var colors = require("colors");

function getOStime(time) {
  var hour = Math.floor(time / 3600);
  var minute = Math.floor((time % 3600) / 60);
  var second = (time % 60).toFixed(0);
  return hour + "h " + minute + "min " + second + "s ";
}

exports.print = getOStime;
