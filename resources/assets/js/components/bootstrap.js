
/*
 |--------------------------------------------------------------------------
 | Laravel Spark Components
 |--------------------------------------------------------------------------
 |
 | Here we will load the Spark components which makes up the core client
 | application. This is also a convenient spot for you to load all of
 | your components that you write while building your applications.
 */

require('./../spark-components/bootstrap');

window.Fabric = require('fabric');
window.Guest = require('./guest');
window.Table = require('./table');
window.Floorplan = require('./floorplan');

require('./home');

