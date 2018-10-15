import React, { Component } from 'react';
import './App.css';
import Calculator from './calculator';

class App extends Component {
    render() {
        return (
            <div className="container" id="wrapper">
                <div className="wrapper" id="app">
                  <Calculator/>
                </div>
            </div>
        );
    }
}

export default App;