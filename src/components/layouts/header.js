import React, {Component} from 'react';

import {Layout, Menu} from 'antd';
const {Header} = Layout;

class HeaderPart extends Component {
    render() {
        return <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>

            </Menu>
        </Header>
    }
}

export default HeaderPart;