import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createBrowserHistory} from 'history'
import {Router, Route, Switch} from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import AppRouteSwitch from "./routes";

var hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
        <AppRouteSwitch/>
    </Router>, document.getElementById('root'));
registerServiceWorker();
