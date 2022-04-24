const express = require('express');
import { Request, Response } from 'express';
const { createConnection } = require('typeorm');
import serviceRouter from './routers/ServiceRouter';
import newsRouter from './routers/NewsRouter';
import investorInfoRouter from './routers/InvestorInfoRouter';
import sustainabilityRouter from './routers/SustainabilityRouter';
import contactRouter from './routers/ContactRouter';
import aboutRouter from './routers/AboutRouter';
import loginRouter from './routers/LoginRouter';

const cors = require('cors');

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
    this.app.use(express.json({ limit: '10mb' })); // 100kb default
    this.app.use(cors({ origin: ['http://localhost:3000', 'https://minicloud.co.jp', 'http://47.91.28.226'] }));
  }
  
  private routerConfig() {
    this.app.get('/healthcheck', async (req: Request, res: Response) => {
        return res.status(200).send();
    });

    this.app.get

    this.app.use('/api/v1/services', serviceRouter);
    this.app.use('/api/v1/news', newsRouter);
    this.app.use('/api/v1/investorInfo', investorInfoRouter);
    this.app.use('/api/v1/sustainability', sustainabilityRouter);
    this.app.use('/api/v1/contacts', contactRouter);
    this.app.use('/api/v1/about', aboutRouter);
    this.app.use('/api/v1/login', loginRouter);
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
