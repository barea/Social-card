import React from "react";
import { SocialIcon } from 'react-social-icons';


class Contact extends React.Component{
	 constructor(props) {
        super(props);
} 
	render(){
	return(
		<div>
			<div class="title">
			<SocialIcon url={this.props.url} /><i> </i>
			
			</div>
		</div>
	);
	}
}

class Con extends React.Component{
	constructor(){
		super();
		this.state = { url: "", url2: "", url3:""}
	}

	render(){
		return(
		<div class="title">
			<h3>Contact: </h3>
			<div class ="row">
			<Contact url={this.state.url} />
			<div>
			<br/>
			<input type="text" onChange={(e) => this.setState({url: e.target.value})} /> 
			</div>
			</div>

			<br/>

			<div class ="row">
			<Contact url={this.state.url2} />
			<div>
			<br/>
			<input type="text" onChange={(e) => this.setState({url2: e.target.value})} /> 
			</div>
			</div>

			<br/>

			<div class ="row">
			<Contact url={this.state.url3} />
			<div>
			<br/>
			<input type="text" onChange={(e) => this.setState({url3: e.target.value})} /> 
			</div>
			</div>
			

		</div>

		);
	}
}

export default Con;