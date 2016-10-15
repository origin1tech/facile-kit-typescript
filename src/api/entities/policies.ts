import { facile, IPolicy } from 'facile';

/**
 * Global Policy
 */

export let globalPolicy: IPolicy = {

	'*': false

};

facile.registerPolicy(globalPolicy);