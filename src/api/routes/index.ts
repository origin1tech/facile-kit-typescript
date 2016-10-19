import { facile } from 'facile';
import { DefaultController } from '../entities';

let main =  {

	'/': 'DefaultController.index'

};

facile.registerRoute(main);