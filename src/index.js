import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers'
import { BrowserRouter as Router } from 'react-router-dom'
// Import routing components
import App from './App';
import './index.css';

// Middleware you want to use in production:
const enhancer = applyMiddleware(promise(),thunk);
let store = createStore(rootReducer,
	compose( enhancer,window.devToolsExtension? window.devToolsExtension():f=>f)
	);

ReactDOM.render(
  <Provider store={store}>
    <Router>
          <App/>
    </Router>
    </Provider>,
  document.getElementById('root')
);
