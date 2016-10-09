import { facile, IRequest, IResponse, Controller } from 'facile';
import { IFacile } from 'facile/interfaces';

/**
 * Default Controller
 *
 * @class DefaultController
 * @extends {Controller}
 */
class DefaultController extends Controller {

	index(req: IRequest, res: IResponse) {

	}

}

facile.addController(DefaultController);

