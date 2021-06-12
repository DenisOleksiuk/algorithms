const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let count = 0;

function recursiveBinarySearch(arr, target, start, end) {
  let middle = Math.floor((start + end) / 2);
  count++;
  if (target === arr[middle]) {
    return middle;
  }

  if (target < arr[middle]) {
    return recursiveBinarySearch(arr, target, start, middle - 1);
  } else {
    return recursiveBinarySearch(arr, target, middle + 1, end);
  }
}

console.log("length = ", arr.length);
console.log(recursiveBinarySearch(arr, 7, 0, arr.length));
console.log(count);
