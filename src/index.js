import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import koalas from './Redux/koalaReducer';
import koalaSaga from './Sagas/koalaSaga';

const sagaMiddleware = createSagaMiddleware();

// import rootReducer from './redux/reducers'; // imports ./redux/reducers/index.js
// import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js


const middlewareList = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] :
    [sagaMiddleware];

const store = createStore(
    // tells the saga middleware to use the rootReducer
    // rootSaga contains all of our other reducers
    koalas,
    // adds all middleware to our project including saga and logger
    applyMiddleware(...middlewareList),
);

sagaMiddleware.run(koalaSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-root'),
);


