import React, { Component } from 'react';
// import WeatherSelecter from './WeatherSelecter';
// import WeatherPanel from './WeatherPanel';
import {arrLocation as LocationGroup} from './utils';
// import { arrLocation } from './utils';
import WeatherHeader from './WeatherHeader';


class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: ''
    }
    this.locationUpdate = this.locationUpdate.bind(this);
  }

  locationUpdate(locationName) {
    this.setState({
      selectedLocation: locationName
    })
  }
  locationIdUpdate(locationId, dailyInfo){
    this.setState({
      daily: dailyInfo,
      selectedLocationId: locationId
    })
  }
  render() {

    return (
      // <provider store={store}>


      // </provider>
      <div className="weather-app">
        <WeatherHeader />
        {/* <WeatherSelecter locationGroup={LocationGroup} locationUpdate={this.locationUpdate}/>
        <WeatherPanel location={this.state.selectedLocation} /> */}
        {/* <button onClick={() => { this.forceUpdate()} }>forceUpdate </button> */}
      </div>
    );
  }
}

export default WeatherApp;