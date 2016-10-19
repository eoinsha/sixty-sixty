var test = require('tap').test;
var ss = require('..');

test('formatting', function(t) {
  t.equal(ss(0), '00:00.000');
  t.equal(ss(60), '01:00.000');
  t.equal(ss(666.6666), '11:06.667');
  t.equal(ss(6025.5432), '100:25.543');
  t.end();
});
