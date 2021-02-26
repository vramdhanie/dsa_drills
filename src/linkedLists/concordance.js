/*
 Given an array of sentences output a concordance of words
 If the same word appears multiple times on a line it should
 list the line only once
*/
function concordance(data) {
  const result = {};
  data.forEach((sentence, index) => {
    sentence
      .split(/[\s.,';]/)
      .filter(Boolean)
      .forEach((word) => {
        word = word.toLowerCase();
        if (result[word]) {
          result[word].add(index);
        } else {
          result[word] = new Set([index]);
        }
      });
  });

  Object.entries(result).forEach(
    ([word, set]) => (result[word] = Array.from(set))
  );
  return result;
}

module.exports = concordance;
