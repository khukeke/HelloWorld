import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import {Router, Route, browserHistory} from 'react-router';
import {BrowserRouter as Router, Route } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';
// import WeatherApp from './WeatherApp';
// import store from './store';
import {Provider} from 'react-redux';
import LeftSide from '../src/components/layouts/leftSide';
// import Routes from '@configs/router.config'
// import configure from '@middleware/configureStore';

// const store = configure({ });
const store = {};

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
