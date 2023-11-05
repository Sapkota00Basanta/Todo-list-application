// Module Import Definations
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import http from 'http';
import os from 'os';
import allowCrossDomain from './api/middleware/crossOrigin.handler';
import errorHandler from './api/middleware/error.handler';
import connectDB from './database/connection';
import envConfig from './utils/envConfig';
import validateEnv from './utils/validateEnv';
import logger from './helpers/logger';
import path from 'path';

// Setting Up Express server
export const app = express();

// Validating environment variables to prevent unnecessary malfunction
validateEnv();

//Defining a class for server with its methods
export default class ExpressServer {
  constructor() {
    //Initial Middlewares Calls
    envConfig;
    app.use(cors());
    app.use(allowCrossDomain);
    app.use(helmet());
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100Kb',
      }),
    );
    app.use(
      bodyParser.json({
        limit: process.env.REQUEST_LIMIT || '100kb',
      }),
    );
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, './views'));
    app.use(express.static(path.join(__dirname, '../public')));
  }

  // Routes Method to use routes
  routesMethod(routes: (app: Application) => void) {
    routes(app);
    app.use(errorHandler);
    return this;
  }

  //Server Method to listen to server
  async serverListen(
    protocol: string,
    port: number,
    hostIp: string,
  ): Promise<Application> {
    const welcome = (pt: string, p: number, _ip: string) => () => {
      logger.info(
        `up and running in ${
          process.env.NODE_ENV || 'development'
        } @: ${pt}://${_ip}:${p} on host-device: ${os.hostname},`,
      );
    };
    http
      .createServer(app)
      .listen(port, hostIp, welcome(protocol, port, hostIp));

    // Connection with database
    await connectDB();
    return app;
  }
}
