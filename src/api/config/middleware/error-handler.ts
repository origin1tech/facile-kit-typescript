
/**
 * Example Middleware
 */
import { facile } from 'facile';
import { IRequest, IResponse, INextFunction } from 'facile/interfaces';
import * as errorHandler from 'errorhandler';

// if (facile._config.env === 'development')
facile.addMiddleware('requestLogger', errorHandler());