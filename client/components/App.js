import React from 'react';
import { HashRouter } from 'react-router-dom';
import NavBar from './Navbar';
import RouteComponent from '../Routes';


export class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {/* <h1>Atomy Platform Business</h1>'
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gQCVSVRz_uU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <NavBar />
        <RouteComponent />
      </div>
    );
  }
}
