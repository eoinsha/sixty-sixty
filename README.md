Sixty-Sixty
===

Ultra-simple formatting of absolute time given a decimal seconds floating-point input.

# Format
`[hh:]mm:ss.SSS`
- `hh` - hours (if `{ showHours: true }` in optioins)
- `mm` - minutes
- `ss` - seconds
- `SSS` - milliseconds

# Usage
```
var SixtySixty = require('sixty-sixty')();
console.log(SixtySixty(0)); // --> '00:00.000'
console.log(SixtySixty(60)); // --> '01:00.000'
console.log(SixtySixty(666.6666)); // --> '11:06.667'
console.log(SixtySixty(6025.5432)); // --> '100:25.543'
```
```
var SixtySixty = require('sixty-sixty')({ showHours: true });
console.log(SixtySixty(0)); // --> '00:00:00.000'
console.log(SixtySixty(60)); // --> '00:01:00.000'
console.log(SixtySixty(666.6666)); // --> '00:11:06.667'
console.log(SixtySixty(6025.5432)); // --> '01:40:25.543'
```
