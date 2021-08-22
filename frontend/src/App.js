import React from 'react';

import Header from './components/layout/Header';
import LeftSideBar from './components/layout/LeftSideBar';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <LeftSideBar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
