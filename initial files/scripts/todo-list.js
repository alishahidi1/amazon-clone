const todoList = [];

function addTodo(){
    const inputName = document.querySelector('.js-name-input');
    const inputDate = document.querySelector('.js-date-input');

    const name = inputName.value;
    const dueDate = inputDate.value;
    
    todoList.push({name, dueDate});

    inputName.value = '';
    inputDate.value = '';
}

function renderTodoList(){
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++){
        const html = `
            <div>${todoList[i].name}</div>
            <div>${todoList[i].dueDate} </div>
            <button class="delete-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">Delete</button>
            `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}