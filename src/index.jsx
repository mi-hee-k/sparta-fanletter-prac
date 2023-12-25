import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from 'GlobalStyle';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getStore from 'redux/config/configStore';

const store = getStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
    <ToastContainer />
  </Provider>
);
