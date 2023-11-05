// Third-party Module Imports
import express from 'express';

// User-Defined Module Imports
import TodoController from './controller';

export default express
  .Router()
  .get('/homepage', TodoController.homePage)
  .get('/addTodo', TodoController.addTodo)
  .get('/editTodo/:_id', TodoController.editTodo)
  .get('/delete/:_id', TodoController.deleteTodo);
