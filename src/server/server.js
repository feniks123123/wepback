import React from 'react';
import express from 'express';
// import bodyParser from 'body-parser';
import { renderToString } from 'react-dom/server';
import App from './../frontend/App';
import manifestHelpers from 'express-manifest-helpers';
import Html from './Html';
import Favicon from 'react-favicon';
import { configureStore } from './../frontend/store'
import ResizeContainer from './../frontend/resize'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Provider } from 'react-redux';
import { StaticRouter  } from 'react-router';

const { isProd } = require('./env');
const uuid4 = require('uuid/v4');

const port = isProd ? 8500 : 3001;
const urlStatic = '/landing/static';
const app = express();

app.use('/video', express.static('video'));
app.use('/fonts', express.static('fonts'));
app.use(urlStatic, express.static('dist'));

app.use(manifestHelpers({ manifestPath: `./dist/manifest.json` }));

app.use((req, res, next) => {
	req.store = configureStore();
	return next();
});

app.get('/*', (req, res) => {
	const sheet = new ServerStyleSheet();

	const body = renderToString(
		<Provider store={req.store}>
			<ResizeContainer>
				<Favicon url={require('./../favicon.ico')}/>
				<StaticRouter location={req.url} context={{}}>
					<StyleSheetManager sheet={sheet.instance}>
						<App/>
					</StyleSheetManager>
				</StaticRouter>
			</ResizeContainer>
		</Provider>
	);

	const styles = sheet.getStyleTags();
	const title = 'PG';

	const bundle = res.locals.getJavascripts()[1];
	const main = res.locals.getJavascripts()[0];
	const vendor = res.locals.getJavascripts()[2];
	const scripts = [bundle, main, vendor];

	const state = JSON.stringify(req.store.getState());

	const nonce = uuid4();

	// res.set('X-Content-Security-Policy', `script-src 'self' 'nonce-${nonce}'  https://www.googletagmanager.com https://www.google-analytics.com; img-src 'self' data:  https://www.google-analytics.com`);

	res.send(
        '<!DOCTYPE html>' +
		renderToString(
			<Html styles={styles} title={title} scripts={scripts} state={ state } nonce={ nonce }>
				{ body }
			</Html>
	    )
    );
});

app.listen(port);
console.log(`Serving at http://localhost:${port}`);
