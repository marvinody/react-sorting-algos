import React from 'react';
import Controls from './Controls';
import DataHolder from './DataHolder';

const TIMEOUT = 30;

const newRandArray = len => {
  const arr = new Float32Array(len);
  return arr.map(() => Math.random());
}

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      values: newRandArray(100),
    }
    this.start = this.start.bind(this);
  }
  async start() {
    await this.sort();
  }
  swap(idxA, idxB) {
    const arr = this.state.values.slice();
    let a = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = a;
    this.setState({
      values: arr,
    })
  }
  async sort() {
    const newSorter = this.insertion_sort();
    while (!this.isSorted()) {
      newSorter.next();
      await resolveInSomeTime();
    }
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
  *insertion_sort() {
    let i = 1;
    let arr = this.state.values;
    const swap = (idxA, idxB) => {
      let a = arr[idxA];
      arr[idxA] = arr[idxB];
      arr[idxB] = a;
    }
    while (i < arr.length) {
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        this.swap(j, j - 1);
        yield
        swap(j, j - 1);
        j = j - 1;
      }
      i = i + 1;
    }

  }
  render() {
    return (
      <div className='container'>
        <DataHolder values={this.state.values} />
        <Controls start={this.start} />
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
