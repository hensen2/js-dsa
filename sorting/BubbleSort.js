export default function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap
        swapped = true;
      }
    }
  }

  return arr;
}
