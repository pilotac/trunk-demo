function initials(name) {
  return String(name).split(/\s+/).filter(Boolean).map((p) => p[0].toUpperCase()).join('');
}
module.exports = { initials };
