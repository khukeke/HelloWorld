import React, { Component } from 'react';
import logo from './logo.svg';
import PageLayout from './components/layouts';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
        <Router>
            <Route path="/" component={PageLayout} />
        </Router>
    );
  }
}

export default App;
