import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './components/App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  

const store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(logger)
    ));

    ReactDOM.render(
        <Provider store={store}> 
            <App />
        </Provider>,
        document.getElementById('root')
      );
      registerServiceWorker();
