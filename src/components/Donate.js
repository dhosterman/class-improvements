import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Donate extends Component {
  render() {
    return (
      <div className="Donate">
        <h4 className="leftaligned">Want to donate? <NavLink to="/contact">Sign Up</NavLink> for the IWW!</h4>
      </div>
    );
  }
}

export default Donate;
