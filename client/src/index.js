import React from 'react';
import { render } from 'react-dom';
import App from './js/App';
import './css/app.scss';
import * as serviceWorker from './js/serviceWorker';
render(<App />, document.getElementById('root'));
serviceWorker.register();