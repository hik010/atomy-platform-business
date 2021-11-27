import React from 'react';
import { HashRouter } from 'react-router-dom';
import NavBar from './Navbar';
import RouteComponent from '../Routes';


export class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {/* <h1>Atomy Platform Business</h1>'
         */}
        <NavBar />
        <RouteComponent />
      </div>
    );
  }
}
