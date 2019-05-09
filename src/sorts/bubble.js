function* bubble_sort(arr, { swap }) {
  const n = arr.length;
  let swapped = true;
  while (swapped) {
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        arr = swap(i - 1, i)
        yield;
        swapped = true;
      }
    }
  }

}


export default bubble_sort;
