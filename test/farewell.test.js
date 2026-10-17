const test = require('node:test');
const assert = require('node:assert');
const { farewell } = require('../src/index');
test('farewell', () => { assert.strictEqual(farewell('world'), 'Goodbye, world!'); });
test('farewell empty', () => { assert.strictEqual(farewell(''), 'Goodbye!'); });
