module.exports = function (options) {
  const showHours = options && !!options.showHours;

  const leftpad = (what, length = 2) => what.toString().padStart(length, '0');

  return function (seconds) {
    console.assert(typeof seconds === 'number', `'seconds' must be of type number`);
    console.assert(seconds >= 0, `'seconds' must be greater or equal 0`);
    let secs = Math.floor(seconds) % 60;
    let millis = Math.round(seconds * 1000) % 1000;
    let mins = Math.floor(seconds / 60);
    let hours;
    let str = '';
    if (showHours) {
      hours = Math.floor(mins / 60);
      mins = mins % 60;
      str = `${leftpad(hours)}:`;
    }
    return `${str}${leftpad(mins)}:${leftpad(secs)}.${leftpad(millis, 3)}`;
  }
};
