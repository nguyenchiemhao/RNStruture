import React, {Component} from 'react';
import LoadData from './src/LoadData';
import {NavigationContainer} from '@react-navigation/native';
// create store if need that
export default class App extends Component {
  render() {
    // redux provider here
    return <LoadData />;
  }
}
