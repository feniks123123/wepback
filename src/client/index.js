import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import App from './../frontend/App';
import { Router } from 'react-router-dom';
import ResizeContainer from './../frontend/resize';
import { configureStore } from '../frontend/store';
import Favicon from 'react-favicon';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
const store = configureStore({
	initialState: window.__PRELOADED_STATE__,
});


const renderRoot = (Comp) => {
    hydrate(
		<Provider store={store}>
			<ResizeContainer>
				<Favicon url={require('../favicon.ico')}/>
				<Router history={ history }>
                    <Comp/>
				</Router>
			</ResizeContainer>
		</Provider>,
		document.getElementById('app')
	)
};

renderRoot(App);

// if(module.hot) {
// 	module.hot.accept();
// }
