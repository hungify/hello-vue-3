<script lang="ts" setup>
import useGlobalStore from '~/app/store';

const { todos } = useGlobalStore();

const handleTodoClick = (id: string, mousePosition: 'left' | 'right') => {
  if (mousePosition === 'left') {
    todos.completedTodo(id);
  } else {
    todos.removeTodo(id);
  }
};
const handleTodoDoubleClick = (id: string, title: string) => {
  const foundTodo = todos.list.find((todo) => todo.id === id);
  if (foundTodo) foundTodo.title = title;
};

const handleAddTodo = (evt: Event) => {
  const formData = new FormData(evt.target as HTMLFormElement);
  todos.addTodo({
    id: String(new Date().getTime()),
    title: formData.get('title') as string,
    completed: false,
  });
};

// provide('todoActions', {
//   handleTodoClick,
//   handleTodoDoubleClick,
// });
</script>

<template>
  <slot
    :todos="todos.list"
    :onTodoClick="handleTodoClick"
    :onTodoDoubleClick="handleTodoDoubleClick"
    :onAddTodo="handleAddTodo"
  />
</template>
