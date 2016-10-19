import { facile, IConfig } from 'facile';

let debug: IConfig = {
	logLevel: 'debug'
};

facile.registerConfig('debug', 'base', debug);