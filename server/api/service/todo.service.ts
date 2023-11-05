// Module Imports
import { Request } from 'express';
import TodoModel from '../../database/models/todo.model';
import { formatDate } from '../../helpers/formatDate';
import { ITodoType, TodoInput } from '../../types/todo.interface';
import { validationResult } from 'express-validator';

/**
 * Todo List service to interact with database and handle all CRUD operations
 */
export class TodoListService {
  /**
   * This service method is responsible for fetching all the todo from database
   * @param request Incoming Request Object
   * @returns Array of Todo List object
   */
  getTodoList = async (_request: Request): Promise<any> => {
    try {
      const { page, limit, isDone, upcoming, today } = _request.query;
      const todayDate = new Date(Date.now());
      let todoList: Array<ITodoType> = await TodoModel.find({});
      let filteredTodoList = todoList.filter((todo) => {
        if (upcoming) {
          return new Date(todo.date) > todayDate;
        } else if (isDone) {
          return String(todo.isComplete).toLowerCase() === isDone;
        } else if (today) {
          return (
            formatDate(todo.date.toString()) ===
            formatDate(todayDate.toString())
          );
        } else {
          return todo;
        }
      });
      return Promise.resolve(filteredTodoList);
    } catch (error: any) {
      return Promise.reject(error?.message);
    }
  };

  /**
   * This service method is responsible for fetching todo with id passed in request params.
   * @param request Incoming Request Object
   * @returns Single Todo List Object with matching id
   */
  getTodo = async (request: Request): Promise<any> => {
    try {
      const todoWithID = await TodoModel.findOne({ _id: request.params._id });
      if (!todoWithID) {
        throw new Error(`No todo with id: ${request.params._id} found.`);
      }

      return Promise.resolve(todoWithID);
    } catch (error: any) {
      return Promise.reject(error?.message);
    }
  };

  /**
   * This service method is responsible for creating a new todo in database.
   * @param request Incoming Request object.
   * @returns Newly created todo object.
   */
  addTodo = async (request: Request): Promise<any> => {
    try {
      const { name, description, date, isComplete } = request.body;

      const error = validationResult(request);
      if (!error.isEmpty()) {
        throw new Error(error.array()[0].msg);
      }

      const todoInput: TodoInput = {
        name,
        description,
        date,
        isComplete: isComplete === 'on' ? true : false,
      };
      const response = await TodoModel.create(todoInput);
      if (!response) throw new Error(`Unable to save todo in database`);

      return Promise.resolve(response);
    } catch (error: any) {
      return Promise.reject(error.message);
    }
  };

  /**
   * This service method is responsible for updating todo object with matching id.
   * @param request Incoming request object.
   * @returns Currently updated todo object.
   */
  editTodo = async (request: Request): Promise<any> => {
    try {
      const { _id } = request.params;
      if (!_id) throw new Error(`Id field is required`);

      const { name, description, date } = request.body;

      const error = validationResult(request);
      if (!error.isEmpty()) {
        throw new Error(error.array()[0].msg);
      }

      let isComplete = request.body?.isComplete ? true : false;

      const todoWithID = await TodoModel.findOne({ _id: _id });
      if (!todoWithID) throw new Error(`Todo with id: ${_id} not found`);

      const todoUpdateInput: TodoInput = {
        name,
        description,
        date,
        isComplete,
      };

      await TodoModel.updateOne({ _id: _id }, todoUpdateInput);
      const updatedTodo = await TodoModel.findById(
        { _id: _id },
        { name, description, date },
      );

      return Promise.resolve(updatedTodo);
    } catch (error: any) {
      return Promise.reject(error?.message);
    }
  };

  /**
   * This service method is responsible for deleting todo with matching id.
   * @param request Incoming request object
   * @returns Status of deleting todo request along with message.
   */
  deleteTodo = async (request: Request): Promise<any> => {
    try {
      const { _id } = request.params;
      if (!_id) throw new Error(`Id field is required`);

      await TodoModel.deleteOne({ _id: _id });

      const documentCount = await TodoModel.countDocuments({ _id: _id });
      if (documentCount)
        throw new Error(`Unable to delete todo with id: ${_id}`);

      return Promise.resolve({
        isSuccess: true,
        message: `Successfully deleted`,
      });
    } catch (error: any) {
      return Promise.reject(error?.message);
    }
  };
}

export default new TodoListService();
