import React from 'react';
import ReactDOM from 'react-dom';
import './assets/build/css/index.css';

import App from './scripts/App';
import Header from './scripts/header/Header';
import Footer from './scripts/footer/Footer';

import registerServiceWorker from './scripts/registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<App title="se" />, document.getElementById('app'));

registerServiceWorker();
