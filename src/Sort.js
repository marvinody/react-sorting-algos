import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router';
import Controls from './Controls';
import DataHolder from './DataHolder';
import NavBar from './NavBar';
import SortInfo from './SortInfo';
import sorts from './sorts';
const TIMEOUT = 10;
const ARRAY_SIZE = 100;
const newArray = len => {
  return (new Array(len)).fill(1).map((_, i) => (i + 1) * 10 + Math.random() * 5)
}

export default withRouter(class Sort extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {}
    this.start = this.start.bind(this);
    this.randomize = this.randomize.bind(this);
    this.unsort = this.unsort.bind(this)

    this.swap = this.swap.bind(this)
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);

  }
  setSort(props) {
    const { slug } = props.match.params
    this.setState({
      isSorting: false,
      sort: sorts[slug],
      values: newArray(ARRAY_SIZE),
    })
  }
  componentDidMount() {
    this.setSort(this.props)
  }

  // not the best way of doing this, but it seems to be ok
  // the conditional prevents extra updates!
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      this.setSort(nextProps)
    }
    return true;
  }

  randomize() {
    this.setState(prev => ({
      values: _.shuffle(prev.values),
      isSorting: false,
    }))
  }

  unsort() {
    this.setState(prev => ({
      // sort it backwards
      values: prev.values.slice().sort((a, b) => b - a),
      isSorting: false,
    }))
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
        <SortInfo {...this.state.sort} />
        <Controls start={this.start} randomize={this.randomize} unsort={this.unsort} />
        <DataHolder values={this.state.values} />
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
