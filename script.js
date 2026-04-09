// Select elements by ID  
const taskInput = document.getElementById("taskInput");  
const addBtn = document.getElementById("addBtn");  
const taskList = document.getElementById("taskList");  
// Add new task when button clicked  
addBtn.addEventListener("click", () => {  
const taskText = taskInput.value.trim();  
if (taskText !== "") {  
const li = document.createElement("li");  
li.textContent = taskText;  
// Mark complete on click  
li.addEventListener("click", () => {  
li.classList.toggle("completed");  
});  
// Create delete button  
const deleteBtn = document.createElement("button");  
deleteBtn.textContent = "Delete";  
deleteBtn.className = "delete-btn";  
deleteBtn.addEventListener("click", (e) => {  
e.stopPropagation();  
li.remove();  
});  
li.appendChild(deleteBtn);  
taskList.appendChild(li);  
taskInput.value = "";  
}  
});
