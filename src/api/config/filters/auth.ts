
import { IRequest, IResponse, INextFunction } from 'facile/interfaces';

export function isAuthenticated(req: IRequest, res: IResponse, next: INextFunction) {
	next();
}

export function isAnonymous(req: IRequest, res: IResponse, next: INextFunction) {
	next();
}

export function isPublic(req: IRequest, res: IResponse, next: INextFunction) {
	next();
}