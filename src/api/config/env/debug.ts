
// Import Dependencies.
import { facile } from 'facile';
import { IConfig } from 'facile/interfaces';
import { base } from './base';

// Development Environment
let debug: IConfig = {};

// Extend the environment with base config.
debug = facile.utils.extend({}, base, debug);

// Add Configuration
facile.addConfig('debug', debug);