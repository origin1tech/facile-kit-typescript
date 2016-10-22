import { facile, IRoutes } from 'facile';
import { DefaultController } from '../entities';

let main: IRoutes =  {

	'/': 'DefaultController.index'

};

facile.registerRoute(main);