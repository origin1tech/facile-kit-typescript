
import { facile, Service } from 'facile';
import { IFacile } from 'facile/interfaces';

/**
 * Example Strings Service
 *
 * @class StringsService
 * @extends {Service}
 */
class StringsService extends Service {

	capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

}

facile.addService(StringsService);