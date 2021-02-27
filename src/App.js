import React from 'react'
import { Body } from './components/Body'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Route } from 'react-router';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Body} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
