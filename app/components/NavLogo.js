import React from 'react';

export default class NavLogo extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			collapsed: this.props.initialState,
			type: this.props.type,
			classes: [],
			logoHeight: 50
		};

		this.updateClasses(this.state.collapsed);
		this.updateLogoSize(this.state.collapsed);
	}

	collapse(){
		if(this.state.collapsed) return;

		this.updateClasses(true);
		this.updateLogoSize(true);

		this.setState({
			collapsed: true
		});
	}

	expand(){
		if(!this.state.collapsed) return;

		this.updateClasses(false);
		this.updateLogoSize(false);

		this.setState({
			collapsed: false
		});
	}

	componentDidMount(){
		this.setState({
			classes: this.state.classes
		});
	}

	handleResize(){
		this.updateLogoSize(this.state.collapsed);
		this.setState({});
	}

	updateLogoSize(collapsed){
		var logoHeight = 0;

		if(!collapsed && this.state.type == "center"){
			logoHeight = window.innerWidth * 0.07;
		}else{
			logoHeight = 50;
		}

		this.state.logoHeight = logoHeight;
	}

	updateClasses(collapsed){
		var classes = "";

		if(!collapsed){
			if(this.state.type == "center"){
				classes = ["logo-centered-larger"];
			}else{
				classes = ["logo-left", "logo-left-larger"];
			}
		}else{
			if(this.state.type == "center"){
				classes = ["logo-centered-shrunken", "logo-shrunken"];
			}else{
				classes = ["logo-left", "logo-shrunken"];
			}

		}

		this.state.classes = classes;
	}

	render(){
		var classes = "";

		const imageColor = this.state.collapsed ? "black" : "white";

		return (
			<div id="logo-main" className={this.state.classes.join(" ")}>
				<a href="/"><img src={"assets/logo" + imageColor + ".png"} height={this.state.logoHeight}/></a>
			</div>
		);
	}
}