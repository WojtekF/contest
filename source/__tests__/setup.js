var jsdom = require('jsdom').jsdom;

global.document = jsdom('<html><head></head><body><div id="component"></div></body></html>');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};