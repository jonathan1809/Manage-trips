import React, { Component } from 'react';
// import logo from '../assets/logo.svg';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='App'>        
          <Routes />        
        <ToastContainer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
