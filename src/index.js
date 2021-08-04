import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise'
import reduxThunk from 'redux-thunk'
import App from './App'
import reducers from './reducers'

const createStoreWidthMiddleware = applyMiddleware(
    promiseMiddleware,
    reduxThunk
  )(createStore);

ReactDOM.render(
    <React.StrictMode>
        <Provider
        store = {createStoreWidthMiddleware(
            reducers,
            // 개발자 도구를 위한 설정
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
        <App />
        </Provider>
    </React.StrictMode>, document.getElementById('root')
)