
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { Landing } from "./components/Landing";
import { Contact } from "./components/Contact";

export const App = (props) => {
	return(
		<div>
			<Router>
				<div>
					<Route exact path="/" component={ Landing }/>
					<Route path="/contact" component={ Contact }/>
				</div>
			</Router>
		</div>
	);
}

render(<App/>, window.document.getElementById("app"));
