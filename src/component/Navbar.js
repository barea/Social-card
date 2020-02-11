import React from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import {Link} from 'react-router';
import prof from '../prof.jpg';
 
class Navbar extends React.Component{

	constructor(){
		super();

		this.state={visible: true}
	}
	render(){
		return(
			<div >			
			<img  src={prof}  class="profile" />
			<div class="title"><strong>Barea Aljaziri</strong></div>			      
				<ul>
					<li><strong><Link to="about">About</Link></strong></li>
					<li><strong><Link to="education">Education</Link></strong></li>
					<li><strong><Link to="skils">Skils</Link></strong></li>
					<li><strong><Link to="Interests">Interests</Link></strong></li>
					<li><strong><Link to="Contact">Contact</Link></strong></li>
				</ul>
			</div>
			);
	}
}


export default Navbar;
