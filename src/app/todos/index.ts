import { reactive } from 'vue';
import type { TodosState, TodosStore } from '~/interfaces/todo';
import { todoActions } from './action';

const initialTodos: TodosState = {
  list: [
    {
      id: '1',
      title: 'Learn Vue',
      completed: false
    },
    {
      id: '2',
      title: 'Learn Vuex',
      completed: false
    }
  ]
};

const todosStore: TodosStore = reactive({
  todos: {
    ...initialTodos,
    ...todoActions
  }
});

export default todosStore;
