import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import WeatherApp from './WeatherApp';
// import store from './store';
import {Provider} from 'react-redux';
// import Routes from '@configs/router.config'
// import configure from '@middleware/configureStore';

// const store = configure({ });
const store = {};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
