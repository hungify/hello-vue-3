<script lang="ts" setup>
import TodoList from './TodoList.vue';
import TodoItem from './TodoItem.vue';
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
      <TodoList v-slot="{ todos, onTodoClick, onTodoDoubleClick, onAddTodo }">
        <form @submit.prevent="onAddTodo">
          <input
            type="text"
            autofocus
            name="title"
            spellCheck="false"
            className="w-full px-8 py-4 border-none text-[#444] text-3xl
        focus:outline-purple-500"
          />
        </form>
        <ul className="bg-white">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @onTodoClick="onTodoClick"
            @onTodoDoubleClick="onTodoDoubleClick"
          />
        </ul>
      </TodoList>
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
