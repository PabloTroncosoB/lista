import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Elemento from './elemento.js';

class Elementos extends Component{
	elementoHandler=(id,nombre,accion)=>{
		this.props.elementoHandler(id,nombre,accion);
	}

	render(){
		return(
		<Container maxWidth="xs">
		<Grid
	  container
	  direction="column"
	  justify="center"
	  alignItems="center"
		>
			{this.props.lista.map((elemento,id)=>(
				<Elemento key={id} nombre={elemento} id={id} elementoHandler={this.elementoHandler} elChecker={false} />
			))}
			{this.props.listaChkd.map((elemento,id)=>(
				<Elemento key={id} nombre={elemento} id={id} elementoHandler={this.elementoHandler} elChecker={true} />
			))}
		</Grid >
		</Container>
		)
	}
}

export default Elementos
