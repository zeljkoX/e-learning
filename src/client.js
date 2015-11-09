require("babel/polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { history } from 'react-router/lib/History';
import routes from './routes';
import Iso from 'iso';
import alt from './alt';



ReactDOM.render(routes, document.getElementById('root'));
