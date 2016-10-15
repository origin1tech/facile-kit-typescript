
// Import Dependencies.
import { facile, IConfig } from 'facile';

// Development Environment
export let development: IConfig = {
	logLevel: 'debug'
};

// Add Configuration.
facile.registerConfig('development', 'base', development);