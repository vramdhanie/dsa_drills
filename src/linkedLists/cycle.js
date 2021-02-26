function cycle(list) {
  if (!list.head) {
    return false;
  }

  let fast = list.head.next;
  let slow = list.head;

  while (fast && fast != slow) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      fast = fast.next;
    }
  }

  return !!fast;
}

module.exports = cycle;
