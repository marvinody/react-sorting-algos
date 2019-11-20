import React from 'react';
import { withRouter } from 'react-router';
import Controls from './Controls';
import DataHolder from './DataHolder';
import NavBar from './NavBar';
import SortInfo from './SortInfo';
import sorts from './sorts';
const TIMEOUT = 10;
const ARRAY_SIZE = 100;
const newRandArray = len => {
  const arr = Array.from(new Int8Array(len));
  return arr.map(() => Math.random() * (ARRAY_SIZE * 10) | 0);
}

export default withRouter(class Sort extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {}
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);

    this.swap = this.swap.bind(this)
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);

  }
  resetToStart(props) {
    const { slug } = props.match.params
    this.setState({
      values: newRandArray(ARRAY_SIZE),
      isSorting: false,
      sort: sorts[slug],
    })
  }
  componentDidMount() {
    this.resetToStart(this.props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      this.resetToStart(nextProps)
    }
    return true;
  }

  reset() {
    this.setState({
      values: newRandArray(ARRAY_SIZE),
      isSorting: false,
    })
  }
  start() {
    if (this.state.isSorting) {
      return;
    }
    this.setState({
      isSorting: true,
    }, async () => {
      await this.sort();
    })
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

    const sortAlgo = this.state.sort
    const newSorter = sortAlgo.sort(arr, {
      swap: this.swap,
      set: this.set,
      get: this.get,
    });
    while (!this.isSorted() && this.state.isSorting) {
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
    if (!this.state.sort) {
      return (<div>Oops! This is an invalid sort it seems like...Go to the homepage and try a different one</div>)
    }
    return (
      <div className='container'>
        <NavBar></NavBar>
        <DataHolder values={this.state.values} />
        <Controls start={this.start} reset={this.reset} />
        <SortInfo {...this.state.sort} />
      </div>
    )
  }
})

function resolveInSomeTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, TIMEOUT)
  })
}
