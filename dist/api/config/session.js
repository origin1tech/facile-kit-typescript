"use strict";
/**
 * Express Session
 * @see https://www.npmjs.com/package/express-session
 */
exports.sessionConfig = {
    key: 'facile.sid',
    secret: 'changeme',
    maxAge: 1800000,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
};
//# sourceMappingURL=session.js.map