export const STORAGE_KEY = 'pte-todos';

// 从本地存储获取数据
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

// 将数据保存到本地
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
