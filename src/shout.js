function shout(text) {
  if (text === undefined || text === null) return '!';
  return `${String(text).toUpperCase()}!`;
}
module.exports = { shout };
