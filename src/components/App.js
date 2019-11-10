import React from 'react';
import weather from '../weather';
import Header from './Header';
import Weather from './Weather';
import Footer from './Footer';

class App extends React.Component{
  // initial state
  state = {
    forecast: {},
  };

  componentDidMount(){
    this.setState({
        forecast : weather
    });
  }

  render(){
    return(
      <div className="main">
        <Header/>
        <Weather details={this.state} />
        <Footer/>
      </div>
    )
  }
}

export default App;
