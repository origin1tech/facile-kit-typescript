/**
 * Filters can be added individual
 * or as an object.
 *
 */

import { facile, Filter, IRequest, IResponse, INextFunction } from 'facile';

export class DefaultFilter extends Filter {

	/**
	 * isAuthenticated
	 *
	 * @method isAuthenticated
	 * @param {IRequest} req
	 * @param {IResponse} res
	 * @param {INextFunction} next
	 *
	 * @memberOf DefaultFilter
	 */
	isAuthenticated(req: IRequest, res: IResponse, next: INextFunction) {

		// do something to ensure
		// authenticated for example
		// using express session.
		next();

	}

	isAnonymous(req: IRequest, res: IResponse, next: INextFunction) {
		next();
	}

}

facile.registerComponent(DefaultFilter);
