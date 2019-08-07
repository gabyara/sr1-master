import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import HomeUser from './HomeUser';
import Principal from './Principal';
import Modal from './Modal';
import Planes from './Planes';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
ReactDOM.render(<Planes/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
