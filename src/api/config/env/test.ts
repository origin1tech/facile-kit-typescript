
// Import Dependencies.
import { facile } from 'facile';
import { IConfig } from 'facile/interfaces';
import { base } from './base';

// Test Environment
let test: IConfig = {};

// Extend the environment with base config.
test = facile.utils.extend({}, base, test);

// Add Configuration.
facile.addConfig('test', test);