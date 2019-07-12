// ? is this real life
// ! woah thats a nice comment lmao
// todo yea boii lets go

const list = document.getElementById("task-list");
const trash = document.querySelectorAll("li .delete-task");
console.log(trash);
console.log(trash.parentElement);

// ! delete a Task
// ? I DONT EVEN KNOW WHY  THIS IS NOT WORKING
list.addEventListener("click", function(e) {
  console.log(e.target);
  console.log(e.target.parentElement);
  console.log(e.target.parentElement.parentElement);
  e.preventDefault();
  if (e.target.className == "delete-task") {
    const li = e.target.parentElement;
    li.style.opacity = "0";
    li.style.transform = "translateX(50px)";
    setTimeout(function(e) {
      list.removeChild(li);
    }, 850);
  }
});

/* Array.from(trash).forEach(item => {
  item.addEventListener("click", e => {
    const li = item.parentElement;
    li.style.opacity = "0";
    setTimeout(function(e) {
      list.removeChild(li);
    }, 850);
  });
});*/

const addForm = document.forms[1];
addForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const text = addForm.querySelector('input[type="text"]').value;
  // ? creating span elements and adding classes to them

  const task = document.createElement("span");
  task.classList.add("task-name");
  task.textContent = text;

  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("delete-task");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  const newLi = document.createElement("li");

  // ? adding spans to the new Li

  newLi.appendChild(task);
  newLi.appendChild(deleteBtn);

  // ! adding the elements to the the list

  setTimeout(function(e) {
    list.appendChild(newLi);
  }, 500);
});
