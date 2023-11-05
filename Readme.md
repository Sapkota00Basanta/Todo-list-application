# Todo List Application

### This repository consists of full working todo list application. Here, user can create, update, view and delet any todolist. They can search through the li cost and filter by completed and upcoming list. Mongodb is used as primary database to store the todo list items.

## Table of contents

- [Setup](#setup)
- [Technologies](#technologies)
- [Routes](#routes)
- [Services](#Services)

## Setup

To run this project, install it locally using yarn:

```
$ mv server/example.sample server/env.local
$ yarn
$ Yarn dev
```

To run test on Get and delete endpoint,

```
$ yarn dev
$ yarn test
```

## Routes

1. API Routes:
   a. "http://localhost:3000/api/v1/todo-management/todos" -> Get all todos.
   b. "http://localhost:3000/api/v1/todo-management/todos/:\_id" -> Get the specific id.
   c. "http://localhost:3000/api/v1/todo-management/todos" -> Create a new todo.
   d. "http://localhost:3000/api/v1/todo-management/todos/:\_id" -> Update a specific todd.
   e. "http://localhost:3000/api/v1/todo-management/todos/:\_id" -> Delete the specific todo \_id.

2. View Routes:
   a. "http://localhost:3000/view/todo-management/homepage" -> Main home page of application.
   b. "http://localhost:3000/view/todo-managmenet/addTodo" -> Add Todo page.
   c. "http://localhost:3000/view/todo-management/editTodo/:\_id" -> Edit todo page.
   d. "http://localhost:3000/view/todo-management/delete/:\_id" -> Delete todo.

## Technologies

Project is created with:

- Node
- Express
- Typescript
- Nodemon
- Envalid
- Mongoose

## Services

- GetAllTodo: Get all todos from database
- AddTodo: Add todo to database
- EditTodo: Update todo in database
- DeleteTodo: Delete todo in database
