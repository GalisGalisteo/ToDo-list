"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var todoList = new app_1.default();
var taskListContainer = document.getElementById('taskList');
var addTaskForm = document.getElementById('addTaskForm');
var taskInput = document.getElementById('taskInput');
// Function to render tasks on the page
function renderTasks() {
    taskListContainer.innerHTML = '';
    var tasks = todoList.getTasks();
    tasks.forEach(function (task) {
        var taskItem = document.createElement('div');
        taskItem.innerHTML = "\n            <input type=\"checkbox\" ".concat(task.completed ? 'checked' : '', " \n                onclick=\"completeTask(").concat(task.id, ", this.checked)\">\n            <span>").concat(task.title, "</span>\n            <button onclick=\"deleteTask(").concat(task.id, ")\">Delete</button>\n        ");
        taskListContainer.appendChild(taskItem);
    });
}
// Function to add a new task
function addTask(event) {
    event.preventDefault();
    var title = taskInput.value.trim();
    try {
        todoList.addTask(title);
        renderTasks();
        taskInput.value = '';
    }
    catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
    }
}
// Function to complete a task
function completeTask(id, checked) {
    try {
        if (checked) {
            todoList.completeTask(id);
        }
        else {
            // Optional: Add functionality to mark task as incomplete
        }
        renderTasks();
    }
    catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
    }
}
// Function to delete a task
function deleteTask(id) {
    try {
        todoList.deleteTask(id);
        renderTasks();
    }
    catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
    }
}
// Event listener for adding a task
addTaskForm.addEventListener('submit', addTask);
// Initial rendering of tasks
renderTasks();
