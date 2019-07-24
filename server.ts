import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';



// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');


// ssr DOM-------------
// import { readFileSync } from 'fs';
// const domino = require('domino');
// const fs = require('fs');
// const path = require('path');
// // index from browser build!
// const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
// // for mock global window by domino
// const win = domino.createWindow(template);
// // mock
// global['window'] = win;
// // not implemented property and functions
// Object.defineProperty(win.document.body.style, 'transform', {
//   value: () => {
//     return {
//       enumerable: true,
//       configurable: true,
//     };
//   },
// });
// // mock documnet
// global['document'] = win.document;
// // othres mock
// global['CSS'] = null;
// // global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
// global['Prism'] = null;
// --------------

global['window'] = function() {};
global['$'] = (function() {
    function JQuery() {}
    JQuery.prototype.animate = function() {};
    return function() {
        return new JQuery();
    };
})();
global['$']['cookie'] = function() {};
// global['$']['trim'] = function() {};
// // global['document']['createElement'] = function() {};
global['layer'] = function() {};
global['layer']['open'] = function() {};
global['layer']['msg'] = function() {};
global['layer']['alert'] = function() {};
global['layer']['confirm'] = function() {};
global['layer']['load'] = function() {};
global['layer']['tips'] = function() {};
global['layer']['close'] = function() {};
global['layer']['closeAll'] = function() {};

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
  // console.log(template);
});
