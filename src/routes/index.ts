import { Router } from 'express'
import fs from "fs";
import 'reflect-metadata'


export abstract class CreateRouter {
  route: Router;

  constructor(app: Router) {
    this.route = Router();
    const route = Reflect.getMetadata("routeName", this)
    app.use('/'+ route , this.route);
    this.startRoutes();
  }
  abstract startRoutes(): void;
}

const injectRouter = async <T extends string, Router>(file: T, app: Router) => {
  const Routes = await import(`./${file}`);
  new Routes.default(app);
}

 class RouterRoot {

  initRoutes(): Router {
    const app = Router();
    
    fs.readdirSync(__dirname)
      .filter(file => file !== 'index.ts')
      .forEach(file => injectRouter(file, app))

    return app;
  }

  
}



export default new RouterRoot()