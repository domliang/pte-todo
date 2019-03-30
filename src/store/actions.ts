import { shortId } from '@/utils/id';
import { getTodosFromLocal } from './localStore';

export default {
  // 初始化todos
  async init({ commit }: {commit: any}) {
    const todos = await getTodosFromLocal();
    commit('init', todos);
  },
  // 添加新todo
  addTodo({ commit }: {commit: any}, text: string) {
    commit('addTodo', {
      id: shortId(),
      text,
      done: false,
    });
  },
  // 删除 todo
  removeTodo({ commit }: {commit: any}, todo: any) {
    commit('removeTodo', todo);
  },
  // toggle todo 状态
  toggleTodo({ commit }: {commit: any}, todo: any) {
    commit('editTodo', { todo, done: !todo.done });
  },
  // 编辑todo
  editTodo({ commit }: {commit: any}, { todo, value }: { todo: any, value: string }) {
    commit('editTodo', { todo, text: value });
  },
  // toggle所有todo
  toggleAll({ state, commit }: {state: any, commit: any}, done: any) {
    state.todos.forEach((todo: any) => {
      commit('editTodo', { todo, done: !todo.done });
    });
  },
  // 清除全部已完成
  clearCompleted({ state, commit }: {state: any, commit: any}) {
    state.todos.filter((todo: any) => todo.done)
      .forEach((todo: any) => {
        commit('removeTodo', todo);
      });
  },
};
