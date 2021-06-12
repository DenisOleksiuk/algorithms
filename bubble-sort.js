const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, -8, -4, -1, -32, 32, 12, 14];
let count = 0;

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
      count++;
    }
  }
  return arr;
};

console.log("length = ", arr.length);
console.log(bubbleSort(arr));
console.log(count);
