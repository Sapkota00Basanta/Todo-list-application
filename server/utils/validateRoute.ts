import { body } from 'express-validator';

export const createTodoValidator = [
  body('name', 'Invalid name cannot be Empty').not().isEmpty(),
  body('description', 'Invalid description cannot be empty').notEmpty(),
  body('date', 'Invalid date field must be selected').not().isEmpty(),
];

export const editTodoValidator = [
  body('name', 'Invalid name cannot be Empty').not().isEmpty(),
  body('description', 'Invalid description cannot be empty').notEmpty(),
  body('date', 'Invalid date field must be selected').not().isEmpty(),
];
