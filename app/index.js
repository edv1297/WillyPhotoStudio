
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { Landing } from "./components/Landing";
import { Contact } from "./components/Contact";
import { AboutUs } from "./components/AboutUs";
import { Producer } from "./components/LearnMore";
import { Distributor } from "./components/LearnMore";
import { Buyer } from "./components/LearnMore";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import { Newsletter } from "./components/NewsLetterSignup";
import { Gallery } from "./components/Gallery";


export const App = (props) => {
	return(
		<div>
			<Router>
				<div>
					<Route exact path="/" component={ Gallery }/>
					<Route exact path="/contact" component={ Contact }/>
					<Route exact path="/aboutus" component={ AboutUs }/>
					<Route exact path="/producer" component={ Producer }/>
					<Route exact path="/distributor" component={ Distributor }/>
					<Route exact path="/buyer" component={ Buyer }/>
					<Route exact path="/login" component={ Login }/>
				</div>
			</Router>
		</div>
	);
}

render(<App/>, window.document.getElementById("app"));
render(<Footer/>, window.document.getElementById("foot"));
