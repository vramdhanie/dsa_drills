/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/

function searchLines(words, concordance, data) {
  let pointer = words.head;
  const result = new Set();
  while (pointer) {
    concordance[pointer.value]?.forEach((line) => result.add(data[line]));
    pointer = pointer.next;
  }
  return Array.from(result);
}

module.exports = searchLines;
