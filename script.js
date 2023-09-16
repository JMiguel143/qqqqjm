const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(){
  const taskText = taskInput.value.trim();
  if(taskText === "") return;

  const task = { text: taskText };
  tasks.push(task);

  localStorage.getItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";

  displayTasks();
}
function onFormSubmit() {
  if (validate()) {
      var formData = readFormData();
      if (taskList == null)
          insertNewRecord(formData);
      else
          updateRecord(formData);
      resetForm();
  }
}
function readFormData() {
  var formData = {};
  formData["taskInput"] = document.getElementById("taskInput").value;
  formData["taskList"] = document.getElementById("taskList").value;
  return formData;
}
function insertNewRecord(data) {
  var table = document.getElementById("taskList").getElementsByTagName('tbody')[0];
  var newRow = table.insertTask(table.length);
  cell1 = newInput.insertCell(0);
  cell1.innerHTML = data.taskInput;
  cell2 = newList.insertCell(1);
  cell2.innerHTML = data.taskList;

}
function deleteTask(index){
  tasks.splice(index, 1);

  localStorage.getItem("tasks", JSON.stringify(tasks));

  displayTasks();

}

function editTask(index){
  const newTaskText = prompt("Edit the Task:", tasks[index].text);

  if (newTaskText !== null) {
    tasks[index].text = newTaskText;

    localStorage.getItem("tasks", JSON.stringify(tasks));

    displayTasks();
  }
}

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
       <span>${task.text}</span>
       <hr>
       <button class="edit-button" onclick="editTask(${index})">Edit</button>
       <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
      `;

    taskList.appendChild(li);
  });
}