<script lang="ts" setup>
import { computed, provide, ref } from 'vue';
import useGlobalStore from '~/app/store';
import { useAppAbility } from '~/composables/useAppAbility';
import { ACTIONS, SUBJECTS } from '~/configs/auth';
import TodoList from './TodoList.vue';

const todoName = ref('');
const { todos } = useGlobalStore();

const ability = useAppAbility();

const youCan = computed(() => {
  return {
    add: ability.can(ACTIONS.create, SUBJECTS.Todo),
    delete: ability.can(ACTIONS.delete, SUBJECTS.Todo),
    edit: ability.can(ACTIONS.edit, SUBJECTS.Todo),
    rules: ability.rules.filter((rule) => rule.inverted)
  };
}).value;

const handleAddTodo = () => {
  if (youCan.add) {
    todos.addTodo({
      id: String(new Date().getTime()),
      title: todoName.value,
      completed: false
    });
    todoName.value = '';
  } else {
    const reasonCanNot = youCan.rules.find((rule) =>
      rule.action.includes(ACTIONS.create)
    )?.reason;
    alert(reasonCanNot);
  }
};

const handleTodoClick = (id: string, mousePosition: 'left' | 'right') => {
  if (mousePosition === 'right') {
    if (youCan.delete) {
      todos.removeTodo(id);
    } else {
      const reasonCanNot = youCan.rules.find((rule) =>
        rule.action.includes(ACTIONS.delete)
      )?.reason;
      alert(reasonCanNot);
    }
  } else {
    todos.completedTodo(id);
  }
};
const handleTodoDoubleClick = (id: string, title: string) => {
  const foundTodo = todos.list.find((todo) => todo.id === id);
  if (foundTodo) foundTodo.title = title;
};

provide('todoActions', {
  handleTodoClick,
  handleTodoDoubleClick
});
</script>

<template>
  <div
    className="h-screen bg-[#f5f5f5] text-[#444] flex flex-col items-center justify-start"
  >
    <h1
      className="text-[9rem] opacity-40 text-center text-purple-500 font-medium"
    >
      todos
    </h1>
    <div className="w-[400px] max-w-full shadow-xl">
      <form @submit.prevent="handleAddTodo">
        <input
          v-model="todoName"
          className="w-full px-8 py-4 border-none text-[#444] text-3xl focus:outline-purple-500"
        />
      </form>
      <TodoList
        @on-todo-click="handleTodoClick"
        @on-todo-double-click="handleTodoDoubleClick"
      />
    </div>
    <small className="text-[#b5b5b5] mt-12 text-center">
      Left click to toggle completed.
      <br />
      Right click to delete todo
      <br />
      Double click to edit todo
    </small>
  </div>
</template>

<style scoped lang="ts"></style>
