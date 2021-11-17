import React from 'react';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas/rootSaga';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

const sagaMiddleware = createSagaMiddleware();
// Mount it on the Store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
);

// Then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) { module.hot.accept(App); }