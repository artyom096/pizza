import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import App from './App'
import './scss/app.scss'
import { rootReducer } from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { Cart } from './components/Cart'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store} >
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
