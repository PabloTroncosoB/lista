import React, { Component } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

class Elemento extends Component{
	lista=["Elemento 1","Otra cosa","8 pan","LEche","Sii","toda la comida"];
	render(){
		return(
		<div>
			{this.lista.map((elemento,key)=>(
				<div key={key}>
					<FormControlLabel control={<Checkbox name="check" key={key} color="primary"/>} label={elemento} />
					<EditOutlinedIcon />
					<DeleteOutlinedIcon />
				</div>
			))}

		</div>
		)
	}
}

export default Elemento
