import React from 'react';
import './App.css';
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';
import Content from '../Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
