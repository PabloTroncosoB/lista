import React, { Component }  from 'react';
import Paper from '@material-ui/core/Paper';

import Header from './comp/header.js';
import Elementos from './comp/elementos.js';
import Botonmas from './comp/botonmas.js';

import './styles/App.css';

class App extends Component {

  titulo = "Titulo como parámetro";
  state={
    lista:["Elemento 1","Otra cosa","8 pan","Leche","Sii","toda la comida"],
    listaChkd:[]
  }
  elementoHandler=(id,nombre,accion)=>{
    let newState={...this.state};
    if (accion==="edita") {
      newState.lista[id]=nombre;
    }else if (accion==="borra") {
      newState.lista.splice(id,1);
    }else if (accion==="check") {
      console.log(nombre+" checkeado");
    }
    this.setState(newState);
  }
  render(){
    const {params} = this.props.match;
    return (
      <div className="App">
        <Paper elevation={3}>
          <Header titulo={this.titulo} />
          <div>parámetro por ruta {params.id}</div>
          <Elementos lista={this.state.lista} listaChkd={this.state.listaChkd} elementoHandler={this.elementoHandler}/>
          <Botonmas />
        </Paper>
      </div>
    );
  }
}

export default App;
