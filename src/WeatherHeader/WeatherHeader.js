import React, { Component } from 'react';
import './WeatherHeader.css';
import { arrLocation as LocationGroup } from '../utils';
import WeatherTitle from '../WeatherHeader';






class WeatherHeader extends Component {
  render() {
    return (
      <div className="weather-header">
        <WeatherTitle LocationGroup={LocationGroup}/>
        <WeatherLocationSelecter LocationGroup={LocationGroup}/>
      </div>
    );
  }
}

export default WeatherHeader;