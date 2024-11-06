import { GridContainer } from "@/src/components/ui/grid-container"
import { TasksWrapper } from "./tasks"
import { CreateNewTask } from "./create-task"

export const Home = () => {
    return (
        <main className="h-screen">
            <GridContainer className="h-full flex items-center">
                <section className="w-1/2">
                    <GridContainer className="h-full flex flex-col gap-2">
                        <h1 className="text-rose-400 font-bold text-4xl">To-do List React</h1>

                        <p className="text-white text-sm font-semibold">Gerencie suas tarefas da melhor forma.</p>

                        <CreateNewTask />
                    </GridContainer>
                </section>

                <TasksWrapper />
            </GridContainer>
        </main>
    )
}