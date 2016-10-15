
// Import Dependencies.
import { facile, IConfig } from 'facile';

// Test Environment
export let test: IConfig = {};

// Add Configuration.
facile.registerConfig('test', 'base', test);