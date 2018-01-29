import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './fonts/fonts.css';
import './index.css';
import './UI/react_dates_overrides.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
