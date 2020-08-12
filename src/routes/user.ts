import { CreateRouter } from './index'
import { UserController } from '../app/controllers/user.controller'
import { Route } from '../resources/Decorators';


@Route('user')
export default class UserRoute extends CreateRouter {
  startRoutes() {
    
    const controller = new UserController();

    this.route.get('/', controller.teste);
    
  };

}


