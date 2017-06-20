import React from 'react';

import NavLogo from './NavLogo';

export class Nav extends React.Component{

	constructor(props){
		super(props);

		this.windowLim = 1070;

		this.state = {
			collapsed: false,
			classes: ["navigator", "navigator-full"],
			minimized: window.innerWidth <= this.windowLim,
			popoutNavi: false
		};

	}

	componentDidMount(){
      window.addEventListener('resize', this.handleResize.bind(this));
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount(){
      window.removeEventListener("resize", this.handleResize.bind(this));
      window.addEventListener('scroll', this.handleScroll.bind(this));
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

  		this.logo.handleResize();
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

	togglePopOutNavigator(){
		this.setState({
			popoutNavi: !this.state.popoutNavi
		});
	}

	render(){

		if(this.state.minimized){

			var tabToggleImage = "";

			if(this.state.collapsed){
				if(!this.state.popoutNavi)
					tabToggleImage = "show-tabs-button-black";
				else
					tabToggleImage = "hide-tabs-button-black";
			}else{
				if(!this.state.popoutNavi)
					tabToggleImage = "show-tabs-button-white";
				else
					tabToggleImage = "hide-tabs-button-white";
			}

			return(
				<div className={this.state.classes.join(" ")} role="navigation">
					<NavLogo ref={(child) => {this.logo = child}} initialState={this.state.collapsed} type="left"/>
					<div id="navigator-dropdown-toggle">
						<img src={"assets/" + tabToggleImage + ".png"} height="50" width="50"/>
					</div>
				</div>
			);
		}else{
			var tabHolderClass = ["navbar-tab-holder"];

			return(
				<div className={this.state.classes.join(" ")} role="navigation">
					<div className={tabHolderClass.join(" ")} id="navbar-tab-holder-left">
						<div className="navbar-tab navbar-tab-left navbar-tab-big"><a href="/">Producer<br/>Farms</a></div>
						<div className="navbar-tab navbar-tab-left navbar-tab-big"><a href="/">Distributors<br/>Food hubs</a></div>
						<div className="navbar-tab navbar-tab-left"><a href="/">Buyers</a></div>
					</div>
					<NavLogo ref={(child) => {this.logo = child}} initialState={this.state.collapsed} type="center"/>
					<div className={tabHolderClass.join(" ")} id="navbar-tab-holder-right">
						<div className="navbar-tab navbar-tab-right"><a href="/">About Us</a></div>
						<div className="navbar-tab navbar-tab-right"><a href="/contact">Contact</a></div>
						<div className="navbar-tab navbar-tab-right"><a href="/">News</a></div>
						<div className="navbar-tab navbar-tab-right"><a href="/">Login</a></div>
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
