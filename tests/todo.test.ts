import request from 'supertest';

const baseURL = 'http://localhost:3000/api/v1/todo-management';

describe('GET /todos', () => {
  const newTodo = {
    name: 'Test name',
    description: 'Test description',
    date: Date.now(),
    isComplete: false,
  };
  beforeAll(async () => {
    await request(baseURL).post(`/todos`).send(newTodo);
  });
  afterAll(async () => {
    const response = await request(baseURL).get('/todos');
    let id = response.body.filter((todo: any) => todo.name === newTodo.name)[0]
      ._id;
    await request(baseURL).delete(`/todos/${id}`);
  });
  test('should return 200', async () => {
    const response = await request(baseURL).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('description');
    expect(response.body[0]).toHaveProperty('date');
    expect(response.body[0]).toHaveProperty('isComplete');
  });
});

describe('Delete /todos/:_id', () => {
  const newTodo = {
    name: 'Test name',
    description: 'Test description',
    date: Date.now(),
    isComplete: false,
  };
  beforeAll(async () => {
    await request(baseURL).post('/todos').send(newTodo);
  });
  it('should delete one item', async () => {
    const getResponse = await request(baseURL).get('/todos');
    let id = getResponse.body.filter(
      (todo: any) => todo.name === newTodo.name,
    )[0]._id;
    const response = await request(baseURL).delete(`/todos/${id}`);
    expect(response.body.message).toBe('Successfully deleted');
    expect(response.body.isSuccess).toBe(true);
  });
});
