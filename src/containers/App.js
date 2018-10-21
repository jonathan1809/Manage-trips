import React, { Component } from 'react';
// import logo from '../assets/logo.svg';
import './App.scss';
import Login from './Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Login />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
