function isEqual(a1, a2) {
  if (a1.length != a2.length) {
    return false;
  }
  const map = new Map();
  for (e of a1) {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1);
    } else {
      map.set(e, 1);
    }
  }

  for (e of a2) {
    if (map.has(e)) {
      let count = map.get(e);
      count--;
      if (count > 0) {
        map.set(e, count);
      } else {
        map.delete(e);
      }
    } else {
      return false;
    }
  }

  return map.size === 0;
}

module.exports = isEqual;
