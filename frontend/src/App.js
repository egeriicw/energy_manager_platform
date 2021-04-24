import React from 'react';

import NewBill from './components/NewBill/NewBill';
import Bills from './components/Bills/Bills';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>Energy Manager Platform</div>
      <div><NewBill /></div>
      <div><Bills /></div>
    </div>
  );
}

export default App;
