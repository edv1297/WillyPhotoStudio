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
      <div id = "img">
        <img src = "assets/farmImage.jpg" width = {this.state.width}/>
        <h1 id = "Title" className = "MainText">Uniting the local food community</h1>
        <h2 id = "Pun" className = "MainText">One byte at a time.</h2>
        <Bio/>
    </div>
  </div>
    )}
  }
