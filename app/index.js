import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs.js'
import TabPane from './TabPane.js'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
    }


  }
  render(){
    return (
      <div>
        <div className = "operator">
          <span>切换Tab：</span>
          <select value = {this.state.activeIndex} onChange ={this.handleChange}>
            <option value = "0">Tab 1</option>
            <option value = "0">Tab 1</option>
            <option value = "0">Tab 1</option>
          </select>
        </div>
        <Tabs defaultActiveIndex = {this.state.activeIndex} className ="tabs-bar">
          <TabPane order = "0" tab ={'tab 1'} >第一个Tab里的内容</TabPane>
          <TabPane order = "1" tab ={'tab 2'} >第2个Tab里的内容</TabPane>
          <TabPane order = "2" tab ={'tab 2'} >第3个Tab里的内容</TabPane>
        </Tabs>
      </div>
    )
  }

}


ReactDOM.render(<App/>,document.getElementById('root'));
