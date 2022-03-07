const express = require('express');
import { Request, Response } from 'express';
const { createConnection } = require('typeorm');
import contentRouter from './routers/ContentRounter';
import LoginController from './controllers/LoginController';
import { authenticateJWT } from './utils/authenticateJWT'

const bodyParser = require('body-parser');

class Server { 
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.dbConnect();
    this.routerConfig();
  }

  private config() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json({ limit: '1mb' })); // 100kb default
  }
  
  private routerConfig() {
    this.app.get('/healthcheck', async (req: Request, res: Response) => {
        return res.status(200).send();
    });

    this.app.use('/login', LoginController);

    this.app.use('/api/v1', authenticateJWT, contentRouter);
  }
  
  private async dbConnect() {
    await createConnection();
    console.log('DB connected');
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
        this.app.listen(port, () => {
            resolve(port);
        }).on('error', (err: Object) => reject(err));
    });
}
  
}

export default Server;