import React from 'react';
import ReactDOM from 'react-dom/client';

//components
import App from './App';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

//css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <App /> </Provider>);