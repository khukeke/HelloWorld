import React, {Component} from 'react';
import {Layout} from 'antd';
import HeaderPart from './header';
import LeftSide from './leftSide';
import MainContent from './mainContent';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/action'
const {Content, Footer} = Layout;
class PageLayout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('this.props')
        console.log(this.props)
        this.props.addTodoDispatch();
    }
    render() {
        console.log('this.props')
        console.log(this.props)
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
const mapStateToProps = (state, ownProps) => {
    return {
        page: state.page
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodoDispatch: () => {dispatch(addTodo(2))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);