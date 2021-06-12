function cashFunction(fn) {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      return cash[n];
    }
    const result = fn(n);
    cash[n] = result;
    return result;
  };
}

function factorial(n) {
  let result = 1;
  while (n !== 1) {
    result *= n;
    n -= 1;
  }
  return result;
}
const cash = cashFunction(factorial);
console.log(cash(5));
console.log(cash(5));
console.log(cash(6));
console.log(cash(6));
