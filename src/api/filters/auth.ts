
import { facile } from 'facile';
import { IRequest, IResponse, INextFunction } from 'facile/interfaces';

facile.addFilter('isAuthenticated', (req: IRequest, res: IResponse, next: INextFunction) => {
	next();
});

facile.addFilter('isAnonymous', (req: IRequest, res: IResponse, next: INextFunction) => {
	next();
});

facile.addFilter('isPublic', (req: IRequest, res: IResponse, next: INextFunction) => {
	next();
});



