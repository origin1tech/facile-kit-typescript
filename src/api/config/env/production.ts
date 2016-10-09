
// Import Dependencies.
import { facile } from 'facile';
import { IConfig } from 'facile/interfaces';
import { base } from './base';

// Production Environment
let production: IConfig = {
	env: 'production',
	logLevel: 'error'
};

// Extend the environment with base config.
production = facile.utils.extend({}, base, production);

// Add Configuration.
facile.addConfig('production', production);