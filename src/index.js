document.addEventListener("DOMContentLoaded", () => {
  // your code here
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
    // Check if taskInput is not null
    if (!taskInput) {
        console.error("Task input field not found.");
        return;
    }
    const taskDescription = taskInput.value;
    const priority = document.getElementById("priority").value;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    if (priority === "high") {
      taskItem.style.color = "red";
      } else if (priority === "medium") {
        taskItem.style.color = "yellow";
    } else {
      taskItem.style.color = "green";
    }

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

    tasks.sort((a, b)=> {
      if ( priorityA === "red" && priorityB !== "red") return -1;
      if (priorityA === "orange" && priorityB === "blue") return -1;

      return 1
    });
    taskList.innerHTML = "";
    tasks.forEach((task) => taskList.appendChild(task));
  }
