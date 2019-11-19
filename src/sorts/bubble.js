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

const name = 'Bubble Sort'

const complexities = {
  best: 'n',
  average: 'n^2',
  worst: 'n^2',
}

const link = 'https://en.wikipedia.org/wiki/Bubble_sort'

const desc = `A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position. `

export const data = {
  name,
  link,
  desc,
  complexities,
}

export default bubble_sort;
