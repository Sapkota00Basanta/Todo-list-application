// Third-party Module Definations
import { Request, Response } from 'express';

// User-Defined Module Definations
import logger from '../../../helpers/logger';
import TodoService from '../../service/todo.service';

/**
 * Controller for managing all the incoming request related to todo list management
 */
export class TodoController {
  getTodoList(_request: Request, _response: Response): void {
    TodoService.getTodoList(_request)
      .then((result: any) => {
        _response.json(result);
      })
      .catch((error) => {
        logger.error('Error while fetching todo list.');
        _response.status(404).json({
          message: error.message,
        });
      });
  }

  getTodo(_request: Request, _response: Response): void {
    TodoService.getTodo(_request)
      .then((result: any) => {
        _response.json(result);
      })
      .catch((error) => {
        logger.error(
          `Error while fetching todo from database with id: ${_request.params._id}.`,
        );
        _response.status(404).json({
          message: error,
        });
      });
  }

  addTodo(_request: Request, _response: Response): void {
    TodoService.addTodo(_request)
      .then((result: any) => {
        _response.redirect('/view/todo-management/homepage');
      })
      .catch((error) => {
        logger.error('Error while adding new todo to database.');
        _response.status(404).json({
          message: error,
        });
      });
  }

  editTodo(_request: Request, _response: Response): void {
    TodoService.editTodo(_request)
      .then((result: any) => {
        _response.redirect('/view/todo-management/homepage');
      })
      .catch((error) => {
        logger.error(
          `Error while editing todo with id: ${_request.params._id}`,
        );
        _response.status(404).json({
          message: error,
        });
      });
  }
  deleteTodo(_request: Request, _response: Response): void {
    TodoService.deleteTodo(_request)
      .then((result: any) => {
        _response.json(result);
      })
      .catch((error) => {
        logger.error(
          `Error while attempting to delete todo with id: ${_request.params._id}`,
        );
        _response.status(404).json({
          message: error,
        });
      });
  }
}

export default new TodoController();
