import React from 'react';
import Forecast from './Forecast';

const Weather = (props) => (
  <div className="article">
    <ul className="weather-container">
          {Object.keys(props.details.forecast).map(key => (
          <Forecast key={key} forecast={props.details.forecast[key]}/>
        ))}
    </ul>
  </div>
)
export default Weather;