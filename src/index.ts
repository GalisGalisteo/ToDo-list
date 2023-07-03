import TodoList, { Task } from './app';

const todoList = new TodoList();
const completedTasks = new Set<number>(); // Store completed task IDs

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
      <input type="checkbox" ${completedTasks.has(task.id) ? 'checked' : ''}>
      <span>${task.title}</span>
      <button class="delete-button" data-task-id="${task.id}">Delete</button>
    `;
        taskListContainer.appendChild(taskItem);
    });

    // Add event listeners to the delete buttons
    const deleteButtons = document.getElementsByClassName('delete-button');
    Array.from(deleteButtons).forEach((button) => {
        button.addEventListener('click', () => {
            const taskId = parseInt(button.getAttribute('data-task-id') || '');
            deleteTask(taskId);
        });
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
            completedTasks.add(id);
        } else {
            completedTasks.delete(id);
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
        completedTasks.delete(id); // Remove from completed tasks
        renderTasks();
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
    }
}

// Event listener for adding a task
addTaskForm.addEventListener('submit', addTask);

// Add event listener to the task list container and use event delegation
taskListContainer.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.tagName.toLowerCase() === 'input' && target.getAttribute('type') === 'checkbox') {
        const taskId = parseInt(target.parentNode?.querySelector('.delete-button')?.getAttribute('data-task-id') || '');
        const checked = target.checked;
        completeTask(taskId, checked);
    }
});

// Initial rendering of tasks
renderTasks();
