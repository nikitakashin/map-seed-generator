const { getSeed } = require('./index');

const testString = "Commondev.ru the best it community";

test('Checking type of seed', () => {
  expect((typeof getSeed(testString) === 'string')).toBeTruthy();
});

test('Checking default length of code', () => {
  expect(getSeed(testString).length === 24).toBeTruthy();
});

test('Checking biger length of code', () => {
  const testLength = 32;
  expect(getSeed(testString, testLength).length === testLength).toBeTruthy();
});

test('Checking smaller length of code', () => {
  const testLength = 8;
  expect(getSeed(testString, testLength).length === testLength).toBeTruthy();
});