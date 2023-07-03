"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var app_1 = require("./app");
var todoList = new app_1.default();
// Creating interface CLI
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Function to display all tasks
function displayTasks(todoList) {
    var tasks = todoList.getTasks();
    console.log('=== ToDo List ===');
    tasks.forEach(function (task) {
        var status = task.completed ? '[x]' : '[ ]';
        console.log("".concat(status, " ").concat(task.id, ". ").concat(task.title));
    });
    console.log('=================');
}
function promptUser() {
    var intro = "\n\nChoose an option:\n\n    - \"a\" to add a task\n    - \"c\" to comlete a task\n    - \"d\" to delete a task\n    - \"s\" to show all tasks\n    - \"e\" to exit\n\nYour answer: ";
    rl.question(intro, function (input) {
        if (input === 'e') {
            rl.close();
            return;
        }
        switch (input) {
            case 'a':
                rl.question("Write the task's title: ", function (title) {
                    todoList.addTask(title);
                    console.log("Task \"".concat(title, "\" added succesfully."));
                    promptUser();
                });
                break;
            case 'c':
                rl.question("Write the task's id you want to complete: ", function (id) {
                    var taskId = parseInt(id, 10);
                    todoList.completeTask(taskId);
                    console.log("Task ".concat(id, " completed succesfully"));
                    promptUser();
                });
                break;
            case 'd':
                rl.question("Write the task's id you want to delete: ", function (id) {
                    var taskId = parseInt(id, 10);
                    todoList.deleteTask(taskId);
                    console.log("Task ".concat(id, " erased succesfully."));
                    promptUser();
                });
                break;
            case 's':
                var tasks = todoList.getTasks();
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
