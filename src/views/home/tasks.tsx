"use client";

import { GridContainer } from "@/src/components/ui/grid-container";
import { TodoCard } from "@/src/components/tasks";
import { TaskModal } from "@/src/components/tasks/modal";
import { useState } from "react";
import { useTodoStore } from "@/src/store/use-todo-store";

export const TasksWrapper = () => {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const tasks = useTodoStore((state) => state.tasks);

  const openModal = (taskId: string) => setSelectedTaskId(taskId);
  const closeModal = () => setSelectedTaskId(null);

  return (
    <section className="w-1/2">
      <GridContainer className="h-full flex flex-col">
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <TodoCard key={task.id} taskId={task.id} openModal={openModal} />
          ))}
        </div>

        {selectedTaskId && (
          <TaskModal
            taskId={selectedTaskId}
            isOpen={!!selectedTaskId}
            onClose={closeModal}
          />
        )}
      </GridContainer>
    </section>
  );
};
