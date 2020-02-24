import React, {Component} from 'react';
import LoadData from './src/LoadData';

// create store if need that
export default class App extends Component {
  render() {
    // redux provider here
    return <LoadData />;
  }
}
