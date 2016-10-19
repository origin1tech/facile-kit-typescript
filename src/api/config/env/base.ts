import { facile, IConfig } from 'facile';
import { LoggerInstance, Logger, transports} from 'winston';

// Define Logger
let logger: LoggerInstance = new Logger({
			level: 'info',
			transports: [
				new (transports.Console)({
					// prettyPrint: true,
					handleExceptions: true,
					humanReadableUnhandledException: true,
					exitOnError: false
				})
			]
		});

let base: IConfig = {

	// False for manual initialization.
	auto: undefined,

	// Winston logger.
	logger: logger,

	// The host addresss to listen on.
	host: '127.0.0.1',

	// The server port to listen on.
	port: 8080,

	// Config log level.
	logLevel: 'info',

	// View configuration.
	views: {

		// Relative to "views" below no extension.
		layout: 'index',

		// The rendering engine for views.
		engine: 'ejs',

		// The extension used for views.
		extension: 'html',

		// The path or paths to your views.
		views: './dist/app'

	},

	// Routes generation and route
	// handler configuration.
	routes: {

		// Disable crud route generation.
		crud: false

	}

};

facile.registerConfig('base', base);

