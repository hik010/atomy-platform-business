import { Routes, Route } from 'react-router-dom';
import React from 'react';
import What from './components/What';
import Why from './components/Why';
import How from './components/How';

const RouteComponent = () => {
  return (
    <div className='content-container'>
      <Routes>
        <Route path="/" element={<What />} />
        <Route path="/why" element={<Why />} />
        <Route path="/how" element={<How />} />
      </Routes>
    </div>
  );
};

export default RouteComponent;
