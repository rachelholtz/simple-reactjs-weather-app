import React from 'react';

class Forecast extends React.Component{
  render(){
    const {image, name, low, high} = this.props.forecast;

    return(
      <li className="forecast-container">
        <img src={image} alt={name}/>
        <h3>
          {name}
        </h3>
        <div className="temperature">
          <div className="temp-low">
            <p>Low: {low}&deg;</p>
          </div>
          <div className="temp-high">
            <p>High: {high}&deg;</p>
          </div>
        </div>
      </li>
    )
  }
}

export default Forecast;