/**
 * Policies
 */
import { IPolicy, facile } from 'facile';

let policy: IPolicy = {
	'*': true
};

facile.registerPolicy(policy);