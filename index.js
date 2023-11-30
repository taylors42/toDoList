const add = document.querySelector(".addtask .remove");
const container = document.querySelector(".container");

add.addEventListener("click", () => {
  let task = document.createElement("div");
  let taskblock = document.createElement("div");
  let task_top = document.createElement("div");
  let task_title = document.createElement("p");
  let remove = document.createElement("button");
  let text = document.createElement("p");
  task.classList.add("task");
  taskblock.classList.add("taskblock");
  remove.classList.add("remove");
  task_title.classList.add("task-title");
  task_top.classList.add("tasktop");
  text.classList.add("text");
  container.appendChild(task);
  task.appendChild(taskblock);
  taskblock.appendChild(task_top);
  task_top.appendChild(task_title);
  task_top.appendChild(text);
  taskblock.appendChild(remove);
  task_title.textContent = document.querySelector(".addtask .task-title").value;
  text.textContent = document.querySelector(".addtask .text").value;
  remove.textContent = "X";
  remove.addEventListener("click", () => {
    task.style.display = "none";
  });
});
