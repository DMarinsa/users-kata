import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';
import * as dotenv from 'dotenv';
import { MongooseDatabase } from './modules/shared/infrastructure/database/MongooseDatabase';
import { Router } from './modules/shared/infrastructure/express/Router';
import { Router as UserRouter } from './modules/users/infrastructure/rest/Router';
dotenv.config();

const app = express()

const database = new MongooseDatabase();

database.connect();

app.use(helmet());
app.use(cors());
app.use(json());

const router = new Router(app);
router.initializeRoutes([
  new UserRouter(),
]);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
