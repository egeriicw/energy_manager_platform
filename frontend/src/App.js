import React from 'react';

import Header from './components/UI/Header';
import LeftSideBar from './components/UI/LeftSideBar';
import Main from './components/UI/Main';
import Footer from './components/UI/Footer';



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
