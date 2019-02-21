import {injectGlobal} from 'styled-components'

injectGlobal`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	html {
	line-height: 1.15; /* 1 */
	-webkit-text-size-adjust: 100%; /* 2 */
	}
	body {
	margin: 0;
	}
	h1 {
	font-size: 2em;
	margin: 0.67em 0;
	}
	hr {
	box-sizing: content-box; /* 1 */
	height: 0; /* 1 */
	overflow: visible; /* 2 */
	}

	pre {
	font-family: monospace, monospace; /* 1 */
	font-size: 1em; /* 2 */
	}

	a {
	background-color: transparent;
	}

	abbr[title] {
	border-bottom: none; /* 1 */
	text-decoration: underline; /* 2 */
	text-decoration: underline dotted; /* 2 */
	}

	b,
	strong {
	font-weight: bolder;
	}

	code,
	kbd,
	samp {
	font-family: monospace, monospace; /* 1 */
	font-size: 1em; /* 2 */
	}

	small {
	font-size: 80%;
	}

	sub,
	sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
	}

	sub {
	bottom: -0.25em;
	}

	sup {
	top: -0.5em;
	}

	img {
	border-style: none;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
	}

	button,
	input { /* 1 */
	overflow: visible;
	}

	button,
	select { /* 1 */
	text-transform: none;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
	-webkit-appearance: button;
	}

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
	}

	button:-moz-focusring,
	[type="button"]:-moz-focusring,
	[type="reset"]:-moz-focusring,
	[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText;
	}

	fieldset {
	padding: 0.35em 0.75em 0.625em;
	}

	legend {
	box-sizing: border-box; /* 1 */
	color: inherit; /* 2 */
	display: table; /* 1 */
	max-width: 100%; /* 1 */
	padding: 0; /* 3 */
	white-space: normal; /* 1 */
	}

	progress {
	vertical-align: baseline;
	}

	textarea {
	overflow: auto;
	}

	[type="checkbox"],
	[type="radio"] {
	box-sizing: border-box; /* 1 */
	padding: 0; /* 2 */
	}

	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
	height: auto;
	}

	[type="search"] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
	}

	[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
	}

	::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
	}

	details {
	display: block;
	}

	summary {
	display: list-item;
	}

	template {
	display: none;
	}

	[hidden] {
	display: none;
	}

   
	html {
		line-height: normal;
		height: 100%;
	}

	body {
		text-rendering: optimizeLegibility;
        -webkit-font-feature-settings: 'kern';
        -ms-font-feature-settings: 'kern' 1;
        font-feature-settings: 'kern';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Sector", Arial, Arial, Helvetica, sans-serif;
        height: 100%;
	}
	
	#app {
		height: 100%;
	}

    body, html, ul, li {
        padding: 0;
        margin: 0;
    }

	body {
		background: #030017;
		overflow-x: hidden;
	}

    input {
        font-family: "Sector", Arial, Arial, Helvetica, sans-serif;
		padding: 0;
    }
    
    button {
    	font-family: "Sector", Arial, Arial, Helvetica, sans-serif
    }

    * {
        box-sizing: border-box;
    }

	table {
        border-collapse: collapse;
        border-spacing: 0;
    }

	input:-webkit-autofill,
	input:-webkit-autofill:hover, 
	input:-webkit-autofill:focus
	input:-webkit-autofill {
		background-color: #030017 !important;
	}
	
	.slick-slider{
        position: relative;
        display: block;
        box-sizing: border-box;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
            touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
    }

    .slick-list
    {
        position: relative;
    
        display: block;
        overflow: hidden;
    
        margin: 0;
        padding: 0;
    }
    .slick-list:focus
    {
        outline: none;
    }
    .slick-list.dragging
    {
        cursor: pointer;
        cursor: hand;
    }
    
    .slick-slider .slick-track,
    .slick-slider .slick-list
    {
      
    transform: translate3d(0, 0, 0);
    }
    
    .slick-track
    {
        position: relative;
        top: 0;
        left: 0;
    
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .slick-track:before,
    .slick-track:after
    {
        display: table;
    
        content: '';
    }
    .slick-track:after
    {
        clear: both;
    }
    .slick-loading .slick-track
    {
        visibility: hidden;
    }
    
    .slick-slide
    {
        display: none;
        float: left;
    
        height: 100%;
        min-height: 1px;
    }
    [dir='rtl'] .slick-slide
    {
        float: right;
    }
    .slick-slide img
    {
        display: block;
    }
    .slick-slide.slick-loading img
    {
        display: none;
    }
    .slick-slide.dragging img
    {
        pointer-events: none;
    }
    .slick-initialized .slick-slide
    {
        display: block;
    }
    .slick-loading .slick-slide
    {
        visibility: hidden;
    }
    .slick-vertical .slick-slide
    {
        display: block;
    
        height: auto;
    
        border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
        display: none;
    }
 
    /* Arrows */
    .slick-prev,
    .slick-next
    {
        font-size: 0;
        line-height: 0;
    
        position: absolute;
        top: 50%;
    
        display: block;
    
        width: 20px;
        height: 20px;
        padding: 0;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
    
        cursor: pointer;
    
        color: transparent;
        border: none;
        outline: none;
        background: transparent;
    }
    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus
    {
        color: transparent;
        outline: none;
        background: transparent;
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before
    {
        opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before
    {
        opacity: .25;
    }
    
    .slick-prev:before,
    .slick-next:before
    {
        font-size: 20px;
        line-height: 1;
    
        opacity: .75;
        color: white;
    
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    .slick-prev
    {
        left: -25px;
    }
    [dir='rtl'] .slick-prev
    {
        right: -25px;
        left: auto;
    }
    .slick-prev:before
    {
        content: '←';
    }
    [dir='rtl'] .slick-prev:before
    {
        content: '→';
    }
    
    .slick-next
    {
        right: -25px;
    }
    [dir='rtl'] .slick-next
    {
        right: auto;
        left: -25px;
    }
    .slick-next:before
    {
        content: '→';
    }
    [dir='rtl'] .slick-next:before
    {
        content: '←';
    }
    
    /* Dots */
    .slick-dotted.slick-slider
    {
        margin-bottom: 30px;
    }
    
    .slick-dots
    {
        position: absolute;
        bottom: -25px;
    
        display: block;
    
        width: 100%;
        padding: 0;
        margin: 0;
    
        list-style: none;
    
        text-align: center;
    }
    .slick-dots li
    {
        position: relative;
    
        display: inline-block;
    
        width: 20px;
        height: 20px;
        margin: 0 5px;
        padding: 0;
    
        cursor: pointer;
    }
    .slick-dots li button
    {
        font-size: 0;
        line-height: 0;
    
        display: block;
    
        width: 20px;
        height: 20px;
        padding: 5px;
    
        cursor: pointer;
    
        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
    }
    .slick-dots li button:hover,
    .slick-dots li button:focus
    {
        outline: none;
    }
    .slick-dots li button:hover:before,
    .slick-dots li button:focus:before
    {
        opacity: 1;
    }
    .slick-dots li button:before
    {
        font-size: 6px;
        line-height: 20px;
    
        position: absolute;
        top: 0;
        left: 0;
    
        width: 20px;
        height: 20px;
    
        content: '•';
        text-align: center;
    
        opacity: .25;
        color: black;
    
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .slick-dots li.slick-active button:before
    {
        opacity: .75;
        color: black;
    }
    .slick-dots li.slick-active > div {
        background: #f5921e;
        &:before {
            background: #f5921e;
        }
    }
    .recharts-curve.recharts-area-curve {
		transition: stroke-width 0.4s ease;
	}
`;
