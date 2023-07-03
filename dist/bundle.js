/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass TodoList {\n    constructor() {\n        this.tasks = [];\n        this.tasks = [];\n    }\n    addTask(title) {\n        if (title.trim() === '') {\n            throw new Error('Invalid title');\n        }\n        const id = this.tasks.length + 1;\n        const newTask = {\n            id,\n            title,\n            completed: false,\n        };\n        this.tasks.push(newTask);\n    }\n    completeTask(id) {\n        const findTask = this.tasks.find((task) => task.id === id);\n        if (!findTask) {\n            throw new Error(`The id ${id} doesn't exist`);\n        }\n        findTask.completed = true;\n    }\n    deleteTask(id) {\n        const taskIndex = this.tasks.findIndex((task) => task.id === id);\n        if (taskIndex == -1) {\n            throw new Error(`The id ${id} doesn't exist`);\n        }\n        this.tasks.splice(taskIndex, 1);\n    }\n    getTasks() {\n        return this.tasks;\n    }\n}\nexports[\"default\"] = TodoList;\n\n\n//# sourceURL=webpack://sprint_1_new/./src/app.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\nconst todoList = new app_1.default();\nconst completedTasks = new Set();\nconst taskListContainer = document.getElementById('taskList');\nconst addTaskForm = document.getElementById('addTaskForm');\nconst taskInput = document.getElementById('taskInput');\nfunction renderTasks() {\n    taskListContainer.innerHTML = '';\n    const tasks = todoList.getTasks();\n    tasks.forEach((task) => {\n        const taskItem = document.createElement('div');\n        taskItem.innerHTML = `\n      <input type=\"checkbox\" ${completedTasks.has(task.id) ? 'checked' : ''}>\n      <span>${task.title}</span>\n      <button class=\"delete-button\" data-task-id=\"${task.id}\">Delete</button>\n    `;\n        taskListContainer.appendChild(taskItem);\n    });\n    const deleteButtons = document.getElementsByClassName('delete-button');\n    Array.from(deleteButtons).forEach((button) => {\n        button.addEventListener('click', () => {\n            const taskId = parseInt(button.getAttribute('data-task-id') || '');\n            deleteTask(taskId);\n        });\n    });\n}\nfunction addTask(event) {\n    event.preventDefault();\n    const title = taskInput.value.trim();\n    try {\n        todoList.addTask(title);\n        renderTasks();\n        taskInput.value = '';\n    }\n    catch (error) {\n        if (error instanceof Error) {\n            alert(error.message);\n        }\n    }\n}\nfunction completeTask(id, checked) {\n    try {\n        if (checked) {\n            completedTasks.add(id);\n        }\n        else {\n            completedTasks.delete(id);\n        }\n        renderTasks();\n    }\n    catch (error) {\n        if (error instanceof Error) {\n            alert(error.message);\n        }\n    }\n}\nfunction deleteTask(id) {\n    try {\n        todoList.deleteTask(id);\n        completedTasks.delete(id);\n        renderTasks();\n    }\n    catch (error) {\n        if (error instanceof Error) {\n            alert(error.message);\n        }\n    }\n}\naddTaskForm.addEventListener('submit', addTask);\ntaskListContainer.addEventListener('change', (event) => {\n    var _a, _b;\n    const target = event.target;\n    if (target.tagName.toLowerCase() === 'input' && target.getAttribute('type') === 'checkbox') {\n        const taskId = parseInt(((_b = (_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector('.delete-button')) === null || _b === void 0 ? void 0 : _b.getAttribute('data-task-id')) || '');\n        const checked = target.checked;\n        completeTask(taskId, checked);\n    }\n});\nrenderTasks();\n\n\n//# sourceURL=webpack://sprint_1_new/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;