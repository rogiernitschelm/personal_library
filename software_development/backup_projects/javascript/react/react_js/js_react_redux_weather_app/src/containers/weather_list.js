import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const NAME = cityData.city.name
    const TEMPS = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const PRESSURES = cityData.list.map(weather => weather.main.pressure);
    const HUMIDITIES = cityData.list.map(weather => weather.main.humidity);
    //const LON = cityData.city.coord.lon
    //const LAT = cityData.city.coord.lat
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={NAME}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={TEMPS} color="red" units="c" /></td>
        <td><Chart data={PRESSURES} color="orange" units="hPa" /></td>
        <td><Chart data={HUMIDITIES} color="blue" units="%" /></td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (c)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather : weather } es6
}

export default connect(mapStateToProps)(WeatherList);
