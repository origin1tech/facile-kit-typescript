
/**
 * Example Middleware
 */
import { facile,  IRequest, IResponse, INextFunction } from 'facile';
import * as errorHandler from 'errorhandler';

if (process.env.NODE_ENV === 'development')
	facile.registerMiddleware('errorHandler', errorHandler());
