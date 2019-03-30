export const STORAGE_KEY = 'todos-vuejs';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear();
}

export const mutations = {
  init(state: any, todos: any): void {
    state.todos = todos;

  },

  addTodo(state: any, todo: any): void {
    state.todos.push(todo);
  },

  removeTodo(state: any, todo: any): void {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  editTodo(state: any, { todo, text = todo.text, done = todo.done }: {todo: any, text: string, done: boolean}): void {
    todo.text = text;
    todo.done = done;
  },
};
