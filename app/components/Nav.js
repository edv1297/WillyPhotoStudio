import React from 'react';

import NavLogo from './NavLogo';

export class Nav extends React.Component{

	constructor(props){
		super(props);

		this.windowLim = 1070;

		this.triggerScrollTop = 60;

		this.collapsable = this.props.collapsable;

		this.state = {
			collapsed: !this.collapsable,
			classes: !this.collapsable ? ["navigator", "drop-shadow"] : ["navigator", "navigator-full"],
			minimized: window.innerWidth <= this.windowLim,
			popoutNavi: false
		};

	}

	componentDidMount(){
		window.addEventListener('resize', this.handleResize.bind(this));

  		if(this.collapsable) // only listen for scrolling events if this navbar is collapsable
  			window.addEventListener('scroll', this.handleScroll.bind(this));
  	}

  	componentWillUnmount(){
  		window.removeEventListener("resize", this.handleResize.bind(this));

  		if(this.collapsable)
  			window.removeEventListener('scroll', this.handleScroll.bind(this));
  	}

  	handleResize(){
  		if(window.innerWidth <= this.windowLim && !this.state.minimized){
  			this.setState({
  				minimized: true
  			});
  		}else if(window.innerWidth > this.windowLim && this.state.minimized){
  			this.setState({
  				minimized: false,
  				popoutNavi: false
  			});
  		}
  	}

  	handleScroll(){
  		if(!this.state.collapsed && window.scrollY >= this.triggerScrollTop){
  			startAnimation(this, "navbar-collapse-anim", ["navigator", "navigator-small", "drop-shadow"], 400);

  		}else if(this.state.collapsed && window.scrollY < this.triggerScrollTop){
  			startAnimation(this, "navbar-open-anim", ["navigator", "navigator-full"], 400);
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
	  				<div>
					    <link rel = "stylesheet" type = "text/css" href = 'css/navigation.css'/>
	  					<div className={this.state.classes.join(" ")} role="navigation">
	  						<div id="navigator-dropdown-toggle" onClick={this.togglePopOutNavigator.bind(this)}>
	  							<img src={"assets/" + tabToggleImage + ".png"} height="50" width="50"/>
	  						</div>
	  					</div>
	  					<div id="popout-navigator" style={{display: this.state.popoutNavi ? "block" : "none"}}>
	  						<div className="popnavi-links">
		  						<div className="popnavi-link"><a href="/">Home</a></div>
									<div className="popnavi-link"><a href="/producer">Weddings</a></div>
									<div className="popnavi-link"><a href="/distributor">Quinces</a></div>
									<div className="popnavi-link"><a href="/buyer">Maternity</a></div>
									<div className="popnavi-link"><a href="/contact">Contact</a></div>
									<div className="popnavi-link"><a href="/aboutus">About</a></div>
	  						</div>
	  					</div>
	  				</div>
  				);
  		}else{
  			var tabHolderClass = ["navbar-tab-holder"];

  			return(
				<div>
				<link rel = "stylesheet" type = "text/css" href = 'css/navigation.css'/>
  				<div className={this.state.classes.join(" ")} role="navigation">
	  				<div className={tabHolderClass.join(" ")} id="navbar-tab-holder-left">
						<div className = "navigation-container">
						<div className="navbar-tab"><a href="/">Home</a></div>
		  				<div className="navbar-tab"><a href="/producer">Weddings</a></div>
							<div className="navbar-tab"><a href="/distributor">Quinces</a></div>
							<div className="navbar-tab"><a href="/buyer">Maternity</a></div>
							<div className="navbar-tab"><a href="/contact">Contact</a></div>
							<div className="navbar-tab"><a href="/aboutus">About</a></div>
							</div>
	  				</div>
  				</div>
				</div>
  				);
  		}
  	}
  }

function startAnimation(object, keyframes, finishedState, duration){
	object.state.classes.push(keyframes);
	object.setState({
		classes: object.state.classes
	});

	setTimeout(() => {
		object.setState({classes: finishedState});
	}, duration);
	}
