import React, { Component }  from 'react';
import Paper from '@material-ui/core/Paper';

import Header from './comp/header.js';
import Elemento from './comp/elemento.js';
import Botonmas from './comp/botonmas.js';

import './styles/App.css';

class App extends Component {

  titulo = "Titulo como parámetro";

  render(){
    const {params} = this.props.match;
    return (
      <div className="App">
        <Paper elevation={3}>
          <Header titulo={this.titulo} />
          <div>parámetro por ruta {params.id}</div>
          <Elemento />
          <hr id="divisor"/>
          <Botonmas />
        </Paper>
      </div>
    );
  }
}

export default App;
