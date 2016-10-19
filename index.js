var leftpad = require('leftpad');

module.exports = function(seconds) {
  var secs = Math.floor(seconds) % 60;
  var mins = Math.floor(seconds / 60);
  var millis = Math.round(seconds * 1000) % 1000;
  return leftpad(mins, 2, 0) + ':' + leftpad(secs, 2, 0) + '.' + leftpad(millis, 3, 0);
}
