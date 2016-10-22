/**
 * Import Api
 */
import { facile } from 'facile';

let build = require('../../build');

import './config';
import './services';
import './filters';
import './entities';
import './routes';

facile.start('debug', () => {
	if (facile._config.env === 'development')
		build.development();
});

