import React, { Component } from 'react';
import logo from './logo.svg';
import PageLayout from './components/layouts';
import {Router, Route} from 'react-router';
import './App.css';
import "antd/dist/antd.css";
import MainContent from '../src/components/layouts/mainContent';

import {routerConfig} from './configs/routerConfig';
class App extends Component {
  render() {
    return (
        <div className="App">
            <Route path="/" component={PageLayout} />
            <Route path="/option1" component={MainContent} />
        </div>
    );
  }
}

export default App;
