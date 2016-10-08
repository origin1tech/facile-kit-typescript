
/**
 * Example Middleware
 * This example logs the method,
 * url and ip for the requesting
 * node.
 */
import { facile } from 'facile';
import { IRequest, IResponse, INextFunction } from 'facile/interfaces';

facile.addMiddleware('requestLogger', (req: IRequest, res: IResponse, next: INextFunction) => {
	let ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
	facile.logger.log('request', req.method, req.url, ip);
	next();
});