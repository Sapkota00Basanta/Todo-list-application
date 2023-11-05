import { Document } from 'mongoose';

/**
 * Type defination for tood List model for mongoDB
 */
export type TodoDocument = Document & {
  name: string;
  description: string;
  date: Date;
  isComplete: boolean;
};

export interface ITodoType {
  _id: string;
  name: string;
  description: string;
  date: Date;
  isComplete: boolean;
  createdAt: number;
  updatedAt: number;
}
export type TodoInput = {
  name: TodoDocument['name'];
  description: TodoDocument['description'];
  date: TodoDocument['date'];
  isComplete: TodoDocument['isComplete'];
};
