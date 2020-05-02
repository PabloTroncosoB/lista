import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Elemento from './elemento.js';

class Elementos extends Component{
	cambiaNombre=(id,nombre)=>{
		this.props.cambiaNombre(id,nombre);
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
				<Elemento key={id} nombre={elemento} id={id} cambiaNombre={this.cambiaNombre}/>
			))}
		</Grid >
		</Container>
		)
	}
}

export default Elementos
