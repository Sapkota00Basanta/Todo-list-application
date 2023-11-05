import mongoose, { Model, Schema } from 'mongoose';
import { TodoDocument } from '../../types/todo.interface';

// Defining Schema for todo model
const todoSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      require: true,
    },
    description: {
      type: Schema.Types.String,
      require: true,
    },
    date: {
      type: Schema.Types.Date,
      require: true,
    },
    isComplete: {
      type: Schema.Types.Boolean,
      default: false,
    },
  },
  {
    collection: 'todos',
    timestamps: true,
  },
);

const TodoModel: Model<TodoDocument> = mongoose.model<TodoDocument>(
  'Todos',
  todoSchema,
);

export default TodoModel;
