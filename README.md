Sixty-Sixty
===

Ultra-simple formatting of absolute time given a decimal seconds floating-point input.

# Format
`hh:mm.SSS`
- `hh` - hours (sexagesimal)
- `mm` - minutes
- `SSS` - milliseconds

# Usage
```
var SixtySixty = require('sixty-sixty');
console.log(SixtySixty(0)); // --> '00:00.000'
console.log(SixtySixty(60)); // --> '01:00.000'
console.log(SixtySixty(666.6666)); // --> '11:06.667'
console.log(SixtySixty(6025.5432)); // --> '100:25.543'
```
