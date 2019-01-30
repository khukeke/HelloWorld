import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { createStore } from 'redux'
// import registerServiceWorker from './registerServiceWorker';
// import store from './store';
import {Provider} from 'react-redux';
import LeftSide from '../src/components/layouts/leftSide';
// import Routes from '@configs/router.config'
// import configure from '@middleware/configureStore';
import todoApp from './redux/reducer';
// const store = configure({ });
// const store = {};
const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
        {/* <Router>
            <Route path="/" component={App}></Route>
        </Router> */}
    </Provider>,
    document.getElementById('root')
)
