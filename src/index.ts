module.exports.getSeed = (string, len=24) => {
  const MAX_SEED_LENGTH = 16; // Don't change it anyway!!!
  const charsArray = makeCharsArray(string);
  const seedLength = len <= MAX_SEED_LENGTH ? len : MAX_SEED_LENGTH;
  const remaining = len > MAX_SEED_LENGTH ? len - MAX_SEED_LENGTH : 0;

  if (remaining === 0) {
    const primarySeed = makePrimarySeed(charsArray, multiplier(0));
    const seed = normalizeSeed(primarySeed, seedLength);
    return String(seed);
  } else {
    const remainingAmount = Math.floor(remaining / seedLength);

    if (remainingAmount > 1) {
      const firstPrimarySeed = makePrimarySeed(charsArray);
      const firstSeed = normalizeSeed(firstPrimarySeed, seedLength);
      let seed = String(firstSeed);

      for (let i = 0; i <= remainingAmount - 1; i++) {
        const multiplier = multiplier(i);
        let _seedLength = (remaining - (i + 1) * MAX_SEED_LENGTH) >= MAX_SEED_LENGTH ? MAX_SEED_LENGTH : (remaining - (i + 1) * MAX_SEED_LENGTH);
        _seedLength = _seedLength === 0 ? MAX_SEED_LENGTH : _seedLength;
        seed += String(normalizeSeed(makePrimarySeed(charsArray, multiplier), _seedLength));
      }
      return seed;
    } else {
      const firstPrimarySeed = makePrimarySeed(charsArray, multiplier(0));
      const firstSeed = normalizeSeed(firstPrimarySeed, seedLength);
      const secondPrimarySeed = makePrimarySeed(charsArray, multiplier(1));
      const secondSeed = normalizeSeed(secondPrimarySeed, remaining);
      return `${firstSeed}${secondSeed}`;
    }
  }
};

const standartChars = new Map([
  ['a', 14],
	['b', 18],
	['c', 13],
	['d', 11],
	['e', 17],
	['f', 30],
	['g', 20],
	['h', 11],
	['i', 10],
	['j', 10],
	['k', 10],
	['l', 10],
	['m', 10],
	['n', 14],
	['o', 18],
	['p', 13],
	['q', 11],
	['r', 17],
	['s', 30],
	['t', 20],
	['u', 11],
	['v', 10],
	['w', 10],
	['x', 10],
	['y', 10],
	['z', 10],
	['а', 10],
	['б', 14],
	['в', 18],
	['г', 13],
	['д', 11],
	['е', 17],
	['ё', 30],
	['ж', 20],
	['з', 11],
	['и', 10],
	['й', 10],
	['к', 10],
	['л', 10],
	['м', 10],
	['н', 10],
	['о', 14],
	['п', 18],
	['р', 13],
	['с', 11],
	['т', 17],
	['у', 30],
	['ф', 20],
	['х', 11],
	['с', 10],
	['ч', 10],
	['ш', 10],
	['щ', 10],
	['ъ', 10],
	['ы', 10],
	['ь', 10],
	['э', 10],
	['ю', 14],
	['я', 18],
	['0', 13],
	['1', 11],
	['2', 17],
	['3', 30],
	['4', 20],
	['5', 11],
	['6', 10],
	['7', 10],
	['8', 10],
	['9', 10],
	['"', 10],
	['№', 10],
	[';', 10],
	['%', 10],
	[':', 10],
	['?', 10],
	['*', 14],
	['(', 18],
	[')', 13],
	['_', 11],
	['+', 17],
	['=', 30],
	['-', 20],
	['&', 11],
	['^', 10],
	['$', 10],
	['#', 10],
	['@', 10],
	[']', 10],
	['[', 10],
	['}', 10],
	['{', 10],
	['|', 10],
	['/', 10],
	['\\', 10],
	["\'", 10],
	['.', 10],
	[',', 10],
	['>', 10],
	['<', 10],
	['`', 10],
	['~', 10],
]);

const normalizeSeed = (seed, seedLength) => {
  let c = Math.floor(seed);

  for (let i = 0; i <= 1000000; i++) {
    if (String(c).length > seedLength) {
			c = c / 11.352;
			c = Math.floor(c);
    } else if (String(c).length < seedLength) {
      c = c * 11.352;
			c = Math.floor(c);
    } else {
      c = Math.floor(c);
      break;
    }
  }
  return c;
};

const makeCharsArray = (string) => {
  let charsArray = [];

	for (let i of string) {
		const b = standartChars.get(i);
    const value = b === undefined ? 69 : b;
		charsArray.push(value);
  }

  return charsArray;
};

const makePrimarySeed = (charsArray, k1=1.42069143) => {
  let c;
  if (charsArray.length > 4) {
    c = (charsArray[0] + 2 * charsArray[1]) / (11 * (charsArray[2] + charsArray[3]));
    for (let i of charsArray) {
      c = c * k1 * i;
    }
  } else {
    c = (228 * charsArray[0] - 420) * 0.142
    for (let i of charsArray) {
      c = c * k1 * i;
    }
  }
  return c;
};

const multiplier = (i) => {
  return 1.1 + 0.032 * (i + 1);
};
