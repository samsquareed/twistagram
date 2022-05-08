import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import reducers from './reducers'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';


// const store = configureStore({
//   reducer : reducers,
//   middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk) 
// })

const middleware = [thunk]
const store = configureStore({
  reducer : reducers,
  middleware 
})

// const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
