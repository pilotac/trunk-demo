function greet(name) {
  return `Hello, ${name}!`;
}
module.exports = { greet };
if (require.main === module) console.log(greet('world'));
function farewell(name) {
  return `Goodbye, ${name}!`;
}
module.exports.farewell = farewell;
