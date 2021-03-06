import express, { Request, Response, NextFunction, Application } from "express";
import { Controller } from "../../../shared/domain/Controller";
import logger, { Logger } from "../../../shared/infrastructure/logger/Logger";
import { CreateUserUseCase } from "../../application/CreateUserUseCase";
import { InitializeUserParams } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { UserModel } from "../persistence/UserModel";
import { UserMongooseRepository } from "../persistence/UserMongooseRepository";

export class Router implements Controller {
  public routes = express.Router();
  public path = '/users';

  private userRepository: UserRepository;
  private createUserUseCase: CreateUserUseCase;
  private logger: Logger;
  constructor() {
    this.logger = logger;
    this.userRepository = new UserMongooseRepository(UserModel);
    this.createUserUseCase = new CreateUserUseCase(this.userRepository);
  }

  initializeRoutes() {
    this.routes.post(this.path, this.post);
    return this.routes;
  }

  private async post(req: Request, res: Response) {
    this.logger.info('POST /users');
    try {
      const request = req.body as InitializeUserParams;
      const createdUser = await this.createUserUseCase.execute(request);
      return res.status(200).json(createdUser);
    } catch (error) {
      this.logger.error(error as string);
    }
  }
}
