import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'todos';

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem('todos');

      if (!rawTodos) {
        throw new Error('No Saved Todos');
      }

      return JSON.parse(rawTodos);
    } catch (e) {
      throw new Error('Failed To Load Todos');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed To Save Todos');
    }
  }
};

export default todosStorage;
