import React, { Component }  from 'react';
import Paper from '@material-ui/core/Paper';

import Header from './comp/header.js';
import Elementos from './comp/elementos.js';
import Botonmas from './comp/botonmas.js';

import './styles/App.css';

class App extends Component {

  titulo = "Mi lista";
  state={
    lista:[],
    listaChkd:[]
  }
  elementoHandler=(id,nombre,accion,lista)=>{
    let newState={...this.state};
    if (accion==="edita") {
      newState.lista[id]=nombre;
    }else if (accion==="borra") {
      newState.lista.splice(id,1);
    }else if (accion==="check") {
      if (lista==="lista1") {
        newState.lista.splice(id,1);
        newState.listaChkd.push(nombre);
      }else if (lista==="lista2") {
        newState.listaChkd.splice(id,1);
        newState.lista.push(nombre);
      }
    }
    this.setState(newState);
  }
  agregar=(texto)=>{
    let newState={...this.state};
    newState.lista.push(texto);
    this.setState(newState);
  }
  render(){
    //const {params} = this.props.match;<div>parámetro por ruta {params.id}</div>
    return (
      <div className="App">
        <Paper elevation={3}>
          <Header titulo={this.titulo} />
          <Elementos lista={this.state.lista} listaChkd={this.state.listaChkd} elementoHandler={this.elementoHandler}/>
          <Botonmas donAdd={this.agregar}/>
        </Paper>
      </div>
    );
  }
}

export default App;
