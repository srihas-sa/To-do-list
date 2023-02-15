/* Follow the instructions found in the description to complete the JavaScript functionality.*/


function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);

    labelElement.classList.toggle('checked');
}

/*



*/

let x = document.getElementById("todoItemsContainer");


function todos(todo) {
    let todoId = 'todo' + todo.num;
    let checkboxId = 'checkbox' + todo.num;
    let labelId = 'label' + todo.num;


    let y = document.createElement("li");
    y.classList.add("todo-item-container", "d-flex", "flex-row");
    y.id = todoId;
    x.appendChild(y);

    let chec = document.createElement("input");
    chec.type = "checkbox";
    chec.id = checkboxId;
    chec.classList.add("checkbox-input");
    y.appendChild(chec);

    let lab = document.createElement("label");
    lab.setAttribute("for", chec.id);
    lab.classList.add("checkbox-label");
    lab.textContent = todo.name;
    lab.id = labelId;
    lab.style.color = "black";
    console.log("hello");


    chec.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    }

    let del = document.createElement("div");
    del.classList.add("delete-icon-container");


    let il = document.createElement("i");
    il.classList.add("far", "fa-trash-alt", "delete-icon");
    del.appendChild(il);

    il.onclick = function() {
        ondeletetodo(todoId);
    }

    let dis = document.createElement("div");
    dis.classList.add("d-flex", "flex-row", "label-container");
    dis.appendChild(lab);
    dis.appendChild(del);


    y.appendChild(dis);
    console.log(x);
}
let b = 1;

function buttons() {
    let ts = document.getElementById("todoUserInput");

    let c = ts.value;

    console.log(c);
    let a = {
        name: c,
        num: b
    }
    todos(a);
    b = b + 1;
    console.log(b);
}

function ondeletetodo(todoId) {
    let todoElement = document.getElementById(todoId);
    x.removeChild(todoElement);
}