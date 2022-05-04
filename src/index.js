import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import reducers from './reducers'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer : reducers,
  middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk) 
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
