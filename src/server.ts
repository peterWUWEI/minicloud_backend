const express = require('express');
import { Request, Response } from 'express';
const { ConnectionOptions, createConnections } = require('typeorm');
//import { authenticate } from './utils/authenticate';

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
    this.app.get('/healthcheck', async (req: Request, res: Response) => {
        return res.status(200).send();
    })
  }
  
  private async dbConnect() { 
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