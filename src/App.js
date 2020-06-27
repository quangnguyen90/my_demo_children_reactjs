import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import TopMenu from './components/TopMenu/TopMenu';
import CartProvider from './components/ProductContext/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <CartProvider>
        <TopMenu />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
