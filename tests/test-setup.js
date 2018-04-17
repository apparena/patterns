import 'raf/polyfill';
const jsdom = require('jsdom').jsdom;

global.document = jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
global.HTMLElement = window.HTMLElement;