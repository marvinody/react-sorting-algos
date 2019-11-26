function* insertion_sort(arr, { swap }) {
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      arr = swap(j, j - 1);
      yield;
      j = j - 1;
    }
    i = i + 1;
  }
}

const name = 'Insertion Sort';
const slug = 'insertion-sort';

const complexities = {
  best: 'n',
  average: 'n^2',
  worst: 'n^2',
};

const link = 'https://en.wikipedia.org/wiki/Insertion_sort';

const desc = `Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.`;

export const data = {
  name,
  slug,
  complexities,
  link,
  desc,
};

export default insertion_sort;
