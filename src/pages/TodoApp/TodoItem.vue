<script lang="ts" setup>
import { toRefs } from 'vue';
import type { Todo } from '~/interfaces/todo';

interface TodoItemProps {
  todo: Todo;
}

interface TodoItemEmits {
  (eventName: 'onTodoClick', id: string, mousePosition: 'left' | 'right'): void;
  (eventName: 'onTodoDoubleClick', id: string, title: string): void;
}

const props = withDefaults(defineProps<TodoItemProps>(), {});

const emit = defineEmits<TodoItemEmits>();

// const { handleTodoClick, handleTodoDoubleClick } = inject(
//   'todoActions',
// ) as TodosActions;

const { completed, id, title } = toRefs(props.todo);
</script>

<template>
  <li
    class="px-8 py-4 outline-1 outline-teal-500 text-2xl border-t-2 border-gray-300"
    :class="{
      'text-[#b6b6b6] line-through': completed,
    }"
    @contextmenu.prevent
    @click.left="() => emit('onTodoClick', id, 'left')"
    @click.right="() => emit('onTodoClick', id, 'right')"
    @dblclick="() => emit('onTodoDoubleClick', id, title)"
  >
    {{ title }}
  </li>
</template>

<!-- @click.left="() => emit('onTodoClick', id, 'left')"
    @click.right="() => emit('onTodoClick', id, 'right')"
    @dblclick="() => emit('onTodoDoubleClick', id, title)" -->
