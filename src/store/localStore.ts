export const STORAGE_KEY = 'todos-vuejs';

export const getTodosFromLocal = () => {
  return new Promise((resolve, reject) => {
    try {
      const todos = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
      resolve(todos);
    } catch (error) {
      reject(error);
    }
  });
};

export const saveToLocal = (todos: any) => {
  return new Promise((resolve, reject) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      resolve(todos);
    } catch (error) {
      reject(error);
    }
  });
};
