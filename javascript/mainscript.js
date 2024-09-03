const todolist = [{name: '',
                   duedate: ''}];



function rendertodo() {
    let todolistHTML = '';
    for(let i=1; i<todolist.length; i++){
        const todo = todolist[i];
        const {name,duedate} = todo;
        const html = `<div>${name}</div>
        <div>${duedate}</div>
        <button onclick="
        todolist.splice(${i},1);
        rendertodo();" class="delete-todo-button">Delete</button>`;
        todolistHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function addto() {
    const inputElement = document.querySelector('.js-name-input');
    let name = inputElement.value;
    const dateinputElement = document.querySelector('.js-date-input');
    let duedate = dateinputElement.value;
    todolist.push({name: name, duedate: duedate});
    inputElement.value = '';
    rendertodo();
}

function rendertodohistory() {
    let todolistHTML = '';
    for(let i=1; i<todolist.length; i++){
        const todo = todolist[i];
        const {name,duedate} = todo;
        const html = `<div>${name}</div>
        <div>${duedate}</div>
        <p class="completed">Completed</button>`;
        todolistHTML += html;
    }
    document.querySelector('.js-history-list').innerHTML = todolistHTML;
}

function searchHistory(){
    const inputElement = document.querySelector('.js-name-input');
    let name = inputElement.value;
    const dateinputElement = document.querySelector('.js-date-input');
    let duedate = dateinputElement.value;
    todolist.push({name: name, duedate: duedate});
    inputElement.value = '';
    rendertodohistory();
}

function show() {
    document.getElementById('history').style.display="400px"
    document.getElementById('history').style.display="block"
    document.getElementById('toggle-btn').style.display="none"
}
function hide() {
    document.getElementById('history').style.display=""
    document.getElementById('history').style.display="none"
    document.getElementById('toggle-btn').style.display="inline"
}
/*function toggle() {
    var x = document.getElementById("history");

    if(x.style.display === 'none'){
        x.style.display = "block";
    }

    else{
        x.style.display = "none";
    }
}*/


