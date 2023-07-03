"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (title) {
        if (title.trim() === '') {
            throw new Error('Invalid title');
        }
        var id = this.tasks.length + 1;
        var newTask = {
            id: id,
            title: title,
            completed: false,
        };
        this.tasks.push(newTask);
    };
    TodoList.prototype.completeTask = function (id) {
        var findTask = this.tasks.find(function (task) { return task.id === id; });
        if (!findTask) {
            throw new Error("The id ".concat(id, " doesn't exist"));
        }
        findTask.completed = true;
    };
    TodoList.prototype.deleteTask = function (id) {
        var taskIndex = this.tasks.findIndex(function (task) { return task.id === id; });
        if (taskIndex == -1) {
            throw new Error("The id ".concat(id, " doesn't exist"));
        }
        this.tasks.splice(taskIndex, 1);
    };
    TodoList.prototype.getTasks = function () {
        return this.tasks;
    };
    return TodoList;
}());
exports.default = TodoList;
