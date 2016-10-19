/**
 * Default Filter
 */
import { facile, Filter, IRequest, IResponse, INextFunction } from 'facile';

export class DefaultFilter extends Filter {

	isAuthenticated(req: IRequest, res: IResponse, next: INextFunction) {
		next();
	}

	isAnonymous(req: IRequest, res: IResponse, next: INextFunction) {
		next();
	}

}

facile.registerComponent(DefaultFilter);
