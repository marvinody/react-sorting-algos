function getMax(arr) {
  return Math.max.apply(null, arr);
}

function* countSort(arr, n, exp, set) {
  const output = arr.slice();
  let count = Array.from(Array(10)).map(() => 0);

  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }
  for (let i = 0; i < n; i++) {
    set(i, output[i]);
    yield;
  }

}


function* radix_sort(arr, { set, get }) {
  const n = arr.length;
  let m = getMax(arr);

  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
    console.log(exp)
    const countSorter = countSort(arr, n, exp, set);
    for (let done = false; !done; { done } = countSorter.next()) {
      yield
    }
    arr = get();
  }
}


export default radix_sort;

export const data = {
  slug: 'radix-sort'
}
