// Third-pary Module Definations
import { Request, Response } from 'express';

// User-Defined Module Definations
import TodoListService from '../../service/todo.service';
import { formatDate } from '../../../helpers/formatDate';

/**
 * Controller for managing all the incoming request related to todo list management
 */
export class TodoController {
  async homePage(_request: Request, _response: Response) {
    try {
      const todos = await TodoListService.getTodoList(_request);
      _response.render('pages/home.ejs', { todos });
    } catch (error: any) {
      return _response.status(404).json({
        message: error?.message,
      });
    }
  }
  async addTodo(_request: Request, _response: Response) {
    try {
      _response.render('pages/addTodo.ejs');
    } catch (error: any) {
      return _response.status(404).json({
        message: error?.message,
      });
    }
  }
  async editTodo(_request: Request, _response: Response) {
    try {
      const todoWithId = await TodoListService.getTodo(_request);
      const formattedDate = formatDate(todoWithId.date);
      _response.render('pages/editTodo.ejs', {
        todoWithId,
        formattedDate,
      });
    } catch (error: any) {
      return _response.status(404).json({
        message: error?.message,
      });
    }
  }
  async deleteTodo(_request: Request, _response: Response) {
    try {
      await TodoListService.deleletTodo(_request);
      _response.redirect('/view/todo-management/homepage');
    } catch (error: any) {
      return _response.status(404).json({
        message: error?.message,
      });
    }
  }
}

export default new TodoController();
