<script lang="ts" setup>
import useGlobalStore from '~/app/store';
import TodoItem from './TodoItem.vue';

interface TodoListEmits {
  (eventName: 'onTodoClick', id: string, mousePosition: 'left' | 'right'): void;
  (eventName: 'onTodoDoubleClick', id: string, title: string): void;
}

const { todos } = useGlobalStore();
const emit = defineEmits<TodoListEmits>();
</script>

<template>
  <ul className="bg-white">
    <TodoItem
      v-for="todo in todos.list"
      :key="todo.id"
      :todo="todo"
      @on-todo-click="
        (id, mousePosition) => emit('onTodoClick', id, mousePosition)
      "
      @on-todo-double-click="(id, text) => emit('onTodoDoubleClick', id, text)"
    />
  </ul>
</template>

<!-- @on-todo-click="(id, mousePosition) => emit('onTodoClick', id, mousePosition)"
      @on-todo-double-click="(id, text) => emit('onTodoDoubleClick', id, text)" -->
