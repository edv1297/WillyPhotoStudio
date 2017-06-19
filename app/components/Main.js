import React from 'react';
import Bio from './Bio';

export class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      'width': window.innerWidth,
      'height': window.innerHeight
    }
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth
    })
  }

  componentDidMount(){
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render(){
    return(
      <div>
          <div id="main-image">
              <img src="assets/farmImage.jpg" width={this.state.width}/>
              <div id="page-title-text" className="main-title">Uniting the local food community</div>
              <div id="page-sub-title" className="main-title">One<span style={{color: '#DE1500'}}> byte</span> at a time.</div>
          </div>
          <Bio/>
      </div>
    )}
  }
