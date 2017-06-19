import React from 'react';
import NavLogo from './NavLogo';

export class Nav extends React.Component{

	constructor(props){
		super(props);

		this.windowLim = 1070;

		this.state = {
			collapsed: false,
			classes: ["navigator", "navigator-full"],
			minimized: window.innerWidth <= this.windowLim
		};

	}

	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll.bind(this));
		window.addEventListener('resize', this.handleResize.bind(this));
	}

	componentWillUnmount() {
    	window.removeEventListener('scroll', this.handleScroll.bind(this));
    	window.removeEventListener('resize', this.handleResize.bind(this));
  	}

  	handleResize(){
  		if(window.innerWidth <= this.windowLim && !this.state.minimized){
  			this.setState({
  				minimized: true
  			});
  		}else if(window.innerWidth > this.windowLim && this.state.minimized){
  			this.setState({
  				minimized: false
  			});
  		}
  	}

	handleScroll(){
		if(!this.state.collapsed && window.scrollY >= 100){
			// window.document.getElementById("logo-main-img").src = "logoblack.png";
			startAnimation(this, "navbar-collapse-anim", ["navigator", "navigator-small"], 500);
			this.logo.collapse();
		}else if(this.state.collapsed && window.scrollY < 100){
			// window.document.getElementById("logo-main-img").src = "logowhite.png";
			startAnimation(this, "navbar-open-anim", ["navigator", "navigator-full"], 500);
			this.logo.expand();
		}else return;

		this.state.collapsed = !this.state.collapsed;
	}

	clicked(){

	}

	render(){

		if(this.state.minimized){
			return(
				<div className={this.state.classes.join(" ")} role="navigation">
					<NavLogo ref={(child) => {this.logo = child}} initialState={this.state.collapsed} type="left"/>
					<div id="navigator-dropdown-toggle"></div>
				</div>
			);
		}else{
			var tabHolderClass = ["navbar-tab-holder"];

			return(
				<div className={this.state.classes.join(" ")} role="navigation">
					<div className={tabHolderClass.join(" ")} id="navbar-tab-holder-left">
						<div className="navbar-tab navbar-tab-left navbar-tab-big">Producer<br/>Farms</div>
						<div className="navbar-tab navbar-tab-left navbar-tab-big">Distributors<br/>Food hubs</div>
						<div className="navbar-tab navbar-tab-left">Buyers</div>
					</div>
					<NavLogo ref={(child) => {this.logo = child}} initialState={this.state.collapsed} type="center"/>
					<div className={tabHolderClass.join(" ")} id="navbar-tab-holder-right">
						<div className="navbar-tab navbar-tab-right">About Us</div>
						<div className="navbar-tab navbar-tab-right">Contact</div>
						<div className="navbar-tab navbar-tab-right">News</div>
						<div className="navbar-tab navbar-tab-right">Login</div>
					</div>
				</div>
			);
		}
	}
}


// <div className="navbar-tab" style={{left: 780 + 'px'}}>link</div>
// 				<div className="navbar-tab" style={{left: 900 + 'px'}}>link</div>
// 				<div className="navbar-tab" style={{left: 1020 + 'px'}}>link</div>


// <img height="30" width="150" src="logowhite.png" id="logo-main-img"/>

function startAnimation(object, keyframes, finishedState, duration){
	object.state.classes.push(keyframes);
	object.setState({
		classes: object.state.classes
	});

	setTimeout(() => {
		object.setState({classes: finishedState});
	}, duration);
}
