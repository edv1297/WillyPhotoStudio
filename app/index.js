
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { Nav } from "./components/Nav";

import { Landing } from "./components/Landing";
import { Contact } from "./components/Contact";

export const App = (props) => {
	return(
		<div>
			<Nav/>
			<Router>
				<div>
					<Route path="/contact" component={Contact}/>
					<Route path="/" component={Landing}/>
				</div>
			</Router>
		</div>
	);
}

render(<App/>, window.document.getElementById("app"));
