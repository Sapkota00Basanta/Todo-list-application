# Todo List Application

### This repository consists of full working todo list application. Here, user can create, update, view and delet any todolist. They can filter by completed, pending, today and upcoming. Mongodb is used as primary database to store the todo list items.

## Table of contents

- [Setup](#setup)
- [Technologies](#technologies)
- [Routes](#routes)
- [Services](#Services)

## Setup

To run this project, install it locally using yarn:

```
$ cp server/example.sample server/env.local
$ yarn
$ Yarn dev
```

To run test on Get and delete endpoint,

```
$ yarn dev
$ yarn test
```

To run on docker,

```
$ docker compose up
```

## Routes

API Routes:

1.  "http://localhost:3000/api/v1/todo-management/todos" -> Get all todos.
2.  "http://localhost:3000/api/v1/todo-management/todos/:\_id" -> Get the specific id.
3.  "http://localhost:3000/api/v1/todo-management/todos" -> Create a new todo.
4.  "http://localhost:3000/api/v1/todo-management/todos/:\_id" -> Update a specific todd.
5.  "http://localhost:3000/api/v1/todo-management/todos/:\_id" -> Delete the specific todo \_id.

View Routes:

1.  "http://localhost:3000/view/todo-management/homepage" -> Main home page of application.
2.  "http://localhost:3000/view/todo-managmenet/addTodo" -> Add Todo page.
3.  "http://localhost:3000/view/todo-management/editTodo/:\_id" -> Edit todo page.
4.  "http://localhost:3000/view/todo-management/delete/:\_id" -> Delete todo.

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
