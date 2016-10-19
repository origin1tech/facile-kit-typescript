/**
 * Route Logger Middleware
 */
import { facile, IRequest, IResponse, INextFunction } from 'facile';

facile.registerMiddleware('requestLogger', (req: IRequest, res: IResponse, next: INextFunction) => {
	let ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
	facile.log.log('request', req.method, req.url, ip);
	next();
});

