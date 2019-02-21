import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { root } from './../store/app/reducer';

export const configureStore = ({ initialState, middleware = [] } = {}) => {
    const devtools =
        typeof window !== 'undefined' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

    const composeEnhancers = devtools || compose;

    const store = createStore(
	    root,
        initialState,
        composeEnhancers(applyMiddleware(...[thunk].concat(...middleware)))
    );

    if (module.hot) {
        module.hot.accept('../store', () => {
            const nextRootReducer = require('../store/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;
