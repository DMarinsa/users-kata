import { Application } from "express";
import { Controller } from "../../domain/Controller";

export class Router {
  constructor(private app: Application) {}

  initializeRoutes(controllers: Controller[]) {
    controllers.forEach(controller => {
      this.app.use(controller.path, controller.initializeRoutes());
    });
  }
}
