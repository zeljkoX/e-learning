require("babel/polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { history } from 'react-router/lib/History';
import routes from './routes';
import alt from './alt';
import { createHashHistory } from 'history';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(routes, document.getElementById('root'));
