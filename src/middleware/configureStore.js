
import { applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './logger';
import rootReducer from '../redux/reducers';

export default function configureStore(preloadedState) {
    console.log(module);
    console.log(process);
    const middlewares = [loggerMiddleware, thunkMiddleware];
    // const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    return store;
}