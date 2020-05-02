import React, { Component }  from 'react';
import Paper from '@material-ui/core/Paper';

import Header from './comp/header.js';
import Elementos from './comp/elementos.js';
import Botonmas from './comp/botonmas.js';

import './styles/App.css';

class App extends Component {

  titulo = "Titulo como parámetro";
  state={
    lista:["Elemento 1","Otra cosa","8 pan","LEche","Sii","toda la comida"]
  }
  cambiaNombre=(id,nombre)=>{
    let newState={...this.state};
    newState.lista[id]=nombre;
    this.setState(newState);
  }
  render(){
    const {params} = this.props.match;
    return (
      <div className="App">
        <Paper elevation={3}>
          <Header titulo={this.titulo} />
          <div>parámetro por ruta {params.id}</div>
          <Elementos lista={this.state.lista} cambiaNombre={this.cambiaNombre}/>
          <Botonmas />
        </Paper>
      </div>
    );
  }
}

export default App;
