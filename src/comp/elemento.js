import React, { Component } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Grid from '@material-ui/core/Grid';

class Elemento extends Component{
	state={
		acciones:false
	}
	showme=e=>{
		this.setState({ acciones: !this.state.acciones });
	}

	render(){
		return(
			<Grid container key={this.props.id} alignItems="center" spacing={1}>
				<Grid item>
					<Checkbox color="primary"/>
				</Grid>
				<Grid item>
					<span onClick={this.showme}>{this.props.nombre}</span>
				</Grid>
					{ this.state.acciones ? (
						<Grid item>
							<EditOutlinedIcon />
							<DeleteOutlinedIcon />
						</Grid>
				):("")}
			</Grid>
		)
	}
}

export default Elemento
