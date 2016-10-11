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

	// When false manuual control of
	// each step of the initialization
	// is required. Set to true and
	// Facile will itialize automatically
	// calling before & after listener
	// events when defined.
	auto: false,

	// Configure the Logger.
	// @see https://github.com/winstonjs/winston
	logger: logger,

	host: '127.0.0.1',
	port: 8080,
	logLevel: 'info',

	// Express Views
	//
	// @see http://expressjs.com/en/api.html#app.engine
	//
	// These settings are passed to
	// consolidate.js
	// @see https://github.com/tj/consolidate.js/
	//
	views: {
		layout: 'index',
		engine: {
			name: 'html',
			renderer: 'hogan'
		},
		'view engine': 'html',
		views: './dist/app'
	}

};

