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

    todoList.forEach(function(todoElement, index){
        const html = `
            <div>${todoElement.name}</div>
            <div>${todoElement.dueDate} </div>
            <button class="delete-button" onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
            ">Delete</button>
            `;
        todoListHTML += html;
    });
    // for (let i = 0; i < todoList.length; i++){
    //     const html = `
    //         <div>${todoList[i].name}</div>
    //         <div>${todoList[i].dueDate} </div>
    //         <button class="delete-button" onclick="
    //             todoList.splice(${i}, 1);
    //             renderTodoList();
    //         ">Delete</button>
    //         `;
    //     todoListHTML += html;
    // }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo(); 
    renderTodoList();
});

document.body.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
        addTodo(); 
        renderTodoList();
    }
});