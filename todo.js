// при загрузке страницы функция init заходит в localStorage проверяет массив

// array todos
// function create input > добавление объекта в array todos (addTodo)
//  функция render (статус, текст, номер, две кнопки)
// функция save (сохраняет массив в localStorage)

// две функции на кнопках todo (ищет элемент по номеру)

const arrTodos = [];

const addTodo = () => {
  const newTodo = document.getElementById("inp");
  arrTodos.push({
    value: newTodo.value,
    isDone: false,
    number: arrTodos.length,
  });
  console.log(arrTodos);
};

// const doneTodo = (n) => {
// }
// const delTodo = (n) => {
//   const deleteN = arrTodos.splice(n, 1);
//   // delete arrTodos[n];
// };

const render = () => {
  const todosCont = document.getElementById("todos");
  const delTodo = (n) => {
    // const deleteN = arrTodos.splice(n, 1);
    delete arrTodos[n];
    console.log(arrTodos);
  };
  todosCont.innerHTML = " ";
  const template = (title, n) => `
    <div>
        <p>Номер ${n}</p>
        <p>${title}</p>
        <button onclick = "${n}">Выполнено</button>
        <button onclick = "${delTodo(n)}">Удалить</button>
    </div>`;
  /*без {} и без return тк в одну строку*/
  const items = arrTodos.map((obj) => template(obj.value, obj.number));
  todosCont.innerHTML = items.join("\n");
};

const result = () => {
  addTodo();
  render();
};

const saveTodo = () => {};

const del = (el) => {};

// const newDiv = document.createElement("div");
// const newP = document.createElement("p");
// newP.innerText = obj.value;
// document.getElementById("todos").appendChild(newDiv);
// const newDoneButt = document.createElement("button",);
// newDoneButt.innerHTML = "Готово";
// const newDelButt = document.createElement("button",);
// newDelButt.innerHTML = "Удалить";
// newDiv.appendChild(newP);
// newDiv.appendChild(newDoneButt);
// newDiv.appendChild(newDelButt);

// newDoneButt.addEventListener

// const template = (title, n) => `
// <div>
//     <p>${title}</p>
//     <button click=() => delete(${n})></button>
// </div>`

// мап должен возвращать темплейт для каждой тудушки (это строка с html)
// string[] -> string используя join и добавить в innerHtml

/**
 *
 */
const init = () => {};
