const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');

// Cargar tareas al iniciar
loadTasks();

async function loadTasks() {
    const res = await fetch('/api/tasks');
    const tasks = await res.json();
    renderTasks(tasks);
}

function renderTasks(tasks) {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `${task.completed ? 'completed ' : ''}fade-in`;


        li.innerHTML = `
            <span>${task.title}</span>
            <div>
                <button class="action-btn complete-btn" onclick="toggleTask(${task.id}, this)">✔</button>

                <button class="action-btn delete-btn" onclick="deleteTask(${task.id}, this)">🗑</button>

            </div>
        `;

        taskList.appendChild(li);
    });
}

// Crear tarea
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = taskInput.value;

    await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });

    taskInput.value = '';
    loadTasks();
});

// Cambiar estado
async function toggleTask(id, btn) {
    const li = btn.closest('li');
    li.classList.add('fade-out');

    setTimeout(async () => {
        await fetch(`/api/tasks/${id}`, { method: 'PATCH' });
        loadTasks();
    }, 300);
}


// Eliminar tarea
async function deleteTask(id, btn) {
    const li = btn.closest('li');
    li.classList.add('fade-out');

    setTimeout(async () => {
        await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
        loadTasks();
    }, 300);
}