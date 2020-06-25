import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import TopMenu from './components/TopMenu/TopMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <TopMenu />
      <Footer />
    </div>
  );
}

export default App;
