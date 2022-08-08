//var
const addTask = document.querySelector(".add-task");
const taskContainer = document.querySelector(".task-container");
const inputTask = document.querySelector("#task-text");

//event listener
addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let actionBtn = document.createElement("button");
  actionBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  actionBtn.classList.add("check");
  task.appendChild(actionBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.classList.add("delete");
  task.appendChild(deleteBtn);

  if (inputTask.value === "") {
    alert("please enter a task ");
  } else {
    taskContainer.appendChild(task);
  }
  inputTask.value = "";
  actionBtn.addEventListener("click", function () {
    actionBtn.parentElement.style.textDecoration = "line-through";
  });

  deleteBtn.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});
