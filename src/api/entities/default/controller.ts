import { facile, IRequest, IResponse,
				Controller, ICallback, IFacile } from 'facile';
import { StringsService } from '../../services';

/**
 * Default Controller
 *
 * @class DefaultController
 * @extends {Controller}
 */
export class DefaultController extends Controller {

	/**
	 * Renders Layout
	 *
	 * @param {IRequest} req
	 * @param {IResponse} res
	 *
	 * @memberOf DefaultController
	 */
	index(req: IRequest, res: IResponse) {
		let config = this.facile._config;
		res.render(config.views.layout);
	}

	/**
	 * view
	 *
	 * @desc handles rendering views.
	 * @method view
	 * @param {any} url
	 * @returns
	 *
	 * @memberOf DefaultController
	 */
	view(url) {
		return (req: IRequest, res: IResponse) => {
			res.render(url);
		};
	}

	/**
	 * redirect
	 *
	 * @desc handles redirected routes.
	 * @method redirect
	 * @param {any} url
	 * @returns
	 *
	 * @memberOf DefaultController
	 */
	redirect(url) {
		return (req: IRequest, res: IResponse) => {
			res.redirect(url);
		};
	}

	/**
	 * find
	 *
	 * @desc find records handler.
	 * @method find
	 * @param {IRequest} req
	 * @param {IResponse} res
	 *
	 * @memberOf DefaultController
	 */
	find(Model: any) {
		return (req: IRequest, res: IResponse) => {
			this.errors.notImplemented();
		};
	}

	/**
	 * findOne
	 *
	 * @desc find one record handler.
	 * @method findOne
	 * @param {IRequest} req
	 * @param {IResponse} res
	 *
	 * @memberOf DefaultController
	 */
	findOne(Model: any) {
		return (req: IRequest, res: IResponse) => {
			this.errors.notImplemented();
		};
	}

	/**
	 * create
	 *
	 * @desc create record handler.
	 * @method create
	 * @param {IRequest} req
	 * @param {IResponse} res
	 *
	 * @memberOf DefaultController
	 */
	create(Model: any) {
		return (req: IRequest, res: IResponse) => {
			this.errors.notImplemented();
		};
	}

	/**
	 * update
	 *
	 * @desc update record handler.
	 * @method update
	 * @param {IRequest} req
	 * @param {IResponse} res
	 *
	 * @memberOf DefaultController
	 */
	update(Model: any) {
		return (req: IRequest, res: IResponse) => {
			this.errors.notImplemented();
		};
	}

	/**
	 * destroy
	 *
	 * @desc destroy record handler.
	 * @method destroy
	 * @param {IRequest} req
	 * @param {IResponse} res
	 *
	 * @memberOf DefaultController
	 */
	destroy(Model: any) {
		return (req: IRequest, res: IResponse) => {
				this.errors.notImplemented();
		};
	}

}

facile.registerComponent(DefaultController);

