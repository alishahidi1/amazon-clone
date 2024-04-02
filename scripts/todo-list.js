const todoList = [];

function addTodo(){
    const inputName = document.querySelector('.js-name-input');
    const inputDate = document.querySelector('.js-date-input');

    const name = inputName.value;
    const dueDate = inputDate.value;
    
    todoList.push({name, dueDate});

    console.log(todoList);

    inputName.value = '';
    inputDate.value = '';
}

function renderTodoList(){
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++){
        const html = `
            <p>
                ${todoList[i].name} ${todoList[i].dueDate} 
                <button onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button>
            </p>`;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}