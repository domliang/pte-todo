import {shortId} from '../utils/id';

export default {
  addTodo({ commit }: {commit: any}, text: string) {
    commit('addTodo', {
      id: shortId(),
      text,
      done: false,
    });
  },

  removeTodo({ commit }: {commit: any}, todo: any) {
    commit('removeTodo', todo);
  },

  toggleTodo({ commit }: {commit: any}, todo: any) {
    commit('editTodo', { todo, done: !todo.done });
  },

  editTodo({ commit }: {commit: any}, { todo, value }: { todo: any, value: string }) {
    commit('editTodo', { todo, text: value });
  },

  toggleAll({ state, commit }: {state: any, commit: any}, done: any) {
    state.todos.forEach((todo: any) => {
      commit('editTodo', { todo, done });
    });
  },

  clearCompleted({ state, commit }: {state: any, commit: any}) {
    state.todos.filter((todo: any) => todo.done)
      .forEach((todo: any) => {
        commit('removeTodo', todo);
      });
  },
};
