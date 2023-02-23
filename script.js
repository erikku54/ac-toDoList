// 初始變數
const list = document.querySelector("#my-todo");
const list2 =document.querySelector("#my-done");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// function: add item
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

// Create
addBtn.addEventListener("click", function () {

  //use trim() to avoid blank value
  const inputValue = input.value.trim();

  if (inputValue.length > 0) {
    addItem(inputValue);
    input.value="";
  }
});


// pressing "enter" also work
input.addEventListener('keyup', (e)=>{

    if (e.key=="Enter")
    {
        //use trim() to avoid blank value
        const inputValue = input.value.trim();

        if (inputValue.length > 0) {
            addItem(inputValue);
            input.value="";
        }
    }
})


// Delete and check
list.addEventListener("click", function (event) {

  const target = event.target;
  let parentElement = target.parentElement;

  console.log(target.tagName);

  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName == "LABEL") {
    target.classList.toggle("checked");

    //move element to another list
    list.removeChild(parentElement);
    list2.appendChild(parentElement);
  }
});

//uncheck
list2.addEventListener("click", (e)=>{

    const target = e.target;
    let parentElement=target.parentElement;

    if (target.classList.contains("delete")){
        parentElement.remove();
    } else if (target.tagName == "LABEL"){
        target.classList.toggle("checked");

        //move element to another list
        list2.removeChild(parentElement);
        list.appendChild(parentElement);
    }
});

