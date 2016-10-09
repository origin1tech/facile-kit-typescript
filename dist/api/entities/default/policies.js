/**
 * Configures security policies.
 *
 * @example
 *
 * Config Examples
 * where "key" is either '*',
 * a controller name or a
 * controller action name.
 *
 * key: true or false.				- true must be authenticated, false must be anon.
 * key: []										- array of filter functions.
 * key: '*'										- accepts any auth state.
 *
 * Global Policy
 * there can be only one required '*'
 * at the top level of the policies.
 *
 * '*': boolean, '*' or array of filters.
 *
 * Controller Policy
 * name: true or false 			- would require anon or auth for all actions.
 * name: []									- would require all filters to pass for any action.
 * name: {								 	- actions are individually defined.
 * 		'*': boolean or []		- would require auth, anon or pass filters plus action configs
 * 		action1: true,				- must be authenticated for this action.
 * 		action2: []						- must pass these filters to access this action.
 * }
 *
 * When defining an action policy using an
 * object and when using '*' its value
 * cannot be '*'. If this is the desired
 * result you must define the controller
 * at the top level as '*' or public.
 * ex: controllerName: '*'
 */
// Define the policies.
var policies = {};
//# sourceMappingURL=policies.js.map