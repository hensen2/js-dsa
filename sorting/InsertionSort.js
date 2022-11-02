// for j <- 2 to length[A]
// 2       do key <- A[j]
// 3         Insert A[j] into the sorted sequence A[1 . . j - 1].
// 4        i <- j - 1
// 5        while i > 0 and A[i] > key
// 6           do A[i + 1] <- A[i]
// 7              i <- i - 1
// 8        A[i + 1] <- key

function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionSort([4, 5, 3, 77, 11]));
