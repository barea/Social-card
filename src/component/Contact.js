import React from "react";
import { SocialIcon } from 'react-social-icons';


class Contact extends React.Component{
	render(){
	return(
		<div>
			<h3>Contact: </h3>
			<br/>
			<div class="title">
			<SocialIcon url="http://linkedin.com/in/barea-aljaziri-021bbb16a" /><i> </i>
			<SocialIcon url="http://github.com/barea" /><i> </i>
			<SocialIcon url="http://www.facebook.com/profile.php?id=100010365074457"/><i> </i>
			</div>
		</div>
	);
	}
}

export default Contact;