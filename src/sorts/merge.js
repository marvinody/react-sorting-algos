function* merge_sort(A, { set }) {
  // top down merge sort
  const B = A.slice();
  A = A.slice();
  const tdsm = TopDownSplitMerge(B, 0, A.length, A, set);
  for (let done = false; !done; { done } = tdsm.next()) {
    yield
  }
}

function* TopDownSplitMerge(B, iBegin, iEnd, A, set) {
  if (iEnd - iBegin < 2)                       // if run size == 1
    return;                                 //   consider it sorted
  // split the run longer than 1 item into halves
  const iMiddle = (iEnd + iBegin) / 2 | 0;              // iMiddle = mid point
  // recursively sort both runs from array A[] into B[]

  const tdsmLeft = TopDownSplitMerge(A, iBegin, iMiddle, B, set);  // sort the left  run
  for (let done = false; !done; { done } = tdsmLeft.next()) {
    yield
  }
  const tdsmRight = TopDownSplitMerge(A, iMiddle, iEnd, B, set);;
  // sort the right run
  for (let done = false; !done; { done } = tdsmRight.next()) {
    yield
  }
  // merge the resulting runs from array B[] into A[]
  const tdm = TopDownMerge(B, iBegin, iMiddle, iEnd, A, set);
  for (let done = false; !done; { done } = tdm.next()) {
    yield
  }
}

function* TopDownMerge(A, iBegin, iMiddle, iEnd, B, set) {
  let i = iBegin, j = iMiddle;
  // While there are elements in the left or right runs...
  for (let k = iBegin; k < iEnd; k++) {
    // If left run head exists and is <= existing right run head.
    if (i < iMiddle && (j >= iEnd || A[i] <= A[j])) {
      set(k, A[i]);
      B[k] = A[i];
      yield;
      i = i + 1;
    } else {
      set(k, A[j]);
      B[k] = A[j];
      yield;
      j = j + 1;
    }
  }
}


export default merge_sort;
export const data = {
  slug: 'merge-sort'
}
