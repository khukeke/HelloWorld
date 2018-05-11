import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WeatherApp from './WeatherApp';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
