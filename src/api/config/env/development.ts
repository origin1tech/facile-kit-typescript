import { facile, IConfig } from 'facile';

let development: IConfig = {
	logLevel: 'info'
};

facile.registerConfig('development', 'base', development);