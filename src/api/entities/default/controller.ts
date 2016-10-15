import { facile, IRequest, IResponse, Controller, ICallback, IFacile } from 'facile';

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
	 * Render Views Helper.
	 *
	 * @param {string} view
	 * @param {Object} [options]
	 * @param {ICallback} [cb]
	 * @returns
	 *
	 * @memberOf DefaultController
	 */
	view(view: string, options?: Object, cb?: ICallback) {
		return function renderView(req: IRequest, res: IResponse) {
			res.render(view, options);
		};
	}

	/**
	 * Redirect Url Helper.
	 *
	 * @param {string} url
	 * @param {number} [status]
	 * @returns
	 *
	 * @memberOf DefaultController
	 */
	redirect(url: string, status?: number) {
		return function urlRedirect(req: IRequest, res: IResponse) {
			res.redirect(status || 301, url);
		};
	}

}

facile.registerComponent(DefaultController);

