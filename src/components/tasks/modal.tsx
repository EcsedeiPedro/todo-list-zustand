import { useTodoStore } from "@/src/store/use-todo-store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

interface TaskModalProps {
  taskId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const TaskModal = ({ taskId, isOpen, onClose }: TaskModalProps) => {
  const task = useTodoStore((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  if (!task) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl text-rose-400">
            {task.taskName}
          </DialogTitle>

          <div className="flex items-center gap-4 py-5">
            <Avatar className="bg-rose-400">
              <AvatarImage src={task.avatar} alt="User avatar" />
              <AvatarFallback className="bg-rose-400">{task.userName[0]}</AvatarFallback>
            </Avatar>

            <span className="text-stone-700 font-semibold">
              {task.userName}
            </span>
          </div>

          <p className="text-sm text-stone-500">
            {task.createdAt.toLocaleString()}
          </p>

          <p className="text-sm text-stone-500">
            Última Atualização: {task.updatedAt.toLocaleString()}
          </p>
        </DialogHeader>

        <DialogDescription>
          <p className="text-stone-700">Descrição: {task.description}</p>
        </DialogDescription>

        <div>
          <p>Status: {task.checked ? "Completed" : "Pending"}</p>
        </div>

        <DialogFooter>
          <Button onClick={onClose}>Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
