import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import SignUp from './userForms/signUpForm.js'

ReactDOM.render(<SignUp />, document.getElementById('root'));
registerServiceWorker();
