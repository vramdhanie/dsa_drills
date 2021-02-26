/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  const map = new Map();
  words.forEach((word) => {
    let base = word.split("").sort().join("");
    if (map.has(base)) {
      map.get(base).push(word);
    } else {
      map.set(base, [word]);
    }
  });
  return Array.from(map).map(([key, value]) => value);
}

module.exports = anagramGroups;
