import type { Todo } from '~/interfaces/todo';
import useGlobalStore from '../store';

export const addTodo = (todo: Todo) => {
  const { todos } = useGlobalStore();
  todos.list.push(todo);
};

export const removeTodo = (id: string) => {
  const { todos } = useGlobalStore();
  const foundTodo = todos.list.find((todo) => todo.id === id);
  if (foundTodo) {
    todos.list.splice(todos.list.indexOf(foundTodo), 1);
  }
};

export const completedTodo = (id: string) => {
  const { todos } = useGlobalStore();
  const foundTodo = todos.list.find((todo) => todo.id === id);
  if (foundTodo) {
    foundTodo.completed = !foundTodo.completed;
  }
};

export const todoActions = {
  addTodo,
  removeTodo,
  completedTodo,
};
