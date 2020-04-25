import React, { Component }  from 'react';
import Paper from '@material-ui/core/Paper';

import Header from './comp/header.js';
import Elemento from './comp/elemento.js';
import Botonmas from './comp/botonmas.js';

import './styles/App.css';

class App extends Component {
  titulo = "Titulo como parámetroaaa";

  render(){
    return (
      <div className="App">
        <Paper elevation={3}>
          <Header titulo={this.titulo} />
          <Elemento />
          <hr id="divisor"/>
          <Botonmas />
        </Paper>
      </div>
    );
  }
}

export default App;
