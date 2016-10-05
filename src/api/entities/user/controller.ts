import { IRequest, IResponse } from 'facile/interfaces';

export function get(req: IRequest, res: IResponse) {
	res.send('get user success...');
}

export function create(req: IRequest, res: IResponse) {
	res.send('create user success...');
}