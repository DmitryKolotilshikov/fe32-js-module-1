const todoItemTemplate = document.querySelector('[data-todo-item-template]');
const todosContainer = document.querySelector('[data-todo-container]');
const inputAdd = document.querySelector('[data-input-add]');
const buttonAdd = document.querySelector('[data-button-add]');

let todos = [
    {id: 1, text: 'Learn JavaScript'},
    {id: 2, text: 'Learn HTML'},
    {id: 3, text: 'Learn CSS'},
];

buttonAdd.addEventListener('click', () => {
    const text = inputAdd.value.trim();

    if (text) {
        const newTodo = {
            id: todos.length + 1,
            text
        }
        todos.push(newTodo);
        inputAdd.value = '';
    }

    inputAdd.focus();
    render();
});

function createTodoItem(id, text) {
    // const todoItem1 = document.createElement('div');
    // todoItem1.classList.add('todo__item');
    // const inputCheckbox = document.createElement('input');
    // inputCheckbox.type = 'checkbox';
    // inputCheckbox.setAttribute('type', 'checkbox');
    // inputCheckbox.classList.add('todo__checkbox');
    // todoItem1.append(inputCheckbox)

    const todoItem = document.importNode(todoItemTemplate.content, true);
    const todoText = todoItem.querySelector('[data-todo-title]');
    todoText.textContent = text;

    const buttonRemove = todoItem.querySelector('[data-button-remove]');

    buttonRemove.addEventListener('click', () => {
        todos = todos.filter(todo => todo.id !== id);
        render();
    })

    return todoItem;
}

function clearTodoList() {
    todosContainer.innerHTML = '';
}

function appendTodos() {
    if (todos.length) {
        todos.forEach(el => {
            const todo = createTodoItem(el.id, el.text);
            todosContainer.append(todo);
        })
    } else {
        todosContainer.insertAdjacentHTML('beforeend', `
            <p>No todos...</p>
        `)
    }
}

function render() {
    clearTodoList();
    appendTodos();
}

render();
