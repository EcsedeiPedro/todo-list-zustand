"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Checkbox } from "@/src/components/ui/checkbox";
import { useTodoStore } from "@/src/store/use-todo-store";
import { usersMock } from "@/src/mocks/users";

export const CreateNewTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const addTask = useTodoStore((state) => state.addTask);

  const handleSubmit = () => {
    const user = usersMock.find((u) => u.id === selectedUser);
    if (!user) return alert("Por favor, selecione um usuário.");

    const newTask = {
      id: Date.now().toString(),
      userName: user.name,
      taskName,
      description,
      checked,
      avatar: user.avatar,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addTask(newTask);

    setTaskName("");
    setDescription("");
    setChecked(false);
    setSelectedUser("");
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="w-max bg-rose-400">
        Criar Tarefa
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar Nova Tarefa</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <label className="text-sm text-gray-600">
              Nome da Tarefa
              <Input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
            </label>

            <label className="text-sm text-gray-600">
              Descrição
              <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>

            <label className="text-sm text-gray-600">
              Usuário
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded"
              >
                <option value="" disabled>
                  Selecione um usuário
                </option>
                {usersMock.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <Checkbox checked={checked} onCheckedChange={setChecked} />
              Marcar como concluída
            </label>
          </div>

          <DialogFooter>
            <Button onClick={handleSubmit} className="bg-rose-400">
              Salvar
            </Button>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
