import React, {Component} from 'react';
import {Layout} from 'antd';
import HeaderPart from './header';
import LeftSide from './leftSide';
import MainContent from './mainContent';

const {Content, Footer} = Layout;
class PageLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Layout>
            <HeaderPart />
            <Content style={{padding: '0 50px'}}>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <LeftSide />
                    <MainContent />
                </Layout>
            </Content>
            <Footer>footer</Footer>
        </Layout>
    }
}

export default PageLayout;