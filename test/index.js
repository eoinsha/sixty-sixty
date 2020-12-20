var test = require('tap').test;
var SixtySixty = require('..');

test('formatting without hour component', function (t) {
  var ss = SixtySixty();
  console.log(ss(0), ss(-1), ss(Infinity), ss(''), ss(NaN), ss());
  t.equal(ss(0), '00:00.000');
  t.equal(ss(60), '01:00.000');
  t.equal(ss(666.6666), '11:06.667');
  t.equal(ss(6025.5432), '100:25.543');
  t.end();
});

test('formatting with hour component', function (t) {
  var ss = SixtySixty({ showHours: true });
  t.equal(ss(0), '00:00:00.000');
  t.equal(ss(60), '00:01:00.000');
  t.equal(ss(666.6666), '00:11:06.667');
  t.equal(ss(6025.5432), '01:40:25.543');
  t.end();
});
