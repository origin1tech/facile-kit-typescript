import { facile, IConfig } from 'facile';

let production: IConfig = {
	env: 'production',
	logLevel: 'error'
};

facile.registerConfig('production', 'base', production);