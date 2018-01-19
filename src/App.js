import React, { Component } from 'react';
import './App.css';
import Home from "./pages/Home"
import { Provider } from "react-redux";
import store  from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={ store.configureStore(null)}>
         <Home/>
      </Provider>
    );
  }
}


export default App;
