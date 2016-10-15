/**
 * Export All Middleware.
 *
 * @example express-session
 * The following is an example
 * of creating session middleware.
 * @see https://www.npmjs.com/package/express-session
 *
 * 1) Create a file called session.ts.
 *
 * 2) Import facile.
 * 		import { facile } from 'facile'
 * 		import { IConfig } from 'facile/interfaces';
 * 		import * as session from 'express-session';
 *
 * 3) Define your session configuration
 *	  let sessionOptions: session.SessionOptions = {
                    key: 'facile.sid',
                    secret: '123456789',
                    maxAge: 1800000,
                    resave: false,
                    saveUninitialized: true,
                    cookie: { secure: true }
                };
 *
 * 4) Create the session middleware.
 *    let session = session(sessionOptions);
 *
 * 5) Add the middleware via Facile's helper.
 * 		facile.addMiddleware('session', session);
 *
 */
"use strict";
require('./error-handler');
require('./request-logger');
//# sourceMappingURL=index.js.map