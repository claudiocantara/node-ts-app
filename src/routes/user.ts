import { CreateRouter } from './index'
import { UserController } from '../controllers/user/user.controller'
import { Route } from '../resources/Decorators'

@Route('user')
class UserRoute extends CreateRouter {
  startRoutes() {
    const userController = new UserController()

    this.route.get('/', userController.list)
    this.route.post('/', userController.create)
  }
}

export default UserRoute
