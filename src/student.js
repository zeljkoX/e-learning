require("babel/polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


ReactDOM.render('<div>dsfsdf</div>', document.getElementById('root'));
