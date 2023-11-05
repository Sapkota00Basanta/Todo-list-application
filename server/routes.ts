// Third-party Module Imports
import { Application } from 'express';

// User-Defined Module Imports
import TodoApiRoutes from './api/controller/todo-api/routes';
import TodoViewRoutes from './api/controller/todo-view/routes';
import HealthCheckRoute from './api/controller/health-check/routes';

/**
 * Routes handler function to centrally manage all api routes
 * @param app Express Application
 */
const routes = (app: Application) => {
  // Health Check Controller Route
  app.use('/', HealthCheckRoute);

  //Todo List API Controller Routes
  app.use('/api/v1/todo-management', TodoApiRoutes);

  // Todo List View Controller Routes
  app.use('/view/todo-management/', TodoViewRoutes);
};

export default routes;
