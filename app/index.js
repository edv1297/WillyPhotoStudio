
import React from 'react';
import { render } from 'react-dom';

import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import {Bio} from "./components/Bio";

render(<Nav/>, window.document.getElementById("nav"));
render(<Main/>, window.document.getElementById("main"));
