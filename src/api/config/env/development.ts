
// Import Dependencies.
import { facile } from 'facile';
import { IConfig } from 'facile/interfaces';
import { base } from './base';

// Development Environment
let development: IConfig = {};

// Extend the environment with base config.
development = facile.utils.extend({}, base, development);

// Add Configuration.
facile.addConfig('development', development);