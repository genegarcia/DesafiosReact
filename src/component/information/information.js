import React, { Component } from 'react';
import clock from './../../Assets/img/street-light-clock.svg';
import profile from './../../Assets/img/profile.svg';
import './information.css';
import moment from 'moment';

class Information extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const listItems = this.props.sucursales.map((sucursal) => {
      const cardClass = sucursal.online ? "cardbody card-online" : "cardbody card-offline";
      const footerClass = sucursal.online ? "footer-online" : "footer-offline";

      const sum = (acc, line) => {
        return acc + line.waiting;
      }

      const lines = Object.values(sucursal.lines);

      const waiting = <span>{lines.reduce(sum, 0)}</span>;

      const avg = (acc, line) => {
        return acc + line.elapsed;
      }

      const average = lines.reduce(avg, 0) / lines.length;

      const formattedAverage = moment.utc(average * 1000).format('HH:mm:ss');

      return (
        <div className="col-md-3">
          <div className="card mt-4">
            <div className={cardClass}>
              <p>{sucursal.name}</p>
            </div>
            <div className={footerClass}>
              <form className="form form-inline">
                <div className="form-group">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <label className='fa fa-user text-bottom' alt='profile'>&nbsp;{waiting}</label> 
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <label className='fa fa-clock-o text-bottom' alt='clock'>&nbsp;{formattedAverage}</label> 
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    })

    return <div className="row cards">{listItems}</div>;
  }
}

export default Information;