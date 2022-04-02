# Map-seed-for-games
Generate fixed-length number seed from any length string <BR>
A system for encoding an any length message into a fixed length message. <BR>
The message length is set by the variable seed_length, default 24. <BR>


### Installation
```sh
npm i map-seed-generator
```
### Usage

```sh
const { getSeed } = require('map-seed-generator');

const seed = getSeed('Hello world');
console.log(seed); // returns 101936881026769457016000

// by default getSeed() returns 24 digit, but we can override it by second argument

const shortSeed = getSeed('Hello world', 16);
console.log(shortSeed); // returns 1019368810267694

const longSeed = getSeed('Hello world', 32);
console.log(longSeed); // returns 10193688102676941385171123803620
```
 