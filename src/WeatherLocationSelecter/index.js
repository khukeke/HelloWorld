import React, { Component } from 'react';
import {Actions} from '../action'
import {connect} from 'react-redux'

function mapState(state){
  return {
    selectedId : state.locationId
  }
}

function mapDispatch(dispatch,ownProps){
  return {
    locationIdUpdate: (locationId) => {
      dispatch(Actions.fetchData(locationId))
    }
  }
}
class WeatherLocationSelecter extends Component {
  render(){
    const { locationGroup, locationIdUpdate, selectedId } = this.props;
    return (
      <div className="weather-selecter">
        {
          locationGroup.map((locationObj) => {
            return (
            <button
              className={locationObj.id === selectedId? 'selected': ''}
              key={locationObj.id}
              onClick={() => locationIdUpdate(locationObj.id)}>{locationObj.name}
            </button>
            )
          })
        }
      </div>
    )
  }
}

export default connect(mapState,mapDispatch)(WeatherLocationSelecter);