const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/index');
test('greet upper', () => { assert.strictEqual(greet('world', { upper: true }), 'HELLO, WORLD!'); });
