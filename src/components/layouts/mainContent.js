import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Layout} from 'antd';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

const {Content} = Layout;
class MainContent extends Component {
    render() {
        return <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Route path="/option1" component={Page1} />
            <Route path="/option2" component={Page2} />
        </Content>
    }
}

export default MainContent;