import { STORAGE_KEY } from './mutations';

const localStoragePlugin = (store: any) => {
  store.subscribe((mutation: any, { todos }: {todos: any}) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  });
};

export default [localStoragePlugin];
