import TodoList from "../src/app";

describe('TodoList', () => {
    let todoList: TodoList;

    beforeEach(() => {
        todoList = new TodoList()
    });

    test("should add a task with the given title", () => {
        const title = 'Task 1';
        todoList.addTask(title);
        expect(todoList.getTasks()[0].title).toBe(title);
    });

    test("should throw an Error when tittle is an empty string", () => {
        const error = 'Invalid title';
        expect(() =>todoList.addTask('')).toThrowError(error);
    });

    test("should mark the task as completed", () => {
        const title = 'Task 1';
        todoList.addTask(title);
        const id = 1;
        todoList.completeTask(id);
        const task = todoList.getTasks().find((task) => task.id === id);
        expect(task?.completed).toBe(true);
    });

    test("should throw an Error when id doesn't exist", () => {
        const id = 1;
        const error = `The id ${id} doesn't exist`;
        expect(() => todoList.completeTask(id)).toThrowError(error);
    });

    test("should delete a task", () => {
        const title = 'Task 1';
        todoList.addTask(title);
        const id = 1;
        todoList.deleteTask(id);
        expect(todoList.getTasks()).toHaveLength(0);
    });

    test("should throw an Error when id doesn't exist", () => {
        const id = 1;
        const error = `The id ${id} doesn't exist`;
        expect(() => todoList.deleteTask(id)).toThrowError(error);
    });
})