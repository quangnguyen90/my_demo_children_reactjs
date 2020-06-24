import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Accordion heading="Product Menu">
        <div className="product-menu">
          <ul>
            <li>List</li>
            <li>Add</li>
            <li>Backup</li>
          </ul>
        </div>
      </Accordion>
      <Accordion heading="Customer Menu">
        <div className="customer-menu">
          <ul>
            <li>List</li>
            <li>Add</li>
            <li>Backup</li>
          </ul>
        </div>
      </Accordion>
      <Accordion heading="Store Menu">
        <div className="store-menu">
          <ul>
            <li>List</li>
            <li>Add</li>
            <li>Backup</li>
          </ul>
        </div>
      </Accordion>
      <Footer />
    </div>
  );
}

export default App;
