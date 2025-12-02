import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Env } from './configs/env';
import { connectToDatabase } from './utils/connect';
import apiRouter from './router';

const app: Express = express();
const PORT = Env.PORT;
const HOST = Env.HOST;

function main() {
  try {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('tiny'));
    app.use(
      cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
      })
    );

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.use('/api/v1', apiRouter);

    app.listen(Number(PORT), HOST, async () => {
      console.log(`[API] Server is running at http://${HOST}:${PORT}`);
      await connectToDatabase(Env.MONGO_URI);
    });
  } catch (error) {
    console.error('[API] Error starting server:', error);
  }
}

main();