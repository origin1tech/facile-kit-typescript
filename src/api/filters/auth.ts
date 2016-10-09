/**
 * Filters can be added individual
 * or as an object.
 *
 */

import { facile } from 'facile';
import { IRequest, IResponse, INextFunction } from 'facile/interfaces';

class AuthFilter {

	isAuthenticated(req: IRequest, res: IResponse, next: INextFunction) {
		next();
	}
	isAnonymous(req: IRequest, res: IResponse, next: INextFunction) {
		next();
	}

}

facile.addFilter(AuthFilter);
