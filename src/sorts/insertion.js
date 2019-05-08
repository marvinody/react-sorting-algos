function* insertion_sort(arr, { swap }) {
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      arr = swap(j, j - 1);
      yield
      j = j - 1;
    }
    i = i + 1;
  }

}

export default insertion_sort
