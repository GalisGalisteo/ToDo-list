import * as readline from 'readline';
import TodoList, { Task } from './app';

const todoList = new TodoList();

// Creating interface CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to display all tasks
function displayTasks(todoList: TodoList) {
    const tasks = todoList.getTasks()
    console.log('=== ToDo List ===');
    tasks.forEach((task) => {
        const status = task.completed ? '[x]' : '[ ]';
        console.log(`${status} ${task.id}. ${task.title}`);
    });
    console.log('=================');
}

function promptUser() {
    const intro =
`

Choose an option:

    - "a" to add a task
    - "c" to comlete a task
    - "d" to delete a task
    - "s" to show all tasks
    - "e" to exit

Your answer: `;
    rl.question(intro, (input) => {
        if (input === 'e') {
            rl.close();
            return;
        }

        switch (input) {
            case 'a':
                rl.question("Write the task's title: ", (title) => {
                    todoList.addTask(title);
                    console.log(`Task "${title}" added succesfully.`);
                    displayTasks(todoList);
                    promptUser();
                });
                break;

            case 'c':
                rl.question("Write the task's id you want to complete: ", (id) => {
                    const taskId = parseInt(id, 10);
                    todoList.completeTask(taskId);
                    console.log(`Task ${id} completed succesfully`);
                    displayTasks(todoList);
                    promptUser();
                });
                break;

            case 'd':
                rl.question("Write the task's id you want to delete: ", (id) => {
                    const taskId = parseInt(id, 10);
                    todoList.deleteTask(taskId);
                    console.log(`Task ${id} erased succesfully.`);
                    displayTasks(todoList);
                    promptUser();
                });
                break;

            case 's':
                const tasks = todoList.getTasks();
                displayTasks(todoList);
                promptUser();
                break;

            default:
                console.log('Command invalid');
                promptUser();
                break;
        }
    });
}

// Start CLI
console.log('Welcome to your ToDo List!');
promptUser();