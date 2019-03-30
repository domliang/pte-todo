import { STORAGE_KEY } from './mutations';

function saveToLocal(todos: any) {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      resolve(todos);
    } catch (error) {
      reject(error);
    }
  });
}

const localStoragePlugin = (store: any) => {
  store.subscribe(async (mutation: any, { todos }: {todos: any}) => {
    await saveToLocal(todos);
  });
};

export default [localStoragePlugin];
