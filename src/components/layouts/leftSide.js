import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {Layout, Menu, Icon,} from 'antd';
const {Sider} = Layout;
const {SubMenu} = Menu;
class LeftSide extends Component {
    render() {
        return <Sider width={200} style={{ background: '#fff' }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                    <Menu.Item key="1">
                        <Link to="/option1">option1</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/option2">option2</Link>
                    </Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    }
}

export default LeftSide;