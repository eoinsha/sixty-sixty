var leftpad = require('leftpad');

module.exports = function(options) {
  var showHours = options && !!options.showHours;

  return function(seconds) {
    var secs = Math.floor(seconds) % 60;
    var millis = Math.round(seconds * 1000) % 1000;
    var mins = Math.floor(seconds / 60);
    var hours;
    var str = '';
    if (showHours) {
      hours = Math.floor(mins / 60);
      mins = mins % 60;
      str += leftpad(hours, 2, 0) + ':';
    }
    return str + leftpad(mins, 2, 0) + ':' + leftpad(secs, 2, 0) + '.' + leftpad(millis, 3, 0);
  }
};
