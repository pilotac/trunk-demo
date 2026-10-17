const test = require('node:test');
const assert = require('node:assert');
const { shout } = require('../src/shout');
test('shout', () => { assert.strictEqual(shout('hi'), 'HI!'); });
test('bug_19_shout_undefined', () => { assert.strictEqual(shout(undefined), '!'); });
