const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, -8, -4, -1, -32, 32, 12, 14];
let count = 0;

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = arr[i];
    if (i === pivotIndex) {
      continue;
    }

    if (currentElement < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(currentElement);
    }
    count++;
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log("length = ", arr.length);
console.log(quickSort(arr));
console.log(count);
