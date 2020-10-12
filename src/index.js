import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {robots} from './Robots';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App />
				,document.getElementById('root'));

serviceWorker.unregister();
