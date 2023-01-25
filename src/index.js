import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));

const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];

if(path) {
	history.replace(path);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
