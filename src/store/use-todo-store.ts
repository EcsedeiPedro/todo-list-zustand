import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Task {
  id: string;
  userName: string;
  taskName: string;
  checked: boolean;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  avatar: string;
}

interface TodoState {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { ...task, createdAt: new Date(), updatedAt: new Date() },
          ],
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, checked: !task.checked, updatedAt: new Date() }
              : task
          ),
        })),
    }),
    {
      name: "todo-storage",
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);
