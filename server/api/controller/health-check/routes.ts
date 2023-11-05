// Third-party Module Imports
import express from 'express';

// User-Defined Module Imports
import HealthCheckController from './controller';

export default express
  .Router()
  .get('/', HealthCheckController.getHealthCheckResponse);
