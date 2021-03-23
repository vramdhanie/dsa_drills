function fastPower(p, k) {
  console.log(p, k);

  if (k === 0) {
    return 1;
  }

  if (k % 2 === 0) {
    return fastPower(p * p, k / 2);
  }

  return p * fastPower(p * p, (k - 1) / 2);
}

console.log(fastPower(4, 7));
console.log(fatsPower(3, 10));
