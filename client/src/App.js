import React, { Component } from 'react';
import AddProducts from './components/AddProducts/AddProducts';
import Layout from './components/Layout/Layout';
import {Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
    
        </header>
        <Route path="/" exact component={Layout}/>
        <Route path="/add-product" component={AddProducts}/>
      </div>
    );
  }
}

export default App;
