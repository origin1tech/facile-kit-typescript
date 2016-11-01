import { facile, IRoutes } from 'facile';

let main: IRoutes =  {

	'/': 'DefaultController.index'

};

facile.registerRoute(main);