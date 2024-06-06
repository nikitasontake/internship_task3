document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(taskDiv);
        saveTasks();
    };

    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

    taskInput.value = '';

    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task span').forEach(task => tasks.push(task.textContent));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');

    tasks.forEach(taskText => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            taskList.removeChild(taskDiv);
            saveTasks();
        };

        taskDiv.appendChild(taskContent);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);
    });
}