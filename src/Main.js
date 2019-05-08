import React from 'react';
import Controls from './Controls';
import DataHolder from './DataHolder';
import insertion_sort from './sorts/insertion';
import radix_sort from './sorts/radix';
const TIMEOUT = 30;
const ARRAY_SIZE = 100;
const newRandArray = len => {
  const arr = Array.from(new Int8Array(len));
  return arr.map(() => Math.random() * 10000 | 0);
}

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      values: newRandArray(ARRAY_SIZE),
      isSorting: false,
      sorts: [
        { name: 'Insertion Sort', sort: insertion_sort },
        { name: 'Radix Sort', sort: radix_sort }
      ],
      sort: 1,
    }
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.changeSort = this.changeSort.bind(this)

    this.swap = this.swap.bind(this)
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);

  }
  changeSort(idx) {
    this.setState({
      sort: idx,
    })
  }
  reset() {
    this.setState({
      values: newRandArray(ARRAY_SIZE),
    })
  }
  async start() {
    if (this.state.isSorting) {
      return;
    }
    this.setState({
      isSorting: true,
    })
    await this.sort();
  }
  get() {
    return this.state.values;
  }
  set(idx, val) {
    const arr = Array.from(this.state.values);
    const newArr = arr.slice(0, idx).concat(val, arr.slice(idx + 1));
    this.setState({
      values: newArr,
    })
    return newArr;
  }
  swap(idxA, idxB) {
    const arr = this.state.values.slice();
    let a = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = a;
    this.setState({
      values: arr,
    })
    return arr;
  }
  async sort() {
    const arr = this.state.values;

    const sortAlgo = this.state.sorts[this.state.sort]
    const newSorter = sortAlgo.sort(arr, {
      swap: this.swap,
      set: this.set,
      get: this.get,
    });
    while (!this.isSorted()) {
      newSorter.next();
      await resolveInSomeTime();
    }
    this.setState({
      isSorting: false,
    })
  }
  isSorted() {
    const arr = this.state.values;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }

  render() {
    return (
      <div className='container'>
        <DataHolder values={this.state.values} />
        <Controls start={this.start} reset={this.reset} sorts={this.state.sorts} sort={this.state.sort} changeSort={this.changeSort} />
      </div>
    )
  }
}

function resolveInSomeTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, TIMEOUT)
  })
}
