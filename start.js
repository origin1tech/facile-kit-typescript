'use strict';

let build = require('./build');

// Get Argv
let argv = process.argv.splice(1);

// Grab first element the command.
let cmd = argv[0];

// Split the command pop last.
// should be webpack or webpack-dev-server.
cmd = cmd.split('/').pop();

// Check if is webpack-dev-server or --dev.
let isProd = !/dev-server$/.test(cmd) || argv.indexOf('--prod') !== -1 || argv.indexOf('-p') !== -1;

// Load dev or production build.
if (!isProd)
  build.development();
else
  build.production();