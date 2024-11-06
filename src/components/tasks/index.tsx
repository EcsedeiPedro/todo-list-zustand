"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { useTodoStore } from "@/src/store/use-todo-store";

interface TodoCardProps {
  taskId: string;
  openModal: (taskId: string) => void;
}

export const TodoCard = ({ taskId, openModal }: TodoCardProps) => {
  const task = useTodoStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) return null;

  return (
    <Card className="rounded-3xl">
      <CardHeader className="border-b-2 flex flex-row items-center gap-4">
        <Avatar className="bg-rose-400">
          <AvatarImage src={task.avatar} />
          <AvatarFallback className="bg-rose-400">{task.userName[0]}</AvatarFallback>
        </Avatar>

        <span className="text-rose-400 font-bold text-sm">{task.userName}</span>
      </CardHeader>

      <CardContent className="py-5 flex flex-col gap-4">
        <CardDescription>
          <span className="text-stone-700 font-bold text-lg">
            {task.taskName}
          </span>
        </CardDescription>

        <div>
          <span className="text-stone-500 text-sm">
            Status: {task.checked ? "Completo" : "Pendente"}
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="bg-rose-400" onClick={() => openModal(taskId)}>
          Ver mais
        </Button>
      </CardFooter>
    </Card>
  );
};
