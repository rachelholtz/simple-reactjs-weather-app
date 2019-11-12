import React from 'react';
import Forecast from './Forecast';

const App = (props) => (

      <ul className="weather-container">
        {Object.keys(props.details.forecast).map((key, i) => (
          <Forecast key={key} id={key} i={i} forecast={props.details.forecast[key]}/>
        ))}
      </ul>

)

export default App;