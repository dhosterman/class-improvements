import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
  }
  componentWillMount(){
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    let eventsstyles = {
      "margin":"0 auto",
      "textAlign":"center",
    }
    let iframelink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftriangleiww%2Fevents%2F&tabs=events&width=${this.state.width}&height=1000&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=196378587576073`
    let iframestyles = {
      "width":`${this.state.width}px`,
      "height":`1000px`,
      "border":"none",
      "overflow":"hidden",
      "scrolling":"no",
      "frameborder":"0",
      "allowTransparency":"true",
    }
    if(this.state.width > 520){
      iframestyles = {
        "width":`500px`,
        "height":`1000px`,
        "border":"none",
        "overflow":"hidden",
        "scrolling":"no",
        "frameborder":"0",
        "allowTransparency":"true",
      }
    }
    return (
      <div className="Events" style={eventsstyles}>
        <h4 className="leftaligned">Upcoming Events</h4>
        <iframe title="events" src={iframelink}
        style={iframestyles}></iframe>
      </div>
    );
  }
}

export default Events;
