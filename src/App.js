import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Accordion heading="Company Info">
        <div className="company-info">
          <ul>
            <li>Goals</li>
            <li>Objective</li>
            <li>Future</li>
          </ul>
        </div>
      </Accordion>
      <Footer />
    </div>
  );
}

export default App;
