import TodoList, { Task } from './app';

const todoList = new TodoList();
const taskListContainer = document.getElementById('taskList')!;
const addTaskForm = document.getElementById('addTaskForm')!;
const taskInput = document.getElementById('taskInput') as HTMLInputElement;

// Function to render tasks on the page
function renderTasks() {
    taskListContainer.innerHTML = '';
    const tasks = todoList.getTasks();

    tasks.forEach((task) => {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} 
                onclick="completeTask(${task.id}, this.checked)">
            <span>${task.title}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskListContainer.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask(event: Event) {
    event.preventDefault();
    const title = taskInput.value.trim();

    try {
        todoList.addTask(title);
        renderTasks();
        taskInput.value = '';
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
    }
}

// Function to complete a task
function completeTask(id: number, checked: boolean) {
    try {
        if (checked) {
            todoList.completeTask(id);
        } else {
            // Optional: Add functionality to mark task as incomplete
        }
        renderTasks();
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
    }
}

// Function to delete a task
function deleteTask(id: number) {
    try {
        todoList.deleteTask(id);
        renderTasks();
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
    }
}

// Event listener for adding a task
addTaskForm.addEventListener('submit', addTask);

// Initial rendering of tasks
renderTasks();
