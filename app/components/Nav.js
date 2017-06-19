import React from 'react';

export class Nav extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			collapsed: false,
			classes: ["navigator", "navigator-full"],
		};

	}

	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
    	window.removeEventListener('scroll', this.handleScroll.bind(this));
  	}

	handleScroll(){
		if(!this.state.collapsed && window.scrollY >= 100){
			window.document.getElementById("logo-main-img").src = "logoblack.png";
			startAnimation(this, "navbar-collapse", ["navigator", "navigator-small"], 500);
		}else if(this.state.collapsed && window.scrollY < 100){
			window.document.getElementById("logo-main-img").src = "logowhite.png";
			startAnimation(this, "navbar-open", ["navigator", "navigator-full"], 500);
		}else return;

		this.state.collapsed = !this.state.collapsed;
	}

	render(){
		return(
			<div className={this.state.classes.join(" ")} role="navigation">
				<div className="navbar-tab" style={{left: 150 + 'px'}}>link</div>
				<div className="navbar-tab" style={{left: 270 + 'px'}}>link</div>
				<div className="navbar-tab" style={{left: 390 + 'px'}}>link</div>
				<div id="logo-main">
					<img height="30" width="150" src="logowhite.png" id="logo-main-img"/>
				</div>
				<div className="navbar-tab" style={{left: 780 + 'px'}}>link</div>
				<div className="navbar-tab" style={{left: 900 + 'px'}}>link</div>
				<div className="navbar-tab" style={{left: 1020 + 'px'}}>link</div>
			</div>
		);
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