import React, { Component } from 'react';
import logo from './Assets/img/assets_logo.png';
import './App.css';

import Navegation from './component/navegation/navegation';
import Information from './component/information/information';
import axios from 'axios'


class App extends Component {

  constructor() {
    super();
    this.state = {
      sucursales: [],
      filteredSucursales: []
    }
    this.filterSucursales = this.filterSucursales.bind(this)
    
  }

  componentDidMount() {
    axios.get('https://boiling-mountain-49639.herokuapp.com/desafio-frontend')
    .then(response => {    
      this.setState({sucursales: response.data, filteredSucursales: response.data})
      console.log(response);
    })  
    
  }
  
  filterSucursales(name) {
    
    const filteredSucursales = this.state.sucursales.filter((sucursal) => {
      return sucursal.name.toLowerCase().includes(name.toLowerCase());
    })

    this.setState({filteredSucursales: filteredSucursales})
  }

  render() {
      return (
        <div className="App">
        <img src={logo} className='App-logo' alt='logo'/>  
          <Navegation filterSucursales={this.filterSucursales} titulo='primera'></Navegation>
          <Information sucursales={this.state.filteredSucursales}></Information> 
        </div>
      )
  }
}

export default App;
