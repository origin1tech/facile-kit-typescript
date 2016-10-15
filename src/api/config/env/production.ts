
// Import Dependencies.
import { facile, IConfig } from 'facile';

// Production Environment
export let production: IConfig = {
	env: 'production',
	logLevel: 'error'
};


// Add Configuration.
facile.registerConfig('production', 'base', production);