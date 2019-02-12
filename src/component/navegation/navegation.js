import React, { Component } from 'react';
import './navegation.css';
import search from './../../Assets/img/search.svg';

class Navegation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
      this.handleKeyUp = this.keyUpHandler.bind(this);
    }

    keyUpHandler(e) {
      this.props.filterSucursales(e.target.value)
    }

    render() {
        return (
          <div className='row'>
            <div className='col-md-12'>
              <form className="navbar navbar-light custom-navbar">
              <div className="form-group">
                <div className='input-navbar'><input type="text" className="form-control" placeholder="Buscar sucursal " onKeyUp={this.handleKeyUp} ></input></div>
              </div>
              </form>
            </div>
          </div>
        )
    }
}

export default Navegation;