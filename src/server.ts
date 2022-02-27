const express = require('express');
import { Request, Response } from 'express';
const { createConnection } = require('typeorm');
import contentRouter from './routers/ContentRounter';
const cors = require('cors');

class Server { 
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json({ limit: '1mb' })); // 100kb default
  }
  
  private routerConfig() {
    this.app.use(cors({
      origin: 'http://localhost:3000'
    }));
    this.app.get('/healthcheck', async (req: Request, res: Response) => {
        return res.status(200).send();
    });
    this.app.use('/api/v1', contentRouter);
  }
  
  private async dbConnect() {
    createConnection();
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