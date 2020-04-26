import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Nf extends Component{
	goHome = e => {
		e.preventDefault();
		this.props.history.push("/");
	}
	render(){
		return(
			<div className="header" >
				<h1>Página no encontrada</h1>
				<Button onClick={this.goHome}>Volver</Button>
			</div>
		)
	}
}

export default Nf
