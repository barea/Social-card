import React from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import {Link} from 'react-router';
import prof from '../prof.jpg';
import {Dialog} from 'primereact/dialog';
import {Growl} from 'primereact/growl';
import {FileUpload} from 'primereact/fileupload';;
 
class Navbar extends React.Component{

	  constructor(props) {
        super(props);
        this.state = {visible: false, name:"Name....", hist:"", file: null};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onSave = this.onSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }
    onSave(){
    	 this.setState({name: this.state.hist, visible: false});
    }
   
    handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

	render(){
		 const footer = (
            <div>
                <Button label="Save" icon="pi pi-check" onClick={this.onSave} />
                <Button label="cancel" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );
		return(
			<div>	
				
        		<label class="custom-file-upload">
        		<img src={this.state.file} class="profile"/>
        		<input type="file" onChange={this.handleChange}/>
        		</label>
			
			 <Dialog header="Enter your name: " visible={this.state.visible} style={{width: '50vw'}} footer={footer} onHide={this.onHide} maximizable>
             	<input type="text" onChange={(e) => this.setState({hist: e.target.value})}  maxLength="15" />
             </Dialog>
			<div class="title" onClick={this.onClick}><strong>{this.state.name} </strong>
			</div>			      
				<ul>
					<li><strong><Link to="about">About</Link></strong></li>
					<li><strong><Link to="education">Education</Link></strong></li>
					<li><strong><Link to="skils">Skils</Link></strong></li>
					<li><strong><Link to="experience">Experience</Link></strong></li>
					<li><strong><Link to="Interests">Interests</Link></strong></li>
					<li><strong><Link to="Contact">Contact</Link></strong></li>
				</ul>
			</div>
			);
	}
}


export default Navbar;
