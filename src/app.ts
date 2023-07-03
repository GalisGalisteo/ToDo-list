export type Task = {
    id: number;
    title: string;
    completed: boolean;
};

class TodoList {
    private tasks: Task[] = [];

    constructor() {
        this.tasks = [];
    }

    addTask(title: string) {
        if (title.trim() === '') {
            throw new Error('Invalid title');
        }
        const id = this.tasks.length + 1;
        const newTask: Task = {
            id,
            title,
            completed: false,
        };
        this.tasks.push(newTask);
    }

    completeTask(id: number) {
        const findTask = this.tasks.find((task) => task.id === id);
        if (!findTask) {
            throw new Error(`The id ${id} doesn't exist`)
        }
        findTask.completed = true;
    }

    deleteTask(id: number) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex == -1) {
            throw new Error(`The id ${id} doesn't exist`)
        }
        this.tasks.splice(taskIndex, 1);
    }

    getTasks(): Task[] {
        return this.tasks;
    }
}

export default TodoList;