
import { facile, Service, IFacile } from 'facile';

/**
 * Example Strings Service
 *
 * @class StringsService
 * @extends {Service}
 */
export class StringsService extends Service {

	capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

}

facile.registerComponent(StringsService);