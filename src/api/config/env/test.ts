import { facile, IConfig } from 'facile';

let test: IConfig = {
	logLevel: 'debug'
};

facile.registerConfig('test', 'base', test);