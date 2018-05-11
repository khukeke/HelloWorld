import React, { Component } from 'react';
import './WeatherHeader.css';
import { arrLocation as LocationGroup } from '../utils';
import WeatherTitle from '../WeatherTitle';
import WeatherLocationSelecter from '../WeatherLocationSelecter';



class WeatherHeader extends Component {
  render() {
    return (
      <div className="weather-header">
        <WeatherTitle locationGroup={LocationGroup}/>
        <WeatherLocationSelecter locationGroup={LocationGroup}/>
      </div>
    );
  }
}

export default WeatherHeader;