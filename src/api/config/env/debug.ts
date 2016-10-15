
// Import Dependencies.
import { facile, IConfig } from 'facile';

// Development Environment
export let debug: IConfig = {
	auto: true,
	logLevel: 'debug'
};


// Add Configuration
facile.registerConfig('debug', 'base', debug);