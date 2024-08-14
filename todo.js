// при загрузке страницы функция init заходит в localStorage проверяет массив

// array todos
// function create input > добавление объекта в array todos (addTodo)
//  функция render (статус, текст, номер, две кнопки)
// функция save (сохраняет массив в localStorage)

// две функции на кнопках todo (ищет элемент по номеру)



const arrTodos = [];

const addTodo = () => {
    const newTodo = document.getElementById("inp");
    arrTodos.push(
        {
            value: newTodo.value,
            isDone: false
        }
    );
    console.log(arrTodos);
};

const saveTodo = () => {

};

const render = () => {
    const todosCont = document.getElementById("todos");
    todosCont.innerHTML = "";
    arrTodos.map((obj) => {
        const newDiv = document.createElement("div");
        const newP = document.createElement("p");
        newP.innerText = obj.value;
        document.getElementById("todos").appendChild(newDiv);
        const newDoneButt = document.createElement("button",);
        newDoneButt.innerHTML = "Готово";
        const newDelButt = document.createElement("button",);
        newDelButt.innerHTML = "Удалить";

        newDiv.appendChild(newP);
        newDiv.appendChild(newDoneButt);
        newDiv.appendChild(newDelButt);
    }
    )
};

const init = () => {

};