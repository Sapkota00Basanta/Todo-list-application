// Third-party Module Definations
import { Request, Response } from 'express';

// User-Defined Module Definations
import logger from '../../../helpers/logger';

/**
 * Controller for health check status of the server.
 */
export class TodoController {
  getHealthCheckResponse(_request: Request, _response: Response): void {
    const healthCheck = {
      uptime: `${Math.floor(process.uptime())} Seconds`,
      message: 'OK',
      timestamp: Date.now(),
    };

    try {
      _response.status(200).send(healthCheck);
    } catch (error: any) {
      logger.error(error?.message);
      _response.status(503).send({
        error: error?.message,
      });
    }
  }
}

export default new TodoController();
