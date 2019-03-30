import { saveToLocal } from './localStore';

const localStoragePlugin = (store: any) => {
  store.subscribe(async (mutation: any, { todos }: {todos: any}) => {
    await saveToLocal(todos);
  });
};

export default [localStoragePlugin];
