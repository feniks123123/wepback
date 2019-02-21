import React from 'react';

const Html = ({ children, styles, title, scripts = [], state = '{}', nonce }) => {
    return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Paradise game</title>
				<style dangerouslySetInnerHTML={{ __html: styles }} />
				<script
					nonce={nonce}
					dangerouslySetInnerHTML={{
						__html: `window.__PRELOADED_STATE__ = ${state}`,
					}}
				/>
			</head>
			<body>
				<div id="app" dangerouslySetInnerHTML={{ __html: children }}/>
				{scripts.map((src, key) => {
					return <script key={key} src={src} type="application/javascript"/>;
				})}
			</body>
		</html>
	)
};

export default Html;
