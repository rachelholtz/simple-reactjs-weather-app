import React from 'react';

class Footer extends React.Component{
  render(){
    const today = new Date();
    return(
      <footer>
        <span>© {today.getFullYear()} Rachel Holtz</span>
      </footer>
    )
  }
}

export default Footer

