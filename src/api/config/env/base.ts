/**
 * Base Environment
 *
 * All other environments are
 * extended from this env.
 */
import { facile } from 'facile';
import { IConfig } from 'facile/interfaces';
import { LoggerInstance, Logger, transports} from 'winston';

// Define Logger
let logger: LoggerInstance = new Logger({
			level: 'info',
			transports: [
				new (transports.Console)({
					prettyPrint: true,
					handleExceptions: true,
					humanReadableUnhandledException: true,
					exitOnError: false
				})
			]
		});

// Export Base so it can be used
// to extend other configs.
export let base: IConfig = {

	// Configure the Logger.
	// @see https://github.com/winstonjs/winston
	logger: logger,

	host: '127.0.0.1',
	port: 3000,

	// Express Views
	// @see https://expressjs.com/en/guide/using-template-engines.html
	//
	// These settings are passed to
	// consolidate.js
	// @see https://github.com/tj/consolidate.js/
	//
	views: {
		engine: 'hogan',
		'view engine': 'html',
		views: '/web/views'
	},

	database: ''

};

