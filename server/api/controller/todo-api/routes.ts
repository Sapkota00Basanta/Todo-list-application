// Third-party Module Imports
import express from 'express';

// User-Defined Module Imports
import TodoController from './controller';
import {
  createTodoValidator,
  editTodoValidator,
} from '../../../utils/validateRoute';

export default express
  .Router()
  .get('/todos/', TodoController.getTodoList)
  .get('/todos/:_id', TodoController.getTodo)
  .post('/todos', createTodoValidator, TodoController.addTodo)
  .post('/todos/:_id', editTodoValidator, TodoController.editTodo)
  .delete('/todos/:_id', TodoController.deleteTodo);
