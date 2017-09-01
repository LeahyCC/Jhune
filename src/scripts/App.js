import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../scss/App.css';

import Footer from './footer/Footer';

class App extends Component {
    render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Jhune</h2>
            </div>
            <p className="App-intro">
                Web Based Inventoy Manager and Checkout System
            </p>
        </div>
    );
    }
}

export default App;
