const todoList = [{
    name: 'make dinner', 
    dueDate: '2022-10-22'
    }, 
    {
        name: 'make breakfast',
        dueDate: '2022-11-23'
    }
    ];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
       // const name = todoObject.name;
       // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
             <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
             " class="delete-todo-button">Delete</button>
        `;
        todoListHtml += html;
    }
   

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateinputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateinputElement.value;
    

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}