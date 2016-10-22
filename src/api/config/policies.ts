/**
 * Policies
 */
import { IPolicy, facile } from 'facile';

let policy: IPolicy = {
		'*': false
};

facile.registerPolicy(policy);