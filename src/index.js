import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import About from "./component/About";
import Skils from "./component/Skils";
import Interests from "./component/Interests";
import Contact from "./component/Contact";
import Education from "./component/Education";

ReactDOM.render((
	<Router history = {browserHistory}>
		<Route path = "/" component ={App}>
		<Route path="about" component={About} />
		<Route path="education" component={Education} />
		<Route path="skils" component={Skils} />
		<Route path="interests" component={Interests} />
		<Route path="contact" component={Contact} />
		</Route>
		</Router>), document.getElementById('root'));
serviceWorker.unregister();
