import React from "react";
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {Editor} from 'primereact/editor';
import {ScrollPanel} from 'primereact/scrollpanel';

class Interests extends React.Component{
	constructor(props) {
        super(props);
        this.state = {visible: false, intrests:"Tell us about your interests:", hist:""};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }
    onSave(){
    	 this.setState({intrests: this.state.hist, visible: false});
    }
	render(){
		const footer = (
            <div>
                <Button label="Save" icon="pi pi-check" onClick={this.onSave} />
                <Button label="Cancel" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );
	return(
		<div>
			<h3>Interests: </h3>
			<Dialog header="Interests: " visible={this.state.visible} style={{width: '50vw'}} footer={footer} onHide={this.onHide} maximizable>
             	<Editor style={{height:'150px'}} onTextChange={(e) => this.setState({hist: e.htmlValue})} />
             	      
            </Dialog>
			<div onClick={this.onClick} >		      
			<ScrollPanel style={{width: '100%', height: '200px'}}>
			<p  dangerouslySetInnerHTML={{ __html: this.state.intrests}}/>
    		</ScrollPanel>	
    		</div>	
			</div>
	);
	}
}

export default Interests;