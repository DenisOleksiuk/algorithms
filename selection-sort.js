const arr = [0,3,2,5,6,1,8,9,4,2,7,16,13,15,12,8,-1,-3]
let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      count++;
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
}

console.log(selectionSort(arr))
console.log(count)