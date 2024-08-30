class Group {
  constructor(type, inp, todos) {
    this.tipe = type;
    this.arr = [];
    this.inp = inp;
    this.todos = todos;
  }

  addTodo() {
    const newTodo = document.getElementById(this.inp);
    if (newTodo.value === null || newTodo.value === "") {
        alert ('no todo')
    } else { 
        this.arr.push({
            value: newTodo.value,
            isDone: false,
            number: this.arr.length,
          });
          newTodo.value = "";
    }
    console.log(this.arr);
  };

  render() {
    const todosCont = document.getElementById(this.todos);
    const del = 
    todosCont.innerHTML = "";
    const template = (title, n) => `
          <div>
              <p>Номер ${n}</p>
              <p>${title}</p>
              <button onclick = "${n}">Выполнено</button>
              <button onclick = "${n}">Удалить</button>
          </div>`;
    /*без {} и без return тк в одну строку*/
    const items = this.arr.map((obj) => template(obj.value, obj.number));
    todosCont.innerHTML = items.join("\n");
  }

  result() {
    this.addTodo();
    this.render();
  }
}

const myTodos = new Group("My Todos", "inpMy", "todosMy");
const workTodos = new Group("Work Todos", "inpWork", "todosWork");
const wishTodos = new Group("Wish Todos", "inpWish", "todosWish");
