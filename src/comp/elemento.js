import React, { Component } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core';

class Elemento extends Component{
	state={
		acciones:false,
		edit:false
	}
	showme=e=>{
		this.setState({ acciones: true });
		setTimeout(this.ocultaMe,2000);
	}
	editMe=e=>{
		this.setState({edit: true});
	}
	deleteMe=e=>{
		this.props.elementoHandler(this.props.id,this.props.nombre,"borra");
	}
	checkMe=e=>{
		this.props.elementoHandler(this.props.id,this.props.nombre,"check");
	}
	ocultaMe=e=>{
		this.setState({acciones:false});
	}
	guardaTextoElemento=e=>{
		this.props.elementoHandler(this.props.id,this.textoElemento.value,"edita");
		this.setState({edit: false});
		e.preventDefault();
	}
	heal=e=>{
		this.setState({edit: false});
	}

	render(){
		return(
			<Grid container key={this.props.id} alignItems="center" spacing={1}>
				<Grid item>
					<Checkbox color="primary" onClick={ this.checkMe } checked={this.props.elChecker} />
				</Grid>
				<Grid item>
					<span onClick={this.showme}>
						{ this.state.edit ?
							(
								<form autoComplete="off"  onSubmit={this.guardaTextoElemento}>
									<TextField
									id="texto"
									label="editar"
									type="text"
									inputRef={e => (this.textoElemento =e)}
									defaultValue = {this.props.nombre}
									onBlur={this.heal}
									/>
								</form>
						):
						(this.props.nombre)}
						</span>
				</Grid>
					{ this.state.acciones ? (
						<Grid item>
							<EditOutlinedIcon onClick={ this.editMe } />
							<DeleteOutlinedIcon onClick={ this.deleteMe }/>
						</Grid>
				):("")}
			</Grid>
		)
	}
}

export default Elemento
