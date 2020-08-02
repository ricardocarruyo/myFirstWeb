import React, { Component } from 'react';
import './App.css'
import { CssBaseline } from '@material-ui/core';
import Home from './Components/index'


class App extends Component {
  render(){
      return (
        <div>
            <CssBaseline />
            <Home />
        </div>
      )
  }
}

export default App;
