import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push, connectRouter } from 'connected-react-router'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'

import App from './containers/app'
import reducers from './reducers/index'

const loggerMiddleware = createLogger();
const history = createHistory();

const store = createStore(
  connectRouter(history)(reducers), // new root reducer with router state
  { },
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(history), // for dispatching history actions
    ),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
