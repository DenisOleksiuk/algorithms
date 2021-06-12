const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let count = 0;

function binarySearch(input, target) {
  let start = 0;
  let end = input.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count++;
    middle = Math.floor((start + end) / 2);

    if (input[middle] === target) {
      found = true;
      position = middle;
      return position;
    }

    if (target < input[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log("length + ", arr.length);
console.log(binarySearch(arr, 7));
console.log(count);
