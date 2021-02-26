/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  return (
    s1.toLowerCase().split("").sort().join("") ===
    s2.toLowerCase().split("").sort().join("")
  );
}

module.exports = anagram;
