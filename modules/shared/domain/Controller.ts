import { Router } from "express";

export interface Controller {
  path: string;
  routes: Router;
  initializeRoutes(): Router;
}
