const test = require('node:test');
const assert = require('node:assert');
const { initials } = require('../src/initials');
test('initials', () => { assert.strictEqual(initials('ada lovelace'), 'AL'); });
