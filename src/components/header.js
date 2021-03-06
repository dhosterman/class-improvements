import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalbuttonactive:false,
    };
    this.click = this.click.bind(this)
  }
  click(){
    this.setState({modalbuttonactive:!this.state.modalbuttonactive})
  }
  render() {
    let iww = {
      "color":"#847878",
      "fontSize":"1.3rem",
    }
    let iwwlogo = {
      "maxHeight":"250px",
    }
    let arrowclasses = "modalbutton hiddenmodal";
    let modalclasses = "navlinks hiddenmodal";
    let chara = ">"
    if(this.state.modalbuttonactive){
      arrowclasses = "modalbutton shownmodal";
      modalclasses = "navlinks shownmodal bg-light";
      chara = "<"
    }
    return (
      <div className="Header">
        <div className="header_logo_title">
          <div style={iww}>
            Raleigh-Durham Industrial Workers of the World
          </div>
          <div>
            <img alt="IWW Logo" src="./IWW-Raleigh-Durham.png" className="iwwlogo" style={iwwlogo}/>
          </div>
        </div>
        <div onClick={this.click} className={arrowclasses}>
          {chara}
        </div>
        <div className={modalclasses}>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/home">
            Home
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/about">
            About
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/contact">
            Contact
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/events">
            Events
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/iwoc">
            IWOC
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/gdc">
            GDC
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/wfw">
            WFW
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/donate">
            Donate
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/posters">
            Posters
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
