document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    handleTaskCreation();
  });

  const sortButton = document.getElementById("sort-button");
  if (sortButton) {
    sortButton.addEventListener("click", sortTasks);
  }
});

function handleTaskCreation() {
  const taskInput = document.getElementById("new-task-description");
  if (!taskInput) {
    console.error("Task input field not found.");
    return;
  }
  const taskDescription = taskInput.value;
  const user = document.getElementById("user").value;
  const duration = document.getElementById("duration").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  const taskItem = document.createElement("li");
  taskItem.textContent = `${taskDescription} (User: ${user}, Duration: ${duration}, Due: ${dueDate})`;

  if (priority === "high") {
    taskItem.style.color = "red";
  } else if (priority === "medium") {
    taskItem.style.color = "yellow";
  } else {
    taskItem.style.color = "green";
  }

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function () {
    taskInput.value = taskDescription;
    document.getElementById("priority").value = priority;
    document.getElementById("user").value = user;
    document.getElementById("duration").value = duration;
    document.getElementById("due-date").value = dueDate;
    taskItem.remove();
  });

  taskItem.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.appendChild(deleteButton);

  const taskList = document.getElementById("tasks");
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

function sortTasks() {
  const taskList = document.getElementById("tasks");
  const tasks = Array.from(taskList.children);

  tasks.sort((a, b) => {
    const priorityA = a.style.color;
    const priorityB = b.style.color;

    if (priorityA === "red" && priorityB !== "red") return -1;
    if (priorityA === "yellow" && priorityB === "green") return -1;
    if (priorityA === "green" && priorityB !== "green") return 1;

    return 0;
  });

  taskList.innerHTML = "";
  tasks.forEach((task) => taskList.appendChild(task));
}
