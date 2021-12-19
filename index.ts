import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { json } from 'body-parser';

const app = express()

app.use(helmet());
app.use(cors());
app.use(json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
