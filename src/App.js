import React from 'react';
import Navbar from './component/Navbar.js';
import {Card} from 'primereact/card';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';


class App extends React.Component{
  render(){
  	return(
    	<div>
	      <Card style={{width: '600px'}} className="ui-card-shadow" >
		      <div class = "row">
			      <div class="side">
			       	 <Navbar /> 
			      </div>

			      <div class="main">
			        {this.props.children}
			      </div>
		      </ div>
	      </ Card>
      </div>
      
    );
  }
}

export default App;
