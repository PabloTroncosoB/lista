import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Elemento from './elemento.js';

class Elementos extends Component{
	elementoHandlerLista1=(id,nombre,accion)=>{
		this.props.elementoHandler(id,nombre,accion,"lista1");
	}
	elementoHandlerLista2=(id,nombre,accion)=>{
		this.props.elementoHandler(id,nombre,accion,"lista2");
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
				<Elemento key={id} nombre={elemento} id={id} elementoHandler={this.elementoHandlerLista1} elChecker={false} />
			))}
			{
				this.props.listaChkd.length === 0 ?(
					""
				):(
					<Grid item><hr /></Grid>
				)
			}

			{this.props.listaChkd.map((elemento,id)=>(
				<Elemento key={id} nombre={elemento} id={id} elementoHandler={this.elementoHandlerLista2} elChecker={true} />
			))}
		</Grid >
		</Container>
		)
	}
}

export default Elementos
