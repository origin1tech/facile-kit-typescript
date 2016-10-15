import { facile, IRequest, IResponse, Controller, ICallback, IFacile } from 'facile';

/**
 * REST Controller
 *
 * @desc handles automatically generated routes by models.
 * @class RestController
 * @extends {Controller}
 */
export class RestController extends Controller {

	index(req: IRequest, res: IResponse) {
		//let config = this.facile._config;
		res.render('index');
	}


}

facile.registerComponent(RestController);

