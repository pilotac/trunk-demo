function greet(name, opts = {}) {
  const msg = `Hello, ${name}!`;
  return opts.upper ? msg.toUpperCase() : msg;
}
module.exports = { greet };
if (require.main === module) console.log(greet('world'));
