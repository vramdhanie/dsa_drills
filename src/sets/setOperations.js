function union(s1, s2) {
  const result = new Set(s1);
  for (let e of s2) {
    result.add(e);
  }
  return result;
}

function intersect(s1, s2) {
  const result = new Set();
  const [a, b] = s1.size > s2.size ? [s2, s1] : [s1, s2];
  for (let e of a) {
    if (b.has(e)) {
      result.add(e);
    }
  }
  return result;
}
function difference(s1, s2) {
  const result = new Set(s1);
  for (let e of s2) {
    result.delete(e);
  }
  return result;
}

module.exports = { union, intersect, difference };
