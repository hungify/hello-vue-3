export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodosState {
  list: Todo[];
}

export interface TodosActions {
  fetchTodos?: () => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  completedTodo: (id: string) => void;
}

export interface TodosStore {
  todos: TodosState & TodosActions;
}
