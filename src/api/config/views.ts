/**
 * Express Views
 * @see https://expressjs.com/en/guide/using-template-engines.html
 */
export let viewsConfig = {
	layout: 'layout',
	engine: 'hogan',
	'view engine': 'html',
	views: '/web/views',
	'jsonp callback name': 'callback'
};