import React from 'react';

export default class NavLogo extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			collapsed: this.props.initialState,
			type: this.props.type,
			classes: [],
			logoHeight: 10
		};

		this.updateClasses(this.state.collapsed);
	}

	collapse(){
		if(this.state.collapsed) return;

		this.updateClasses(true);

		this.setState({
			collapsed: true
		});
	}

	expand(){
		if(!this.state.collapsed) return;

		this.updateClasses(false);

		this.setState({
			collapsed: false
		});
	}

	compnentDidMount(){
		this.setState({
			classes: this.state.classes
		});
	}

	updateClasses(collapsed){
		var classes = "";
		var logoHeight = 0;

		if(!collapsed){
			if(this.state.type == "center"){
				classes = ["logo-centered-larger"];
				logoHeight = window.innerWidth * 0.07;
			}else{
				classes = ["logo-left", "logo-left-larger"];
				logoHeight = window.innerWidth * 0.105;
			}
		}else{
			if(this.state.type == "center"){
				classes = ["logo-centered-shrunken", "logo-shrunken"];
			}else{
				classes = ["logo-left", "logo-shrunken"];
			}

			logoHeight = 50;

		}

		this.state.logoHeight = logoHeight;

		this.state.classes = classes;
	}

	render(){
		var classes = "";

		return (
			<div id="logo-main" className={this.state.classes.join(" ")}>
				<img src="logoblack.png" height={this.state.logoHeight + "px"}/>
			</div>
		);
	}
}